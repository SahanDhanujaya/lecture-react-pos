import mongoose from "mongoose";
import { type Order } from "../types/order.ts";

const OrderSchema = new mongoose.Schema<Order>({
    id: Number,
    items: Array,
    customerName: String,
    totalAmount: Number,
    date: String
});

export const OrderModel = mongoose.model("Order", OrderSchema);
