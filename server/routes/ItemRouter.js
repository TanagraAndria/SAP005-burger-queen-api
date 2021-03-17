import {Router} from 'express'
import ItemController from '../controller/ItemController'

const router = Router()
router.get('/', ItemController.all)
router.get('/:id', ItemController.all)
router.post('/', ItemController.add)
router.put('/:id', ItemController.all)
router.delete('/:id', ItemController.all)

export default router