const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    carga_horaria: {
        type: String,
        required: true
    },
    mes_aplicacao:{
        type: Date, default: Date.now
    },
    data_criacao:{
        type: Date, default: Date.now
    },
    files: [{url: String, name: String}],
    eixo: {type: mongoose.ObjectId, ref: 'Eixo', required: true},
    curso: {type: mongoose.ObjectId, required: true},
    objetivo: {
        type: String,
        required: true
    },
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Atividade', esquema, 'atividades')