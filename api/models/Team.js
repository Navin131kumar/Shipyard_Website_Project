const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String }, // URL of image
    bio: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
