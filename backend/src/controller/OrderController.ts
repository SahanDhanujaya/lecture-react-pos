import type { Request, Response } from "express";
import { createOrder, getOrders } from "../service/OrderService.ts";

export const placeOrder = async (req: Request, res: Response) => {
    const newOrder = await createOrder(req.body);
    res.status(201).json({message: "Order placed successfully", newOrder})
}

export const getOrderList = async (req: Request, res: Response) => {
    const orders = await getOrders();
    res.status(200).json(orders);
}