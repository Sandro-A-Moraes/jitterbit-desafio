import type { Request, Response } from "express";
import * as orderService from "../services/order.service";

export async function createOrder(req: Request, res: Response) {
  try {
    const order = await orderService.createOrderService(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: "Failed to create order" });
  }
}

export async function getOrderById(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      res.status(400).json({ error: "Invalid order ID" });
      return;
    }

    const order = await orderService.getOrderByIdService(id);

    res.json(order);
  } catch (error) {
    res.status(404).json({ error: "Order not found" });
  }
}

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await orderService.listOrdersService();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      res.status(400).json({ error: "Invalid order ID" });
      return;
    }

    const order = await orderService.updateOrderService(id, req.body);
    res.json(order);
  } catch (error) {
    res.status(404).json({ error: "Order not found" });
  }
}

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      res.status(400).json({ error: "Invalid order ID" });
      return;
    }

    const order = await orderService.deleteOrderService(id);
    res.json(order);
  } catch (error) {
    res.status(404).json({ error: "Order not found" });
  }
}
