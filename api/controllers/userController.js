const User = require("../models/User"); // Ensure correct path
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Get all users (Admin Only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-passwordHash");
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {

    const {name, contact, company} = req.body;
    const imageFile = req.file

    if (!name || !contact || !company) {
        return res.json({success:false, message:"data missing"})
    }

    await User.findByIdAndUpdate(req.user.userId,{name,contact,company})

    if (imageFile) {
        
        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
        const imageURL = imageUpload.secure_url

        await User.findByIdAndUpdate(req.user.userId,{image:imageURL})
    }

    res.json({success:true, message:"profile updated"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
  // try {
  //   const { name, contact, company } = req.body;
  //   const imageFile = req.file;

  //   const updatedUser = await User.findByIdAndUpdate(
  //     req.user.userId,
  //     { name, contact, company },
  //   )

  //   if (imageFile) {
  //       const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
  //       const imageURL = imageUpload.secure_url

  //       await userModel.findByIdAndUpdate(req.user.userId,{image:imageURL})
  //   }

  //   if (!updatedUser) return res.status(404).json({ error: "User not found" });

  //   res.json({ message: "Profile updated successfully", user: updatedUser });
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to update profile" });
  // }
};

// Update user password
exports.updateUserPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user.userId);

    if (!user || !(await bcrypt.compare(oldPassword, user.passwordHash))) {
      return res.status(401).json({ error: "Old password is incorrect" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.passwordHash = hashedNewPassword;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update password" });
  }
};

// Delete user (Admin Only)
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
