const express = require("express");
const {
  submitTenderApplication,
  getTenderApplications,
  getUserApplications,
  updateApplicationStatus,
  deleteTenderApplication
} = require("../controllers/tenderApplicationController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// 📌 Submit a tender application (User)
router.post("/", authMiddleware, upload.array("documents", 5), submitTenderApplication);

// 📌 Get a user's applications (User)
router.get("/my-applications", authMiddleware, getUserApplications);

// 📌 Get all applications for a tender (Admin)
router.get("/:tenderId", authMiddleware, adminMiddleware, getTenderApplications);

// 📌 Update application status (Admin)
router.put("/:id", authMiddleware, adminMiddleware, updateApplicationStatus);

// 📌 Delete an application (Admin)
router.delete("/:id", authMiddleware, adminMiddleware, deleteTenderApplication);

module.exports = router;
