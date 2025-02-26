const mongoose = require("mongoose");

const tenderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    bidRange: { min: Number, max: Number },
    documents: [{ type: String }], // File paths for uploaded documents
    status: { type: String, enum: ["Open", "Closed", "Under Review"], default: "Open" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tender", tenderSchema);
