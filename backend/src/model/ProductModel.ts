import mongoose from "mongoose";
import { type Product } from "../types/product.ts";

const ProductModel = new mongoose.Schema<Product>({
    name: String,
    category: String,
    price: Number,
    quantity: Number
});

export default mongoose.model("Product", ProductModel);