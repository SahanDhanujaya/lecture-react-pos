/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import type { Customer } from "../../types/Customer";
import type { Product } from "../../types/Product";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";

interface CartItem {
  customer: Customer;
  product: Product;
  qty: number;
  discount: number;
  discountType: string;
  price: number;
}

// Define an Order type to group items
interface Order {
  id: number;
  items: CartItem[];
  customerName: string;
  totalAmount: number;
  date: string;
}

const OrderPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [discountType, setDiscountType] = useState<string>("fixed");
  const [price, setPrice] = useState<number>(0);
  const [customers,  setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  // orderArray stores completed Order objects
  const [orderArray, setOrderArray] = useState<Order[]>([]);

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (customer && product && qty > 0) {
      // 1. Check if the product is already in the cart
      const existingItemIndex = cart.findIndex(
        (item) => item.product.name === product.name,
      );

      if (existingItemIndex !== -1) {
        // 2. If it exists, create a new array with the updated quantity
        const updatedCart = cart.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              qty: item.qty + qty,
              // You might want to update the price/discount here too if they changed
            };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        // 3. If it's new, add it as a fresh CartItem
        const newItem: CartItem = {
          customer,
          product,
          qty,
          discount,
          discountType,
          price,
        };
        setCart([...cart, newItem]);
      }

      // Reset quantity only (usually we keep customer/product selected for bulk entry)
      setQty(0);
    } else {
      alert("Please select a customer, product, and quantity");
    }
  };

  const handleRemoveItem = (indexToRemove: number) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove),
    );
  };

  const calculateItemTotal = (item: CartItem) => {
    return item.discountType === "fixed"
      ? item.qty * item.price - item.discount
      : item.qty * item.price * (1 - item.discount / 100);
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    const total = cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);

    const newOrder: Order = {
      id: orderArray.length + 1,
      items: [...cart],
      customerName: cart[0].customer.name, // Assuming one customer per checkout
      totalAmount: total,
      date: new Date().toLocaleTimeString(),
    };

    try {
      await axios.post(`${BASE_URL}/orders`, newOrder)
      .then((response) => {
        if (response.status === 201) {
          toast.success("Order created successfully");
          loadOrders();
        }
      });
      setOrderArray([...orderArray, newOrder]);
    } catch (error) {
      toast.error("Error creating order " + error);
    }
    setCart([]); // Clear the cart
  };

  const loadCustomers = async () => {
    try {
      await axios.get(`${BASE_URL}/customers`).then((response) => {
        setCustomers(response.data);
      });
    } catch (error) {
      toast.error("Error loading customers " + error);
    }
  };
  
  const loadProducts = async () => {
    try {
      await axios.get(`${BASE_URL}/products`).then((response) => {
        setProducts(response.data);
        
      });
    } catch (error) {
      toast.error("Error loading products " + error);
    }
  };

  const loadOrders = async () => {
    try {
      await axios.get(`${BASE_URL}/orders`).then((response) => {
        setOrderArray(response.data);
      });
    } catch (error) {
      toast.error("Error loading orders " + error);
    }
  };

  useEffect(() => {
    loadCustomers();
    loadProducts();
    loadOrders();
  }, []);

  useEffect(() => {
    console.log(product);
    if (product) {
      setPrice(product?.price || 0);
    }
  }, [product]);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Order Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Form Section */}
        <form className="grid grid-cols-2 gap-3 shadow rounded-lg p-4 bg-white h-fit">
          <select
            className="col-span-2 p-2 rounded-md border border-gray-300"
            onChange={(e) =>
              setCustomer(customers[parseInt(e.target.value)])
            }
            defaultValue=""
          >
            <option value="" disabled>
              Select a customer
            </option>
            {customers.map((cust, index) => (
              <option key={index} value={index}>
                {cust.name}
              </option>
            ))}
          </select>

          <select
            className="col-span-2 p-2 rounded-md border border-gray-300"
            onChange={(e) => setProduct(products[parseInt(e.target.value)])}
            defaultValue=""

          >
            <option value="" disabled>
              Select a product
            </option>
            {products.map((prod, index) => (
              <option key={index} value={index}>
                {prod.name}
              </option>
            ))}
          </select>

          <input
            className="p-2 rounded-md border border-gray-300"
            type="number"
            placeholder="Qty"
            value={qty || ""}
            onChange={(e) => setQty(parseInt(e.target.value) || 0)}
          />

          <input
            className="p-2 rounded-md border border-gray-300 bg-gray-100"
            type="number"
            placeholder="Price"
            disabled
            value={price}
          />

          <div className="flex gap-2 col-span-2">
            <input
              className="flex-1 p-2 rounded-md border border-gray-300"
              type="number"
              placeholder="Discount"
              value={discount || ""}
              onChange={(e) => setDiscount(parseInt(e.target.value) || 0)}
            />
            <select
              className="p-2 rounded-md border border-gray-300"
              value={discountType}
              onChange={(e) => setDiscountType(e.target.value)}
            >
              <option value="fixed">Fixed</option>
              <option value="percentage">Percentage</option>
            </select>
          </div>

          <button
            onClick={addToCart}
            className="col-span-2 bg-black text-white rounded p-2 mt-2 font-bold"
          >
            Add to cart
          </button>
        </form>

        {/* Scrollable Cart Summary */}
        <div className="shadow rounded-lg p-4 bg-white flex flex-col h-100">
          <h1 className="text-md font-bold mb-2">Product Summary</h1>
          <div className="grow overflow-y-auto border border-gray-100 rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Product
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Qty
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                    Total
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-sm">{item.product.name}</td>
                    <td className="px-4 py-2 text-sm">{item.qty}</td>
                    <td className="px-4 py-2 text-sm font-bold">
                      ${calculateItemTotal(item).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-red-500 text-right">
                      <button onClick={() => handleRemoveItem(index)}>
                        <IoIosRemoveCircleOutline size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {cart.length > 0 && (
            <div className="mt-4 pt-2 border-t flex justify-between items-center">
              <span className="font-bold">Items: {cart.length}</span>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition-colors font-bold"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order History */}
      <div className="mt-8">
        <h1 className="text-md font-bold mb-4">Order History</h1>
        <div className="shadow rounded-lg p-4 bg-white">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderArray.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 text-sm">#{order.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {order.customerName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-green-700">
                    ${order.totalAmount.toFixed(2)}
                  </td>
                </tr>
              ))}
              {orderArray.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-400">
                    No orders placed yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
