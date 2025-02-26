const express = require("express");
const {
  createOrder,
  getAllOrders,
  getUserOrders,
  updateOrderStatus,
  deleteOrder
} = require("../controllers/orderController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// ✅ Create Order (User Only)
router.post("/", authMiddleware, createOrder);

// ✅ Get All Orders (Admin Only)
router.get("/", authMiddleware, adminMiddleware, getAllOrders);

// ✅ Get Orders for the Logged-in User
router.get("/my-orders", authMiddleware, getUserOrders);

// ✅ Update Order Status (Admin Only)
router.put("/:id", authMiddleware, adminMiddleware, updateOrderStatus);

// ✅ Delete an Order (Admin Only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteOrder);

module.exports = router;
