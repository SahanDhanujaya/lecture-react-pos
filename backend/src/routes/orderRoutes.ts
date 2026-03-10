import express from 'express';
import { placeOrder, getOrderList } from '../controller/OrderController.ts';

const orderRoutes = express.Router();

orderRoutes.post("/orders", placeOrder);
orderRoutes.get("/orders/:id", getOrderList);

export default orderRoutes;