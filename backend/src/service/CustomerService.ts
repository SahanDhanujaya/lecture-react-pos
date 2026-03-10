import CustomerModel from '../model/CustomerModel.ts';
import { type Customer } from '../types/customer.ts';

export const createCustomer = async (customer: Customer) => {
    const newCustomer = new CustomerModel(customer); 
    await newCustomer.save();
    return newCustomer;
}

export const getCustomers = async () => {
    const customers = await CustomerModel.find();
    return customers;
}

export const updateCustomer = async (id: string, customer: Customer) => {
    const updatedCustomer = await CustomerModel.findByIdAndUpdate(id, customer, { new: true });
    return updatedCustomer;
}

export const deleteCustomer = async (id: string) => {
    const deletedCustomer = await CustomerModel.findByIdAndDelete(id);
    return deletedCustomer;
}

