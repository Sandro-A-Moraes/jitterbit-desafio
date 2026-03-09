import {prisma} from '../lib/prisma'
import type { OrderDB } from '../types/order-db';

export async function createOrder(data: OrderDB) {
    return prisma.order.create({
        data: {
            orderId: data.orderId,
            value: data.value,
            creationDate: data.creationDate,
            items: {
                create: data.items.map(item => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price
                }))
            }
        },
        include: {
            items: true
        }
    })
}

export async function findOrderById(orderId: string) {
    return prisma.order.findUnique({
        where: { orderId },
        include: {
            items: true
        }
    })
}

export async function listOrders() {
    return prisma.order.findMany({
        include: {
            items: true
        }
    })
}

export async function updateOrder(orderId: string, data: OrderDB) {
    return prisma.order.update({
       where: { orderId },
       data: {
           value: data.value,
           creationDate: data.creationDate,
           items: {
               deleteMany: {},
               create: data.items.map(item => ({
                   productId: item.productId,
                   quantity: item.quantity,
                   price: item.price
               }))
           }
       },
       include: {
           items: true
       }
    })
}   
   