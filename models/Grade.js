const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    dia: {
        type: Number,
        required: true
    },
    eixo: {type: mongoose.ObjectId, ref: 'Eixo', required: true},
    equipe: {type: mongoose.ObjectId, ref: 'Equipe', required: true},
    data_criacao:{
        type: Date, default: Date.now
    },
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Grade', esquema, 'grades')