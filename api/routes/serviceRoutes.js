const express = require("express");
const {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
} = require("../controllers/serviceController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// ✅ Create Service (Admin Only)
router.post("/", authMiddleware, adminMiddleware, createService);

// ✅ Get All Services
router.get("/", getAllServices);

// ✅ Get Service by ID
router.get("/:id", getServiceById);

// ✅ Update Service (Admin Only)
router.put("/:id", authMiddleware, adminMiddleware, updateService);

// ✅ Delete Service (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteService);

module.exports = router;
