const express = require("express");
const { getAllAdminLogs, deleteAdminLog } = require("../controllers/adminLogController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/", authMiddleware, adminMiddleware, getAllAdminLogs);
router.delete("/:id", authMiddleware, adminMiddleware, deleteAdminLog);

module.exports = router;
