
import type { Request, Response } from "express";
import { createCustomer, getCustomers, updateCustomer, deleteCustomer } from "../service/CustomerService.ts";

export const addCustomer = async (req: Request, res: Response) => {
    await createCustomer(req.body);
    res.status(201).json({ message: "Customer created successfully" });
}

export const getCustomerList = async (req: Request, res: Response) => {
    const customers = await getCustomers();
    res.status(200).json(customers);
}

export const updateCustomerById = async (req: Request, res: Response) => {
    const updatedCustomer = await updateCustomer(req.params.id as string , req.body);
    res.status(201).json({message: "Customer updated successfully", updatedCustomer});
}

export const deleteCustomerById = async (req: Request, res: Response) => {
    const deletedCustomer = await deleteCustomer(req.params.id as string);
    res.status(200).json({message: "Customer deleted successfully", deletedCustomer});
}