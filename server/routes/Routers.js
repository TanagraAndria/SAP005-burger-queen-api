const { Router } = require('express')
const ExampleController = require('../controller/ExampleController')
const ItemController = require('../controller/ItemController')
const OrderController = require('../controller/OrderController')

const router = Router()

// aqui vai as requisições
router.get("/", ExampleController.getAllExamples)
router.get("/", ItemController.getAllNewOrder)
router.get("/", OrderController.getAllNewOrder)



module.exports = router