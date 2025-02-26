const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ Track stock owner
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { amount: Number, unit: String },
    value: { currency: String, amount: Number },
    condition: { type: String, required: true },
    warehouseLocation: { type: String, required: true },
    images: [String] // ✅ Array of image URLs
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stock", stockSchema);
