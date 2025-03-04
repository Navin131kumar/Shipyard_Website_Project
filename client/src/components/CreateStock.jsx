import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductForm = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantityAmount: "",
    quantityUnit: "kg",
    valueCurrency: "USD",
    valueAmount: "",
    condition: "New",
    warehouseLocation: "",
    images: "", // Image URL (not file upload)
  });
  const token = localStorage.getItem('token')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      category: formData.category,
      quantity: { amount: Number(formData.quantityAmount), unit: formData.quantityUnit },
      value: { currency: formData.valueCurrency, amount: Number(formData.valueAmount) },
      condition: formData.condition,
      warehouseLocation: formData.warehouseLocation,
      images: [formData.images], // Array of image URLs
    };

    try {
      const response = await axios.post("http://localhost:5000/api/stock", payload, {
        headers: { "Content-Type": "application/json" ,
            Authorization: `Bearer ${token}`
        },
      });

      console.log("Response:", response.data);
      toast.success("Stock created successfully.");
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Error submitting product.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6 border border-gray-200">
        
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Stock</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Quantity */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Quantity</label>
            <input
              type="number"
              name="quantityAmount"
              value={formData.quantityAmount}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Unit</label>
            <select
              name="quantityUnit"
              value={formData.quantityUnit}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            >
              <option value="kg">kg</option>
              <option value="g">g</option>
              <option value="lb">lb</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
        </div>

        {/* Value */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Currency</label>
            <select
              name="valueCurrency"
              value={formData.valueCurrency}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Amount</label>
            <input
              type="number"
              name="valueAmount"
              value={formData.valueAmount}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Condition */}
        <div>
          <label className="block text-gray-700 font-medium">Condition</label>
          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>

        {/* Warehouse Location */}
        <div>
          <label className="block text-gray-700 font-medium">Warehouse Location</label>
          <input
            type="text"
            name="warehouseLocation"
            value={formData.warehouseLocation}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium">Image URL</label>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
