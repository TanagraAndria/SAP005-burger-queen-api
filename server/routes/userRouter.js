import {Router} from 'express'
import UserController from '../controller/UserController'

const router = Router()
router.get('/', UserController.all)
router.post('/', Userontroller.add)
router.delete('/:id', UserController.all)

export default router