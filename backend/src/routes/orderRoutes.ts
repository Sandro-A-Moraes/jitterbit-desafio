import { Router } from "express";
import * as orderController from "../controllers/order.controller";

const router = Router();

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *               valorTotal:
 *                 type: number
 *               dataCriacao:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                     quantidadeItem:
 *                       type: number
 *                     valorItem:
 *                       type: number
 *     responses:
 *       201:
 *         description: Pedido criado
 */
router.post("/order", orderController.createOrder);

/**
 * @swagger
 * /order/list:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get("/order/list", orderController.listOrders);

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 */
router.get("/order/:id", orderController.getOrderById);

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualizar pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido atualizado
 */
router.put("/order/:id", orderController.updateOrder);

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Deletar pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Pedido removido
 */
router.delete("/order/:id", orderController.deleteOrder);

export default router;
