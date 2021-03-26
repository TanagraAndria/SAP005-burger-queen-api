const { Router } =  require ("express")
const UsersController = require ( '../controller/UserController')

const router = Router()
router.get('/', UsersController.all)
router.get('/:id', UsersController.UserID )
router.delete('/:id', UsersController.DeletID )
router.post('/', UsersController.create)
router.put("/users/:id",UsersController.update)

module.exports= router