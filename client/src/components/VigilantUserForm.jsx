import React, { useState } from "react";
import axios from "axios";


const VigilanceReportForm = () => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    evidence: [],
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    setFormData({ ...formData, evidence: e.target.files });
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("type", type);
    formData.append("description", description);
    evidence.forEach((file) => formData.append("evidence", file));
  
    try {
      const response = await fetch("http://localhost:5000/vigilance/report", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit report");
      }
  
      const data = await response.json();
      console.log("Report submitted:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl border border-orange-500">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Submit Vigilance Report</h2>

      {message && (
        <div className="mb-4 p-3 rounded bg-orange-100 text-orange-700">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Report Type */}
        <div>
          <label className="text-orange-700">Report Type</label>
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Fraud">Fraud</option>
            <option value="Corruption">Corruption</option>
            <option value="Safety Violation">Safety Violation</option>
            <option value="Harassment">Harassment</option>
            <option value="Misconduct">Misconduct</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="text-orange-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide detailed information about the incident..."
            required
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="text-orange-700">Upload Evidence (Images, Documents)</label>
          <input type="file" multiple accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
            onChange={handleFileChange} required />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
          disabled={loading}>
          {loading ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
};

export default VigilanceReportForm;
