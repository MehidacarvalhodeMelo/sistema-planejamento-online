// Importar o model para dentro do controller
const Atividade = require('../models/Atividade')
const Grade = require('../models/Grade')
var ObjectId = require('mongoose').Types.ObjectId;
var moment = require('moment');

const controller = {}       // Objeto vazio

var getGrades = function(grades){
    let result = {};

    grades.forEach(g => {
        if (result[g.dia] !== undefined) {
            result[g.dia].push(g.eixo.toString())
        } else {
            result[g.dia] = [g.eixo.toString()]
        }; 
    });

    return result;
}

controller.obterCalendarioNivelMes = async (req, res) => {
    try {
        const curso = new ObjectId(req.params.curso);
        const equipe = new ObjectId(req.params.equipe)
        const mes_param = moment.utc(req.params.mes);

        // todas as atividades do nivel e do mes
        let dados_atividades = await Atividade.find({curso: curso, mes_aplicacao: mes_param}).populate('eixo').sort('data_criacao');

        let dados_grade = await Grade.find({equipe: equipe}).sort('data_criacao');

        let grade = getGrades(dados_grade);

        let dias_do_mes = Array.from(Array(mes_param.daysInMonth()).keys());

        let calendario = [];
        let order = 0;

        let atividades_ja_usadas = [];
        
        dias_do_mes.forEach(x => {
            dia = mes_param.set('date', x + 1);
            materias = grade[dia.day()];
            if (materias){ // se o dia é um dia da semana

                materias.forEach(materia => {
                    dados_atividades.every(atividade => {
                        let counts = atividades_ja_usadas.filter(x => x === atividade.id)

                        if(atividade.eixo.id === materia && counts.length < parseInt(atividade.carga_horaria)){
                            atividades_ja_usadas.push(atividade.id);
                            calendario.push({ 
                                title: atividade.titulo, 
                                date: dia.format('YYYY-MM-DD'),
                                backgroundColor: atividade.eixo.cor,
                                borderColor: atividade.eixo.cor,
                                order: order
                            });
                            order++;
                            return false;
                        }

                        return true;
                    });
                });

            }            
        });
        
        res.send(calendario) // Vai com status 200: OK
    }
    catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller