/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import type { Customer } from "../../types/Customer";
import type { Product } from "../../types/Product";

// Define the Cart Item Type for better clarity
interface CartItem {
  customer: Customer;
  product: Product;
  qty: number;
  discount: number;
  discountType: string;
  price: number;
}

const OrderPage = () => {
  const { customerArray, productArray } = useContext(OrderContext);

  // Initialize with an empty array, not [{}]
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [discountType, setDiscountType] = useState<string>("fixed");
  const [price, setPrice] = useState<number>(0);

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (customer && product && qty > 0) {
      const newItem: CartItem = { customer, product, qty, discount, discountType, price };
      setCart([...cart, newItem]);
      
      // Optional: Reset product fields after adding
      setQty(0);
      setPrice(0);
    } else {
      alert("Please select a customer, product, and quantity");
    }
  };

  useEffect(() => {
    setPrice(product?.price || 0) 
  }, [product]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Order Management</h1>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <form className="grid grid-cols-2 gap-3 shadow rounded-lg p-4 bg-white">
          {/* Customer Select */}
          <select
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            onChange={(e) => setCustomer(customerArray[parseInt(e.target.value)])}
            defaultValue=""
          >
            <option value="" disabled>Select a customer</option>
            {customerArray.map((cust, index) => (
              <option key={index} value={index}>{cust.name}</option>
            ))}
          </select>

          {/* Product Select */}
          <select
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            onChange={(e) => setProduct(productArray[parseInt(e.target.value)])}
            defaultValue=""
          >
            <option value="" disabled>Select a product</option>
            {productArray.map((prod, index) => (
              <option key={index} value={index}>{prod.name}</option>
            ))}
          </select>

          <input
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            type="number"
            placeholder="qty"
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value) || 0)}
          />
          
          <input
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
          />

          <div className="flex gap-2">
            <input
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
              type="number"
              placeholder="Discount"
              value={discount}
              onChange={(e) => setDiscount(parseInt(e.target.value) || 0)}
            />
            <select
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm"
              value={discountType}
              onChange={(e) => setDiscountType(e.target.value)}
            >
              <option value="fixed">Fixed</option>
              <option value="percentage">Percentage</option>
            </select>
          </div>

          <div>
            <button onClick={addToCart} className="bg-black text-white rounded p-2 mt-2">
              Add to cart
            </button>
          </div>
        </form>

        {/* Cart Summary Table */}
        <div className="shadow rounded-lg p-4 bg-white">
          <h1 className="text-md font-bold">Product Summary</h1>
          <table className="min-w-full divide-y divide-gray-200 mt-2">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm">{item.product.name}</td>
                  <td className="px-4 py-2 text-sm">{item.qty}</td>
                  <td className="px-4 py-2 text-sm">${item.price}</td>
                  <td className="px-4 py-2 text-sm font-bold">
                    ${item.qty * item.price}
                  </td>
                </tr>
              ))}
              {cart.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-400">Cart is empty</td>
                </tr>
              )}
            </tbody>
          </table>
          
          {cart.length > 0 && (
            <div className="flex justify-end mt-4">
              <button className="bg-black text-white rounded p-2">Checkout</button>
            </div>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-md font-bold mt-4">Order History</h1>
        <div className="mt-4 shadow rounded-lg p-4 bg-white">
            {/* order history table */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {
                  
                }
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

