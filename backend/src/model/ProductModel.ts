import mongoose from "mongoose";

const ProductModel = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number
});

export default mongoose.model("Product", ProductModel);