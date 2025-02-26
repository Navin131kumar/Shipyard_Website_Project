const express = require("express");
const {
  createTender,
  getAllTenders,
  getTenderById,
  updateTender,
  deleteTender
} = require("../controllers/tenderController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/", authMiddleware, upload.array("documents", 5), createTender);
router.get("/", getAllTenders);
router.get("/:id", getTenderById);
router.put("/:id", authMiddleware, adminMiddleware, upload.array("documents", 5), updateTender);
router.delete("/:id", authMiddleware, adminMiddleware, deleteTender);

module.exports = router;
