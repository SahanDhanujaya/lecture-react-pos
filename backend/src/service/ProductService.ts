import ProductModel from "../model/ProductModel.ts";
import { type Product } from "../types/product.ts";

export const createProduct = async (product: Product) => {
    const newProduct = new ProductModel(product);
    await newProduct.save();
    return newProduct;
}

export const getProducts = async () => {
    const products = await ProductModel.find();
    return products;
}

export const updateProduct = async (id: string, product: Product) => {
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, { new: true });
    return updatedProduct;
}

export const deleteProduct = async (id: string) => {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    return deletedProduct;
}