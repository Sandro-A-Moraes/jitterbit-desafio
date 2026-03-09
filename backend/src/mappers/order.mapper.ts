import type { OrderPayload } from "../types/order";

export function mapOrderPayload(payload: OrderPayload) {
    const { numeroPedido, valorTotal, dataCriacao, items } = payload;
    return {
        orderId: numeroPedido,
        value: valorTotal,
        creationDate: dataCriacao,
        items: items.map(item => ({
            productId: item.idItem,
            quantity: item.quantidadeItem,
            price: item.valorItem
        }))
    }
}