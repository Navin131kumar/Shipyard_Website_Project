const mongoose = require("mongoose");

const vigilanceReportSchema = new mongoose.Schema(
  {
    reporterId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false }, // Optional for anonymous reports
    type: {
      type: String,
      enum: ["Fraud", "Corruption", "Safety Violation", "Harassment", "Misconduct"],
      required: true,
    },
    description: { type: String, required: true },
    evidence: [{ type: String }], // Array of file URLs
    status: { type: String, enum: ["Pending", "Under Investigation", "Resolved"], default: "Pending" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VigilanceReport", vigilanceReportSchema);
