import type { Items } from "./items";

export interface OrderPayload {
    numeroPedido: string;
    valorTotal: number;
    dataCriacao: string;
    items: Items[];
}
