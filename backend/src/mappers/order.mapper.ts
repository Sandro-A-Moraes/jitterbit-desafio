import type { OrderInput } from '../types/order-input'
import type { OrderDB } from '../types/order-db'

//Payload mapping to database model

//Input (payload) and output typing for the database.

export function mapOrderInput(order: OrderInput): OrderDB {
    const { numeroPedido, valorTotal, dataCriacao, items } = order;

    return {
        orderId: order.numeroPedido,
        value: order.valorTotal,
        creationDate: new Date(order.dataCriacao),
        items: order.items.map(item => ({
            productId: Number(item.idItem),
            quantity: item.quantidadeItem,
            price: item.valorItem
        }))
    }
}