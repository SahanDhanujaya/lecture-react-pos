import type { Request, Response } from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../service/ProductService.ts";

export const addProduct = async (req: Request, res: Response) => {
    const newProduct = await createProduct(req.body);
    res.status(201).json({message: "Product added successfully", newProduct});
}

export const getProductList = async (req: Request, res: Response) => {
    const products = await getProducts();
    res.status(200).json(products);
}

export const updateProductById = async (req: Request, res: Response) => {
    const updatedProduct = await updateProduct(req.params.id as string , req.body);
    res.status(201).json({message: "Product updated successfully", updatedProduct});
}

export const deleteProductById = async (req: Request, res: Response) => {
    const deletedProduct = await deleteProduct(req.params.id as string);
    res.status(200).json({message: "Product deleted successfully", deletedProduct});
}