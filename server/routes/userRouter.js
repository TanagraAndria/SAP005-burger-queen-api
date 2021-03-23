const { Router } =  require ("express")
const UsersController = require ( '../controller/UserController')

const router = Router()
router.get('/', UsersController.all)
router.post('/', UsersController.create)
router.delete('/:id', UserController.delet)

module.exports= router