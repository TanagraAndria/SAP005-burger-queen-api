
const { Router } = require('express')

const usersRoute = require('./usersRouter')
const ordersRoute = require('./OrdersRouter')
const productsRoute = require('./productsRouter')

const router = Router()
router.use('/users', usersRoute);
router.use('/order', ordersRoute);
router.use('/product', productsRoute);

module.exports = router

