import { useContext, useEffect, useState } from "react";
import type { Customer } from "../../types/Customer";
import toast from "react-hot-toast";
import { OrderContext } from "../../context/OrderContext";

const CustomerPage = () => {
  const { customerArray, setCustomer } = useContext(OrderContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [customerIndex, setCustomerIndex] = useState<number>(0);

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  }

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isUpdate) {
      const updateCustomerArray: Customer[] = customerArray.map((customer, index) => {
        if (index === customerIndex) {
          customer.name = name;
          customer.email = email;
          customer.phone = phone;
          customer.address = address;
        }
        return customer;
      });
      setCustomer(updateCustomerArray);
    } else {
      customerArray.push({ name, email, phone, address });
    }
    clearForm();
    toast.success(isUpdate ? "Customer updated successfully" : "Customer added successfully");
    setIsUpdate(false);
  }

  const handleEdit = (index: number) => {
    setCustomerIndex(index);
    setIsUpdate(true);
    const customer = customerArray[index];
    setName(customer.name);
    setEmail(customer.email);
    setPhone(customer.phone);
    setAddress(customer.address);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then(res => res.json())
      .then(json => setData(json));
      console.log(data);
  }, [data]);

  function handleDelete(index: number): void {
    const updatedCustomerArray = [...customerArray]; //6
    updatedCustomerArray.splice(index, 1); // 5
    setCustomer(updatedCustomerArray); // 5
    toast.success("Customer deleted successfully");
  }

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl font-bold">Customer Management</h1>
        <div className="mt-4 shadow rounded-lg p-4 bg-white">
          <form action="">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                id="name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                id="email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Customer Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                id="phone"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Customer Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                id="address"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Customer Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div>
                <button 
                onClick={handleForm} className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer">
                  {isUpdate ? "Update" : "Add"}
                </button>
                <button onClick={clearForm} className="btn btn-secondary bg-gray-600 text-white rounded text-sm p-2 mt-2 ml-2 cursor-pointer">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-6 shadow rounded-lg p-4 bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Sample customer data */}
              {
                customerArray.map((customer, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">{customer.name}</td>
                    <td className="px-6 py-4">{customer.email}</td>
                    <td className="px-6 py-4">{customer.phone}</td>
                    <td className="px-6 py-4">{customer.address}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleEdit(index)} className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(index)} className="btn btn-secondary bg-red-600 text-white rounded text-sm p-2 mt-2 ml-2 cursor-pointer">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CustomerPage;
