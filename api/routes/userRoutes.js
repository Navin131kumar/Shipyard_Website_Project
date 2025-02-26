const express = require("express");
const {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  deleteUser
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../config/multer");

const router = express.Router();

router.get("/", authMiddleware, adminMiddleware, getAllUsers);
router.get("/profile", authMiddleware, getUserProfile);
router.post("/update-profile",upload.single('image') , authMiddleware, updateUserProfile);
router.put("/profile/password", authMiddleware, updateUserPassword);
router.delete("/:userId", authMiddleware, adminMiddleware, deleteUser);

module.exports = router;
