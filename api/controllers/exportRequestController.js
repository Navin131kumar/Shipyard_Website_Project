const ExportRequest = require("../models/ExportRequest");

// Create an export request (User Only)
exports.createExportRequest = async (req, res) => {
  try {
    const exportRequest = await ExportRequest.create({ userId: req.user.userId, ...req.body });
    res.status(201).json({ message: "Export request submitted successfully", exportRequest });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit export request" });
  }
};

// Get all export requests (Admin Only)
exports.getAllExports = async (req, res) => {
  try {
    const exports = await ExportRequest.find().populate("userId", "name email").populate("stockId", "name category");
    res.json(exports);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch export requests" });
  }
};

// Get export requests for the logged-in user
exports.getUserExports = async (req, res) => {
  try {
    const exports = await ExportRequest.find({ userId: req.user.userId }).populate("stockId", "name category");
    res.json(exports);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user export requests" });
  }
};

// Update export request status (Admin Only)
exports.updateExportStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedExport = await ExportRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json({ message: "Export request status updated", updatedExport });
  } catch (error) {
    res.status(500).json({ error: "Failed to update export request status" });
  }
};

// Delete an export request (Admin Only)
exports.deleteExportRequest = async (req, res) => {
  try {
    await ExportRequest.findByIdAndDelete(req.params.id);
    res.json({ message: "Export request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete export request" });
  }
};
