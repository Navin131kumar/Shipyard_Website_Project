const Stock = require("../models/Stock");

// ✅ Create a stock item (Users can add stock)
exports.createStockItem = async (req, res) => {
  try {
    const stockItem = await Stock.create({ ...req.body, userId: req.user.userId });
    res.status(201).json({ message: "Stock item added successfully", stockItem });
  } catch (error) {
    res.status(500).json({ error: "Failed to add stock item" });
  }
};

// ✅ Get all stock items (Everyone can view)
exports.getAllStock = async (req, res) => {
  try {
    const stock = await Stock.find().populate("userId", "name email");
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock" });
  }
};

// ✅ Get a stock item by ID
exports.getStockById = async (req, res) => {
  try {
    const stockItem = await Stock.findById(req.params.id).populate("userId", "name email");
    if (!stockItem) return res.status(404).json({ error: "Stock item not found" });
    res.json(stockItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock item" });
  }
};

// ✅ Update stock (Only stock owners can update)
exports.updateStock = async (req, res) => {
  try {
    const stockItem = await Stock.findById(req.params.id);
    if (!stockItem) return res.status(404).json({ error: "Stock item not found" });

    // Check if the logged-in user is the stock owner
    if (stockItem.userId.toString() !== req.user.userId) {
      return res.status(403).json({ error: "You are not authorized to update this stock" });
    }

    const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Stock updated successfully", updatedStock });
  } catch (error) {
    res.status(500).json({ error: "Failed to update stock" });
  }
};

// ✅ Delete stock (Only stock owners can delete)
exports.deleteStock = async (req, res) => {
  try {
    const stockItem = await Stock.findById(req.params.id);
    if (!stockItem) return res.status(404).json({ error: "Stock item not found" });

    // Check if the logged-in user is the stock owner
    if (stockItem.userId.toString() !== req.user.userId) {
      return res.status(403).json({ error: "You are not authorized to delete this stock" });
    }

    await Stock.findByIdAndDelete(req.params.id);
    res.json({ message: "Stock item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete stock" });
  }
};
