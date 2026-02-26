const OrderPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Order Management</h1>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <form action="" className="grid grid-cols-2 gap-3 shadow rounded-lg p-4 bg-white">
          <select
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name=""
            id=""
          >
            <option selected value="">
              Select a customer
            </option>
          </select>
          <select
            name="product"
            id="product"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected value="">
              Select a product
            </option>
          </select>
          <input
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="number"
            placeholder="qty"
          />
          <div className="flex gap-2">
            <input
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              type="text"
              placeholder="Discount%"
            />
            <select
              name="discountType"
              id="discountType"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="fixed">Fixed</option>
              <option value="percentage">Percentage</option>
            </select>
          </div>
          <div>
            <button className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer">
              Create Order
            </button>
            <button className="btn btn-secondary bg-gray-600 text-white rounded text-sm p-2 mt-2 ml-2 cursor-pointer">
              Cancel
            </button>
          </div>
        </form>
        <div className="shadow rounded-lg p-4 bg-white">
            {/* cart  */}
            <h1 className="text-md font-bold">Product Summery</h1>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Product 1</td>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">Rs. 100</td>
                </tr>
              </tbody>
            </table>
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
            </table>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
