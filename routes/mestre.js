const controller = require('../controllers/mestre')
const express = require('express')

const router = express.Router()

router.post('/', controller.novo)       // Create
router.get('/', controller.listar)      // Retrieve (all)
router.get('/:id', controller.obterUm)  // Retrieve (one)
router.put('/', controller.atualizar)   // Update
router.delete('/:id', controller.excluir)  // Delete 
router.put('/novaSenha', function (req,res){controller.atualizarSenha})

module.exports = router