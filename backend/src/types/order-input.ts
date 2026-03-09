export type ItemInput = {
    idItem: string;
    quantidadeItem: number;
    valorItem: number
}

export type OrderInput = {
    numeroPedido: string;
    valorTotal: number;
    dataCriacao: string;
    items: ItemInput[];
}

//Input typing for payload 