const express = require("express");
const {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember
} = require("../controllers/teamController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, createTeamMember);
router.get("/", getAllTeamMembers);
router.get("/:id", getTeamMemberById);
router.put("/:id", authMiddleware, adminMiddleware, updateTeamMember);
router.delete("/:id", authMiddleware, adminMiddleware, deleteTeamMember);

module.exports = router;
