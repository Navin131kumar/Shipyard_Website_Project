const RepairRequest = require("../models/RepairRequest");

// Create a new repair request (User Only)
exports.createRepairRequest = async (req, res) => {
  try {
    const { shipModel, yearOfManufacture, shipType, description } = req.body;
    const repairRequest = await RepairRequest.create({
      userId: req.user.userId,
      shipModel,
      yearOfManufacture,
      shipType,
      description,
    });

    res.status(201).json({ message: "Repair request submitted successfully", repairRequest });
  } catch (error) {
    res.status(500).json({ error: "Failed to create repair request" });
  }
};

// Get all repair requests (Admin Only)
exports.getAllRepairRequests = async (req, res) => {
  try {
    const repairs = await RepairRequest.find().populate("userId", "name email");
    res.json(repairs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch repair requests" });
  }
};

// Get repair requests for the logged-in user
exports.getUserRepairRequests = async (req, res) => {
  try {
    const userId = req.user.userId;
    const repairs = await RepairRequest.find({ userId });
    res.json(repairs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user repair requests" });
  }
};

// Update repair request status (Admin Only)
exports.updateRepairStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedRequest = await RepairRequest.findByIdAndUpdate(
      req.params.id,
      { status, $push: { progress: { status, updatedAt: new Date() } } },
      { new: true }
    );

    if (!updatedRequest) return res.status(404).json({ error: "Repair request not found" });

    res.json({ message: "Repair status updated successfully", repairRequest: updatedRequest });
  } catch (error) {
    res.status(500).json({ error: "Failed to update repair status" });
  }
};

// Delete a repair request (Admin Only)
exports.deleteRepairRequest = async (req, res) => {
  try {
    const deletedRequest = await RepairRequest.findByIdAndDelete(req.params.id);
    if (!deletedRequest) return res.status(404).json({ error: "Repair request not found" });

    res.json({ message: "Repair request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete repair request" });
  }
};
