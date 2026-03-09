import {Router} from 'express'
import * as orderController from '../controllers/order.controller'

const router = Router()

router.post('/order', orderController.createOrder)

router.get('/order/:id', orderController.getOrderById)

router.get('/order/list', orderController.listOrders)

router.put('/order/:id', orderController.updateOrder)

router.delete('/order/:id', orderController.deleteOrder)

export default router