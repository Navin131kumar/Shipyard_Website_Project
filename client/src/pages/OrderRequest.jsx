import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

export default function OrderRequestForm() {
  const [open, setOpen] = useState(false);
  const [shipType, setShipType] = useState("");
  const [budget, setBudget] = useState("");
  const [preferredTechnology, setPreferredTechnology] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("Bank Transfer");
  const {backendUrl,token} = React.useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(backendUrl+"/api/orders", {
        shipType,
        budget,
        preferredTechnology,
        
      },{
        headers:{
            Authorization: "Bearer "+token 
        }
      });
      console.log(data);
      toast.success("Order request submitted successfully.");
      setOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit order request.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => setOpen(true)}
      >
        Create Order Request
      </button>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Order Request Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600">Ship Type</label>
                <input type="text" value={shipType} onChange={(e) => setShipType(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Budget</label>
                <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Preferred Technology</label>
                <input type="text" value={preferredTechnology} onChange={(e) => setPreferredTechnology(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Company Name</label>
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Expected Delivery Date</label>
                <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600">Payment Mode</label>
                <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300">
                  <option value="Bank Transfer">Bank Transfer</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Online Payment">Online Payment</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
