require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");


const serviceRoutes = require("./routes/serviceRoutes");
const orderRoutes = require("./routes/orderRoutes");    
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const repairRoutes = require("./routes/repairRoutes");
const vigilanceRoutes = require("./routes/vigilanceRoutes");
const adminLogRoutes = require("./routes/adminLogRoutes");
const tenderRoutes = require("./routes/tenderRoutes");
const tenderApplicationRoutes = require("./routes/tenderApplicationRoutes");
const stockRoutes = require("./routes/stockRoutes");
const exportRequestRoutes = require("./routes/exportRequestRoutes");
const connectCloudinary = require("./config/cloudinary");



connectCloudinary();
connectDB();
const app = express();
app.use(cors());
app.use(express.json()); 

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/repairs", repairRoutes);
app.use("/api/vigilance", vigilanceRoutes);
app.use("/api/admin/logs", adminLogRoutes);
app.use("/api/tenders", tenderRoutes);
app.use("/uploads/tenderApplications", express.static(path.join(__dirname, "uploads/tenderApplications")));
app.use("/api/tender-applications", tenderApplicationRoutes);
app.use("/uploads/tenders", express.static(path.join(__dirname, "uploads/tenders")));
app.use("/api/stock", stockRoutes);
app.use("/api/exports", exportRequestRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
