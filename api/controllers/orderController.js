const Order = require("../models/Order");

// ✅ Create a new order (User Only)
exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({ userId: req.user.userId, ...req.body });
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ error: "Failed to place order" });
  }
};

// ✅ Get all orders (Admin Only)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email").populate("serviceId", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// ✅ Get orders for the logged-in user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.userId }).populate("serviceId", "name");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user orders" });
  }
};

// ✅ Update order status (Admin Only)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updatedOrder) return res.status(404).json({ error: "Order not found" });
    res.json({ message: "Order status updated", updatedOrder });
  } catch (error) {
    res.status(500).json({ error: "Failed to update order status" });
  }
};

// ✅ Delete an order (Admin Only)
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ error: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
