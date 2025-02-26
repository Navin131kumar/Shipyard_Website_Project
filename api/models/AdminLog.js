const mongoose = require("mongoose");

const adminLogSchema = new mongoose.Schema(
  {
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true }, // Description of the action
    description: { type: String }, // Optional detailed explanation
    timestamp: { type: Date, default: Date.now },
  }
);

module.exports = mongoose.model("AdminLog", adminLogSchema);
