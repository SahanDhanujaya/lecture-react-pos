/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from 'react';
import type { Customer } from '../types/Customer';
import type { Product } from '../types/Product';

export const OrderContext = createContext({
    customerArray: {} as Customer[],
    productArray: {} as Product[],

    setCustomer: (customer: Customer[]) => {},
    setProduct: (product: Product[]) => {}
});

export const OrderContextProvider = ({children}: {children: ReactNode}) => {
    const [customerArray, setCustomerArray] = useState<Customer[]>([]);
    const [productArray, setProductArray] = useState<Product[]>([]);
    
    const setCustomer = (customer: Customer[]) => {
        setCustomerArray(customer);
    };

    const setProduct = (product: Product[]) => {
        setProductArray(product);
    };

    return (
        <OrderContext.Provider value={{
            customerArray,
            productArray,
            setCustomer,
            setProduct
        }}>
            {children}
        </OrderContext.Provider>
    )
};