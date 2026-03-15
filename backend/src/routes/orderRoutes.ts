import express from 'express';
import { placeOrder, getOrderList } from '../controller/OrderController.ts';

const orderRoutes = express.Router();

orderRoutes.post("/orders", placeOrder);
orderRoutes.get("/orders", getOrderList);

export default orderRoutes;