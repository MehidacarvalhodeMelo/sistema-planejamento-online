const controller = require('../controllers/mestre')
const express = require('express')

const router = express.Router()
router.post('/login', controller.login)
router.post('/logout', controller.logout)

module.exports = router