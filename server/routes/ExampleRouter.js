const { Router } = require('express')
const ExampleController = require('../controller/ExampleController')
const KitchenController = require('../controller/KitchenController')
const WaiterController = require('../controller/WaiterController')

const router = Router()

// aqui vai as requisições
router.get("/", ExampleController.getAllExamples)
router.get("/", KitchenController.getAllNewOrder)
router.get("/", WaiterController.getAllNewOrder)



module.exports = router