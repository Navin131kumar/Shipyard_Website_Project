const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, contact, company } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash: hashedPassword, contact, company });

    res.status(201).json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "30d" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role , company:user.company } });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
exports.registerAdmin = async (req, res) => {
    try {
      const { name, email, password, contact, company } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create an admin user
      const adminUser = await User.create({
        name,
        email,
        passwordHash: hashedPassword,
        role: "admin",
        contact,
        company,
      });
  
      res.status(201).json({ message: "Admin registered successfully", userId: adminUser._id });
    } catch (error) {
      res.status(500).json({ error: "Failed to register admin" });
    }
  };
  
