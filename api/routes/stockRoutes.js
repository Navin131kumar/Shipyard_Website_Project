const express = require("express");
const {
  createStockItem,
  getAllStock,
  getStockById,
  updateStock,
  deleteStock
} = require("../controllers/stockController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Users can add stock items
router.post("/", authMiddleware, createStockItem);

// ✅ Everyone can view stock items
router.get("/", getAllStock);
router.get("/:id", getStockById);

// ✅ Only stock owners can update and delete their stock
router.put("/:id", authMiddleware, updateStock);
router.delete("/:id", authMiddleware, deleteStock);

module.exports = router;
