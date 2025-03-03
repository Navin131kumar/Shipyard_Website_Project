import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function   ExportRequestForm({stockId}) {
  const [open, setOpen] = React.useState(false);
  
  const {backendUrl,token,stockData} = React.useContext(AppContext);
  const [companyName, setCompanyName] = React.useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [destinationPort, setDestinationPort] = useState("");
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");
  const [transportMode, setTransportMode] = useState("Sea");
  const [shippingPartner, setShippingPartner] = useState("");
  const [exportLicenseRequired, setExportLicenseRequired] = useState(false);
  const [customsDocuments, setCustomsDocuments] = useState([""]);
  const [paymentMode, setPaymentMode] = useState("Credit Transfer");
  const [insuranceRequired, setInsuranceRequired] = useState(false);
    console.log(stockData);
  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
        const data = await axios.post(backendUrl+"/api/exports",{
            stockId,
            companyName,
            destination: { country: destinationCountry, port: destinationPort },
            expectedDeliveryDate,
            transportMode,
            shippingPartner,
            exportLicenseRequired,
            customsDocuments,
            paymentMode,
            insuranceRequired,
          },{
            headers:{
                Authorization: "Bearer " + token
            }
          });
          console.log(data);
          toast.success("Export request submitted successfully.");
    }catch(error){
        console.log(error)
    }
    
    
  };



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Export Request
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleSubmit} className="space-y-4 p-10">
        

        <div>
          <label className="block text-sm font-semibold text-gray-600">Company Name</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600">Destination Country</label>
            <input type="text" value={destinationCountry} onChange={(e) => setDestinationCountry(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600">Destination Port</label>
            <input type="text" value={destinationPort} onChange={(e) => setDestinationPort(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Expected Delivery Date</label>
          <input type="date" value={expectedDeliveryDate} onChange={(e) => setExpectedDeliveryDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Transport Mode</label>
          <select value={transportMode} onChange={(e) => setTransportMode(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300">
            <option value="Sea">Sea</option>
            <option value="Air">Air</option>
            <option value="Land">Land</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Shipping Partner</label>
          <input type="text" value={shippingPartner} onChange={(e) => setShippingPartner(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" required />
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={exportLicenseRequired} onChange={(e) => setExportLicenseRequired(e.target.checked)} className="h-4 w-4 text-blue-600" />
          <label className="text-sm font-semibold text-gray-600">Export License Required</label>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Customs Documents (URLs)</label>
          <input type="text" value={customsDocuments} onChange={(e) => setCustomsDocuments([e.target.value])} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600">Payment Mode</label>
          <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300">
            <option value="Online payment">Online payment</option>
            <option value="Cash on delivery">Cash on delivery</option>
            <option value="Bank transfer">Bank Transfer</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" checked={insuranceRequired} onChange={(e) => setInsuranceRequired(e.target.checked)} className="h-4 w-4 text-blue-600" />
          <label className="text-sm font-semibold text-gray-600">Insurance Required</label>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit Request
        </button>
      </form>

      </Dialog>
    </React.Fragment>
  );
}
