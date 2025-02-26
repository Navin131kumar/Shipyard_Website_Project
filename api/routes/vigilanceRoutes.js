const express = require("express");
const {
  createReport,
  getAllReports,
  getReportById,
  updateReportStatus,
  deleteReport
} = require("../controllers/vigilanceController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createReport);
router.get("/", authMiddleware, adminMiddleware, getAllReports);
router.get("/:id", authMiddleware, adminMiddleware, getReportById);
router.put("/:id", authMiddleware, adminMiddleware, updateReportStatus);
router.delete("/:id", authMiddleware, adminMiddleware, deleteReport);

module.exports = router;
