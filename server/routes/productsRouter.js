const { Router } =  require ("express")
const ProductController = require ( '../controller/ProductController')

const router = Router()
router.get('/', ProductController.getProducts)
router.get('/:id', ProductController.getProductID)
router.post('/', ProductController.PostProducts)
router.put('/:id', ProductController.PutroductID)
router.delete('/:id', ProductController.DelProductID)

module.exports= router
