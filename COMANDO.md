```markdown
# Desafio Técnico — API de Gerenciamento de Pedidos (Node.js)

## Objetivo

Desenvolver uma API REST em Node.js (JavaScript) para gerenciar pedidos, com suporte a operações de **criação, leitura, atualização e exclusão** (CRUD).

---

## Endpoints

### Obrigatórios

| Método | URL | Descrição |
|--------|-----|-----------|
| `POST` | `http://localhost:3000/order` | Criar um novo pedido |
| `GET` | `http://localhost:3000/order/v10089016vdb` | Obter pedido por número |

### Opcionais

| Método | URL | Descrição |
|--------|-----|-----------|
| `GET` | `http://localhost:3000/order/list` | Listar todos os pedidos |
| `PUT` | `http://localhost:3000/order/v10089016vdb` | Atualizar pedido por número |
| `DELETE` | `http://localhost:3000/order/v10089016vdb` | Deletar pedido por número |

---

## Payload de Entrada (Request Body)

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
```

### Exemplo com cURL

```bash
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}'
```

---

## Transformação dos Dados (Mapping)

A API deve transformar os campos antes de salvar no banco de dados:

| Campo de entrada | Campo no banco |
|-----------------|----------------|
| `numeroPedido` | `orderId` |
| `valorTotal` | `value` |
| `dataCriacao` | `creationDate` |
| `idItem` | `productId` |
| `quantidadeItem` | `quantity` |
| `valorItem` | `price` |

### JSON após transformação

```json
{
  "orderId": "v10089016vdb",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

## Banco de Dados

### Opção SQL / PostgreSQL

**Tabela: `Order`**

| Coluna | Tipo |
|--------|------|
| `orderId` | string / varchar |
| `value` | numeric |
| `creationDate` | timestamp |

**Tabela: `Items`**

| Coluna | Tipo |
|--------|------|
| `orderId` | string / varchar (FK) |
| `productId` | integer |
| `quantity` | integer |
| `price` | numeric |

### Opção MongoDB

Utilizar uma **collection** com o documento no formato transformado (conforme JSON acima).

---

## Critérios de Avaliação

- Funcionalidade completa dos requisitos mínimos
- Código bem organizado e comentado
- Utilização adequada das convenções de nomenclatura
- Tratamento de erros robusto com mensagens compreensíveis
- Uso correto dos status HTTP para cada operação
- Código hospedado em repositório **público no GitHub**, com commits organizados e mensagens claras

---

## Recursos Adicionais (Opcional)

- Implementar **autenticação básica** (ex: tokens JWT)
- **Documentar a API** usando Swagger ou Postman

---

> ⚠️ **Importante:** Ao finalizar, enviar o link do repositório no GitHub.
```