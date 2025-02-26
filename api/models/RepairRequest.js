const mongoose = require("mongoose");

const repairRequestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    shipModel: { type: String, required: true },
    yearOfManufacture: { type: Number, required: true },
    shipType: { type: String, enum: ["Oil", "Cargo", "Container", "Passenger", "Military"], required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["Pending", "Under Review", "Repairing", "Completed"], default: "Pending" },
    progress: [{ status: String, updatedAt: Date }], // Tracking repair progress
  },
  { timestamps: true }
);

module.exports = mongoose.model("RepairRequest", repairRequestSchema);
// Compare this snippet from api/models/ExportRequest.js:
