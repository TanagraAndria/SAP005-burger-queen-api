const { Router } =  require ("express")
const AllOrderController = require ( '../controller/AllOrderController')

const router = Router()
router.get('/', AllOrderController.add)
router.get('/:id', AllOrderController.getById)
router.get('/:id/items', AllOrderController.getItemsById)
router.get('/', AllOrderController.all)
router.put('/:id', AllOrderController.all)
router.delete('/:id', AllOrderController.all)
router.post('/', AllOrderControlleradd)
router.post('/id/items', AllOrderController.createItem)

module.exports= router