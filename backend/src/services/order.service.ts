import { mapOrderInput } from "../mappers/order.mapper";
import type { OrderInput } from "../types/order-input";
import * as orderRepository from '../repositories/order.repository';

export async function createOrderService(orderData: OrderInput){
    const mappedOrder = mapOrderInput(orderData);

    const exists = await orderRepository.findOrderById(mappedOrder.orderId);
    if (exists) {
        throw new Error("Order already exists");
    }

    return orderRepository.createOrder(mappedOrder);
}

export async function getOrderByIdService(orderId: string) {
    const order = await orderRepository.findOrderById(orderId);
    if (!order) {
        throw new Error("Order not found");
    }
    return order;
}

export async function listOrdersService() {
    return orderRepository.listOrders();
}

export async function updateOrderService(orderId: string, orderData: OrderInput) {
    const mappedOrder = mapOrderInput(orderData);
    
    const exists = await orderRepository.findOrderById(orderId);

    if (!exists) {
        throw new Error("Order not found");
    }

    return orderRepository.updateOrder(orderId, mappedOrder);
}

export async function deleteOrderService(orderId: string) {
    const order = await orderRepository.findOrderById(orderId);
    if (!order) {
        throw new Error("Order not found");
    }
    return orderRepository.deleteOrder(orderId);
}