import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";

export default function TenderDialog() {
    const {backendUrl} = React.useContext(AdminContext);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
    deadline: "",
    minBid: "",
    maxBid: "",
    documents: null,
  });

  const atoken = localStorage.getItem("aToken");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("deadline", formData.deadline);
    formDataToSend.append("bidRange[min]", formData.minBid);
    formDataToSend.append("bidRange[max]", formData.maxBid);
    if (formData.documents) {
      formDataToSend.append("documents", formData.documents);
    }

    try {
      const res = await axios.post(`${backendUrl}api/tenders`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${atoken}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Tender Created Successfully!");
      console.log(res.data);
      setFormData({ name: "", description: "", deadline: "", minBid: "", maxBid: "" });
      handleClose();
    } catch (error) {
      toast.error("Failed to create tender");
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Create Tender
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Create a New Tender</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField fullWidth label="Tender Name" name="name" value={formData.name} onChange={handleChange} required />

            <TextField
              fullWidth
              multiline
              rows={3}
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <TextField fullWidth type="date" label="Deadline" name="deadline" value={formData.deadline} onChange={handleChange} required InputLabelProps={{ shrink: true }} />

            <div className="grid grid-cols-2 gap-4">
              <TextField
                fullWidth
                type="number"
                label="Min Bid Amount"
                name="minBid"
                value={formData.minBid}
                onChange={handleChange}
                required
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              />
              <TextField
                fullWidth
                type="number"
                label="Max Bid Amount"
                name="maxBid"
                value={formData.maxBid}
                onChange={handleChange}
                required
                InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
              />
            </div>


            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit Tender
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
