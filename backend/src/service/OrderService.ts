import { OrderModel } from "../model/OrderModel.ts";
import { type Order } from "../types/order.ts";

export const createOrder = async (order: Order) => {
    const newOrder = new OrderModel(order);
    await newOrder.save();
    return newOrder;
}

export const getOrders = async () => {
    const orders = await OrderModel.find();
    return orders;
}