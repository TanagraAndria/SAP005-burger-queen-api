const { Router } = require('express')
const userRouter = require("./userRouter")
const router = Router()

// aqui vai todas as rotas
router.use('/users', userRouter);
router.use('/UserController', userRouter);
// router.use('/ProductController', productRouter);
// router.use('/OrderController ', OrderRouter);

module.exports = router
