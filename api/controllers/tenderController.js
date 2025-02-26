const fs = require("fs");
const path = require("path");
const Tender = require("../models/Tender");

// Create a new tender (Admin Only)
exports.createTender = async (req, res) => {
  try {
    const { name, description, deadline, bidRange } = req.body;

    // Store uploaded file paths
    const documentPaths = req.files ? req.files.map((file) => file.path) : [];

    const tender = await Tender.create({
      name,
      description,
      deadline,
      bidRange,
      documents: documentPaths,
    });

    res.status(201).json({ message: "Tender created successfully", tender });
  } catch (error) {
    res.status(500).json({ error: "Failed to create tender" });
  }
};

// Get all tenders
exports.getAllTenders = async (req, res) => {
  try {
    const tenders = await Tender.find();
    res.json(tenders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tenders" });
  }
};

// Get a specific tender by ID
exports.getTenderById = async (req, res) => {
  try {
    const tender = await Tender.findById(req.params.id);
    if (!tender) return res.status(404).json({ error: "Tender not found" });
    res.json(tender);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tender" });
  }
};

// Update a tender (Admin Only)
exports.updateTender = async (req, res) => {
  try {
    const { name, description, deadline, bidRange } = req.body;
    const tender = await Tender.findById(req.params.id);

    if (!tender) return res.status(404).json({ error: "Tender not found" });

    // If new files are uploaded, delete old files
    if (req.files && tender.documents.length > 0) {
      tender.documents.forEach((file) => {
        const filePath = path.join(__dirname, "../", file);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      });
    }

    // Store new file paths if files were uploaded
    const documentPaths = req.files ? req.files.map((file) => file.path) : tender.documents;

    tender.name = name || tender.name;
    tender.description = description || tender.description;
    tender.deadline = deadline || tender.deadline;
    tender.bidRange = bidRange || tender.bidRange;
    tender.documents = documentPaths;

    await tender.save();

    res.json({ message: "Tender updated successfully", tender });
  } catch (error) {
    res.status(500).json({ error: "Failed to update tender" });
  }
};

// Delete a tender (Admin Only)
exports.deleteTender = async (req, res) => {
  try {
    const tender = await Tender.findById(req.params.id);
    if (!tender) return res.status(404).json({ error: "Tender not found" });

    // Delete associated files
    tender.documents.forEach((file) => {
      const filePath = path.join(__dirname, "../", file);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    });

    await Tender.findByIdAndDelete(req.params.id);

    res.json({ message: "Tender deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete tender" });
  }
};
