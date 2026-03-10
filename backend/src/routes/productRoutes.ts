import express from 'express';
import { addProduct, getProductList, deleteProductById, updateProductById } from '../controller/ProductContoller.ts';
const productRouter = express.Router();

productRouter.post("/products", addProduct);
productRouter.get("/products", getProductList);
productRouter.delete("/products/:id", deleteProductById);
productRouter.put("/products/:id", updateProductById);

export default productRouter;