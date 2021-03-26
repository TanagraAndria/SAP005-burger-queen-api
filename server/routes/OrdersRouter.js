const { Router } =  require ("express")
const OrderController = require ( '../controller/OrderController')

const router = Router()
router.get('/', OrderController.add)
router.get('/:id', OrderController.getById)
router.get('/:id/items', OrderController.getItemsById)
router.get('/', OrderController.all)
router.put('/:id', OrderController.all)
router.delete('/:id', OrderController.all)
router.post('/', OrderControlleradd)
router.post('/id/items', OrderController.createItem)

module.exports= router