const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // User placing the order
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" }, // Service being ordered
    shipType: { type: String, required: true }, // Type of ship (Cargo, Cruise, etc.)
    budget: { type: Number, required: true }, // Budget for the order
    preferredTechnology: { type: String }, // Preferred technology or specifications
    status: { type: String, enum: ["Pending", "Processing", "Completed", "Cancelled"], default: "Pending" }, // Order status
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
