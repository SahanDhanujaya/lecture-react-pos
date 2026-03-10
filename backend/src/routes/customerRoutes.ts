import express from 'express';
import { addCustomer, deleteCustomerById, getCustomerList, updateCustomerById } from '../controller/CustomerController.ts';

const customerRoutes = express.Router();

customerRoutes.post("/customers", addCustomer);
customerRoutes.get("/customers", getCustomerList);
customerRoutes.put("/customers/:id", updateCustomerById);
customerRoutes.delete("/customers/:id", deleteCustomerById);

export default customerRoutes;