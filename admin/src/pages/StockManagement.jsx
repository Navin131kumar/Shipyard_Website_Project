import { useEffect, useState } from "react";
import axios from "axios";

const StockManagement = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/stock/"); // Adjust URL if needed
      setStocks(response.data);
    } catch (err) {
      setError("Failed to fetch stock data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Stock Management</h2>

      {loading && <p>Loading stocks...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Stock Name</th>
              <th className="py-2 px-4 border-b text-left">Category</th>
              <th className="py-2 px-4 border-b text-left">Quantity</th>
              <th className="py-2 px-4 border-b text-left">Value</th>
              <th className="py-2 px-4 border-b text-left">Condition</th>
              <th className="py-2 px-4 border-b text-left">Warehouse</th>
              <th className="py-2 px-4 border-b text-left">Added By</th>
              <th className="py-2 px-4 border-b text-left">Images</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{stock.name}</td>
                <td className="py-2 px-4 border-b">{stock.category}</td>
                <td className="py-2 px-4 border-b">{stock.quantity.amount} {stock.quantity.unit}</td>
                <td className="py-2 px-4 border-b">{stock.value.currency} {stock.value.amount}</td>
                <td className="py-2 px-4 border-b">{stock.condition}</td>
                <td className="py-2 px-4 border-b">{stock.warehouseLocation}</td>
                <td className="py-2 px-4 border-b">{stock.userId?.name} ({stock.userId?.email})</td>
                <td className="py-2 px-4 border-b">
                  {stock.images?.length > 0 ? (
                    <img src={stock.images[0]} alt="Stock" className="w-12 h-12 object-cover rounded" />
                  ) : (
                    "No Image"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManagement;
