import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { OrderContext } from "../../context/OrderContext";

const ProductPage = () => {
  const { productArray} = useContext(OrderContext);
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName("");
    setCategory("");
    setPrice(0);
    setQuantity(0);
  }

  const handleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    productArray.push({ name, category, price, quantity });
    clearForm(e);
    toast.success("Product added successfully");
  };

  return (
    <div className="p-2">
      <div className="shadow rounded p-4">
        <form action="" className="grid grid-cols-2 gap-3">
          <input
            className="shadow p-2 rounded focus:outline-none "
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="shadow p-2 rounded focus:outline-none "
            type="text"
            placeholder="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="shadow p-2 rounded focus:outline-none "
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <input
            className="shadow p-2 rounded focus:outline-none "
            type="number"
            placeholder="Product Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <div className="flex gap-2">
            <button onClick={handleForm} className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer">
              Add Product
            </button>
            <button onClick={clearForm} className="btn btn-primary bg-gray-600 text-white rounded text-sm p-2 mt-2 cursor-pointer">
              Cancel
            </button>
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
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Qty
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample customer data */}
            {
              productArray.map((product) => (
                <tr key={product.name}>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.quantity}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductPage;
