const { Router } = require('express')
const ExampleRouter = require("./Routers")
const router = Router()

// aqui vai todas as rotas
router.use('/example', ExampleRouter);
router.use('/ItemController', ExampleRouter);
router.use('/OrderController ', ExampleRouter);

module.exports = router
