import mongoose from "mongoose";
import { type Customer } from "../types/customer.ts";

const CustomerSchema = new mongoose.Schema<Customer>({
    name: String,
    email: String,
    phone: String,
    address: String,
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);
export default CustomerModel;