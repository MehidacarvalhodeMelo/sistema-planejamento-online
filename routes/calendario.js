const controller = require('../controllers/calendario')
const express = require('express')

const router = express.Router()

router.get('/:curso/:equipe/:mes', controller.obterCalendarioNivelMes)  // Retrieve (one)

module.exports = router