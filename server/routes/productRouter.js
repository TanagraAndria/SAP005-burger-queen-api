const { Router } =  require ("express")
const UsersController = require ( '../controller/ProductController')

const router = Router()
router.get('/', ProductController.all)
router.get('/:id', ProductController.all)
router.post('/', ProductController.add)
router.put('/:id', ProductController.all)
router.delete('/:id', ProductController.all)

module.exports= router