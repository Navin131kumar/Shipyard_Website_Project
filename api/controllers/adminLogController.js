const AdminLog = require("../models/AdminLog");

// Get all admin logs (Admin Only)
exports.getAllAdminLogs = async (req, res) => {
  try {
    const logs = await AdminLog.find().populate("adminId", "name email");
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch admin logs" });
  }
};

// Create an admin log (Called within admin actions)
exports.createAdminLog = async (adminId, action, description) => {
  try {
    await AdminLog.create({ adminId, action, description });
  } catch (error) {
    console.error("Failed to create admin log:", error);
  }
};

// Delete an admin log (Admin Only)
exports.deleteAdminLog = async (req, res) => {
  try {
    const deletedLog = await AdminLog.findByIdAndDelete(req.params.id);
    if (!deletedLog) return res.status(404).json({ error: "Admin log not found" });

    res.json({ message: "Admin log deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete admin log" });
  }
};
