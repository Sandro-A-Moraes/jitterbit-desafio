import {Router} from 'express'

const router = Router()

router.post('/order', (req, res)=>{
    res.status(201).json({message: 'Order created successfully'})
})

router.get('/order/:id', (req, res)=>{
    const orderId = req.params.id
    res.json({message: `Order details for order ID: ${orderId}`})
})

router.get('/order/list', (req, res)=>{
    res.json({message: 'List of all orders'})
})

router.put('/order/:id', (req, res)=>{
    const orderId = req.params.id
    res.json({message: `Order with ID: ${orderId} updated successfully`})
})

router.delete('/order/:id', (req, res)=>{
    const orderId = req.params.id
    res.json({message: `Order with ID: ${orderId} deleted successfully`})
})

export default router