const mongoose = require("mongoose");

const tenderApplicationSchema = new mongoose.Schema(
  {
    tenderId: { type: mongoose.Schema.Types.ObjectId, ref: "Tender", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    companyName: { type: String, required: true },
    bidAmount: { type: Number, required: true },
    documents: [{ type: String }], // File paths for uploaded documents
    status: { type: String, enum: ["Submitted", "Under Review", "Approved", "Rejected"], default: "Submitted" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TenderApplication", tenderApplicationSchema);
