import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);
export default CustomerModel;