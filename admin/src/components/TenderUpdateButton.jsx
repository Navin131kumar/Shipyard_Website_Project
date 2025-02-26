import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";

const TenderUpdateButton = ({tenderId}) => {
  const { backendUrl } = useContext(AdminContext);
  const atoken = localStorage.getItem("aToken");

  const updateTender = async () => {
    try {
      const res = await axios.delete(
        `${backendUrl}api/tenders/${tenderId}`,
         // Sending the updated status in the request body
        {
          headers: {
            Authorization: `Bearer ${atoken}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.error("Tender Deleted Successfully");
      console.log(res.data);
    } catch (error) {
      console.error("Error updating tender:", error);
      toast.error("Failed to update tender");
    }
  };

  return (
    <div>
      <button
        onClick={updateTender}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Delete Tender
      </button>
    </div>
  );
};

export default TenderUpdateButton;
