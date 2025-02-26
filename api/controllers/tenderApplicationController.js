const fs = require("fs");
const path = require("path");
const TenderApplication = require("../models/TenderApplication");

// 📌 Submit a new tender application (User Only)
exports.submitTenderApplication = async (req, res) => {
  try {
    const { tenderId, companyName, bidAmount } = req.body;

    // Store uploaded file paths
    const documentPaths = req.files ? req.files.map((file) => file.path) : [];

    const application = await TenderApplication.create({
      tenderId,
      userId: req.user.userId,
      companyName,
      bidAmount,
      documents: documentPaths,
    });

    res.status(201).json({ message: "Tender application submitted successfully", application });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit tender application" });
  }
};

// 📌 Get all applications for a tender (Admin Only)
exports.getTenderApplications = async (req, res) => {
  try {
    const applications = await TenderApplication.find({ tenderId: req.params.tenderId })
      .populate("userId", "name email")
      .populate("tenderId", "name");

    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
};

// 📌 Get a user's tender applications
exports.getUserApplications = async (req, res) => {
  try {
    const applications = await TenderApplication.find({ userId: req.user.userId }).populate("tenderId", "name");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user applications" });
  }
};

// 📌 Update tender application status (Admin Only)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await TenderApplication.findByIdAndUpdate(req.params.id, { status }, { new: true });

    if (!application) return res.status(404).json({ error: "Application not found" });

    res.json({ message: "Application status updated", application });
  } catch (error) {
    res.status(500).json({ error: "Failed to update application status" });
  }
};

// 📌 Delete a tender application (Admin Only)
exports.deleteTenderApplication = async (req, res) => {
  try {
    const application = await TenderApplication.findById(req.params.id);
    if (!application) return res.status(404).json({ error: "Application not found" });

    // Delete associated files
    application.documents.forEach((file) => {
      const filePath = path.join(__dirname, "../", file);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    });

    await TenderApplication.findByIdAndDelete(req.params.id);
    res.json({ message: "Tender application deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete tender application" });
  }
};
