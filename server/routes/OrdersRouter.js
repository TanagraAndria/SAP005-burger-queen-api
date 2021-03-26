const { Router } =  require ("express")
const OrderController = require ( '../controller/OrderController')

const router = Router()
router.get('/', OrderController.getOrders)
router.get('/:id', OrderController.getOrderID)
router.put('/:id', OrderController.PutOrder)
router.delete('/:id', OrderController.DelOrderID)
router.post('/id/items', OrderController.PostOrder)

module.exports= router
