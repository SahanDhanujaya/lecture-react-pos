import { type Customer } from "./customer.ts";
import { type Product } from "./product.ts";

interface CartItem {
    customer: Customer;
    product: Product;
    qty: number;
    discount: number;
    discountType: string;
    price: number;
}

export type Order = {
    id: number;
    items: CartItem[];
    customerName: string;
    totalAmount: number;
    date: string;
}