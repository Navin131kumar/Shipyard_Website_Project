const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Service Name (Ship Building, Repair, etc.)
    description: { type: [String], required: true }, // Detailed description in array format
    category: { 
      type: String, 
      enum: ["Ship Building", "Ship Repair", "Marine Engineering", "Financials", "Facilities"], 
      required: true 
    }, // Service Category
    subcategories: { type: [String] }, // List of subcategories
    features: { type: [String] }, // Key features of the service
    image: { type: String }, // Image URL for service
    available: { type: Boolean, default: true }, // Availability status
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
