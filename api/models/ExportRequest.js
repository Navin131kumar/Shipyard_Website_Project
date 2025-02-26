const mongoose = require("mongoose");

const exportRequestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    stockId: { type: mongoose.Schema.Types.ObjectId, ref: "Stock", required: true },
    companyName: { type: String, required: true },
    destination: { country: String, port: String },
    expectedDeliveryDate: Date,
    transportMode: String,
    shippingPartner: String,
    exportLicenseRequired: Boolean,
    customsDocuments: [String], // Array of document URLs
    paymentMode: String,
    insuranceRequired: Boolean,
    status: { type: String, enum: ["Processing", "Shipped", "Delivered", "Cancelled"], default: "Processing" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExportRequest", exportRequestSchema);
