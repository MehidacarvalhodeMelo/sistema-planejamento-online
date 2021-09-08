const controller = require('../controllers/mestre')
const express = require('express')

const router = express.Router()
router.post('/login', controller.login)
router.post('/logout', controller.logout)


router.post('/', controller.novo)       // Create
router.get('/', controller.listar)      // Retrieve (all)
router.get('/:id', controller.obterUm)  // Retrieve (one)
router.put('/', controller.atualizar)   // Update
router.delete('/', controller.excluir)  // Delete 

module.exports = router