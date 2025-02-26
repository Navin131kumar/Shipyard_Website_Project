const express = require("express");
const {
  createRepairRequest,
  getAllRepairRequests,
  getUserRepairRequests,
  updateRepairStatus,
  deleteRepairRequest
} = require("../controllers/repairRequestController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createRepairRequest);
router.get("/", authMiddleware, adminMiddleware, getAllRepairRequests);
router.get("/my-requests", authMiddleware, getUserRepairRequests);
router.put("/:id", authMiddleware, adminMiddleware, updateRepairStatus);
router.delete("/:id", authMiddleware, adminMiddleware, deleteRepairRequest);

module.exports = router;
