const VigilanceReport = require("../models/VigilanceReport");

// Create a new vigilance report (User or Anonymous)
exports.createReport = async (req, res) => {
  try {
    const { type, description, evidence } = req.body;
    const reporterId = req.user ? req.user.userId : null; // Allow anonymous reporting

    const report = await VigilanceReport.create({ reporterId, type, description, evidence });

    res.status(201).json({ message: "Vigilance report submitted successfully", report });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit vigilance report" });
  }
};

// Get all vigilance reports (Admin Only)
exports.getAllReports = async (req, res) => {
  try {
    const reports = await VigilanceReport.find().populate("reporterId", "name email");
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reports" });
  }
};

// Get a specific vigilance report by ID (Admin Only)
exports.getReportById = async (req, res) => {
  try {
    const report = await VigilanceReport.findById(req.params.id).populate("reporterId", "name email");

    if (!report) return res.status(404).json({ error: "Report not found" });

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch report" });
  }
};

// Update vigilance report status (Admin Only)
exports.updateReportStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedReport = await VigilanceReport.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedReport) return res.status(404).json({ error: "Report not found" });

    res.json({ message: "Report status updated successfully", updatedReport });
  } catch (error) {
    res.status(500).json({ error: "Failed to update report status" });
  }
};

// Delete a vigilance report (Admin Only)
exports.deleteReport = async (req, res) => {
  try {
    const deletedReport = await VigilanceReport.findByIdAndDelete(req.params.id);
    if (!deletedReport) return res.status(404).json({ error: "Report not found" });

    res.json({ message: "Vigilance report deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete report" });
  }
};
