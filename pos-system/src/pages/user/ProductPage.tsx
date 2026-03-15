import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import type { Product } from "../../types/Product";

const ProductPage = () => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [data, setData] = useState<Product[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [productIndex, setProductIndex] = useState<number>(0);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const clearForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName("");
    setCategory("");
    setPrice(0);
    setQuantity(0);
  };

  const handleForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isUpdate) {
      const updateProductArray: Product[] = data.map((product, index) => {
        if (index === productIndex) {
          product.name = name;
          product.category = category;
          product.price = price;
          product.quantity = quantity;
        }
        return product;
      });
      try {
        const response = await axios.put(
          `${BASE_URL}/products/${data[productIndex]._id}`,
          updateProductArray[productIndex],
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (response.status === 201) {
          toast.success("Product updated successfully");
          setIsUpdate(false);
          fetchProducts();
        }
      } catch (error) {
        toast.error("Error updating product " + error);
      }
    } else {
      const newProduct = { name, category, price, quantity };
      try {
        await axios
          .post(`${BASE_URL}/products`, newProduct, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            if (response.status === 201) {
              toast.success("Product added successfully");
              fetchProducts();
            }
          });
      } catch (error) {
        toast.error("Error adding product " + error);
      }
    }

    clearForm(e);
  };

  async function handleDelete(index: number) {
    try {
      await axios
        .delete(`${BASE_URL}/products/${data[index]._id}`)
        .then((response) => {
          if (response.status === 200) {
            toast.success("Product deleted successfully");
            fetchProducts();
          }
        });
    } catch (error) {
      toast.error("Error deleting product " + error);
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      setData(response.data);
    } catch (error) {
      toast.error("Error fetching products " + error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  function handleEdit(index: number) {
    setIsUpdate(true);
    setProductIndex(index);
    setName(data[index].name);
    setCategory(data[index].category);
    setPrice(data[index].price);
    setQuantity(data[index].quantity);
  }

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
            <button
              onClick={handleForm}
              className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer"
            >
              {isUpdate ? "Update" : "Add"}
            </button>
            <button
              onClick={clearForm}
              className="btn btn-primary bg-gray-600 text-white rounded text-sm p-2 mt-2 cursor-pointer"
            >
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample customer data */}
            {data.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      handleEdit(index);
                    }}
                    className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                    className="btn btn-primary bg-red-600 text-white rounded text-sm p-2 mt-2 ml-2 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductPage;
