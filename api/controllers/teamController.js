const Team = require("../models/Team");

// Create a new team member (Admin Only)
exports.createTeamMember = async (req, res) => {
  try {
    const { name, role, image, bio } = req.body;
    const teamMember = await Team.create({ name, role, image, bio });
    res.status(201).json({ message: "Team member added successfully", teamMember });
  } catch (error) {
    res.status(500).json({ error: "Failed to add team member" });
  }
};

// Get all team members
exports.getAllTeamMembers = async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team members" });
  }
};

// Get a specific team member by ID
exports.getTeamMemberById = async (req, res) => {
  try {
    const teamMember = await Team.findById(req.params.id);
    if (!teamMember) return res.status(404).json({ error: "Team member not found" });
    res.json(teamMember);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team member" });
  }
};

// Update a team member (Admin Only)
exports.updateTeamMember = async (req, res) => {
  try {
    const updatedMember = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMember) return res.status(404).json({ error: "Team member not found" });
    res.json({ message: "Team member updated successfully", updatedMember });
  } catch (error) {
    res.status(500).json({ error: "Failed to update team member" });
  }
};

// Delete a team member (Admin Only)
exports.deleteTeamMember = async (req, res) => {
  try {
    const deletedMember = await Team.findByIdAndDelete(req.params.id);
    if (!deletedMember) return res.status(404).json({ error: "Team member not found" });
    res.json({ message: "Team member deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete team member" });
  }
};
