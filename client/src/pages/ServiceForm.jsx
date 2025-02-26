import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const ServiceForm = () => {
  const [open, setOpen] = React.useState(false);
  const {backendUrl} = useContext(AppContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userId = JSON.parse(localStorage.getItem("user")).id

  const [formData, setFormData] = useState({
    userId: userId,
    serviceId: "67b8a6f99915fe4e50c98bef",
    shipType: "",
    budget: "",
    preferredTechnology: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Submitting order with data:", formData);
    
    try {
      const res = await axios.post(backendUrl + "/api/orders", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      toast.success("Order submitted successfully");
      console.log("Order submitted successfully:", res.data);
      setFormData({shipType: "", budget: "", preferredTechnology: "", serviceId: ""});
    } catch (error) {
      console.log(error)
      toast.error("Failed to submit order");
    }
  };

  return (
    <div className=' pt-28'>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen} className='bg-[#ff6600] text-white p-2 rounded'>
          Book Now
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Create Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* <input type="text" name="userId" value={formData.userId} onChange={handleChange} placeholder="User ID" className="w-full p-2 border rounded" required /> */}
              {/* <input type="text" name="serviceId" value={formData.serviceId} onChange={handleChange} placeholder="Service ID" className="w-full p-2 border rounded" required /> */}
              <select name="status" value={formData.shipType} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="Cargo">Cargo</option>
                <option value="Cruise">Cruise</option>
              </select>
              <input type="number" name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget" className="w-full p-2 border rounded" required />
              <input type="text" name="preferredTechnology" value={formData.preferredTechnology} onChange={handleChange} placeholder="Preferred Technology" className="w-full p-2 border rounded" />
              <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">Submit Order</button>
            </form>
          </div>
          
        </Dialog>
      </React.Fragment>

    </div>
  )
}

export default ServiceForm