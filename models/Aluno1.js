const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    data_nascimento: { type: Date, required: true },
    ra: { type: String, required: true },
    rm: { type: String, required: true },
    telefone_contato: { type: String, required: true },
    // e-mail com índice único para evitar duplicidades
    email: { type: String, required: true, index: { unique: true } },

    equipe: { type: mongoose.ObjectId, ref: 'Equipe', required: true },

})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Aluno1', esquema, 'alunos1')