const express = require("express");
const {
  createExportRequest,
  getAllExports,
  getUserExports,
  updateExportStatus,
  deleteExportRequest
} = require("../controllers/exportRequestController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Create an export request (User Only)
router.post("/", authMiddleware, createExportRequest);

// Get all export requests (Admin Only)
router.get("/", authMiddleware, adminMiddleware, getAllExports);

// Get export requests for the logged-in user
router.get("/my-exports", authMiddleware, getUserExports);

// Update export request status (Admin Only)
router.put("/:id", authMiddleware, adminMiddleware, updateExportStatus);

// Delete an export request (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteExportRequest);

module.exports = router;
