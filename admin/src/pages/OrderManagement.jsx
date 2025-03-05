import React, { useContext } from 'react';
import axios from 'axios';
import { AdminContext } from '../context/AdminContext';

const OrderManagement = () => {
  const { aToken,backendUrl,tenderAppData } = useContext(AdminContext);

  const handleUpdate = async (orderId) => {
    try {
      const response = await axios.put(backendUrl+`api/orders/${orderId}`, {
        status: "Completed", // Example update
      },{headers:{
        Authorization: "Bearer "+aToken
      }});
      console.log("Order updated", response.data);
      alert("Order updated successfully");
    } catch (error) {
      console.error("Error updating order", error);
      alert("Failed to update order");
    }
  };
  const handleDelete = async (orderId) => {
    try {
      const response = await axios.delete(backendUrl+`api/orders/${orderId}`,{headers:{
        Authorization: "Bearer "+aToken
      }});
      console.log("Order updated", response.data);
      alert("Order Deleted successfully");
    } catch (error) {
      console.error("Error Deleting order", error);
      alert("Failed to Delete order");
    }
  };
  return (
    <div className='ml-20 py-10'>
      <h1 className='text-3xl'>Order Management</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 py-10'>
        {tenderAppData.map((e) => (
          <div key={e._id} className='flex flex-col border border-black p-3 rounded-lg gap-3'>
            <div className='flex flex-col gap-2'>
              <div className='grid gap-5 grid-cols-2'>
                <p>Ship Type:</p>
                <p>{e.shipType}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p>Status:</p>
                <p>{e.status}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p>Technology</p>
                <p>{e.preferredTechnology}</p>
              </div>
              <div className='grid grid-cols-2'>
                <p>Order Placed By</p>
                <p>{e.userId?.name}</p>
              </div>
              <button 
                className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-3'
                onClick={() => handleUpdate(e._id)}
              >
                Update Order
              </button><button 
                className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition mt-3'
                onClick={() => handleDelete(e._id)}
              >
                Delete Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
