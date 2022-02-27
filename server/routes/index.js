const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const itemController = require('../controllers/itemsController')


// user
router.post('/login',Controller.login)
router.post('/register', Controller.register)



router.get('/clients', itemController.getClient)
router.get('/rooms', itemController.getRoom)
router.get('/roomUsage', itemController.getRoomUsage)
router.get('/users', itemController.getUser)


module.exports = router