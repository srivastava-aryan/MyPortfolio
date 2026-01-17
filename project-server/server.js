const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mailRoutes = require("./routes/mailRoutes");
const app = express();

// Middleware
app.use(
  cors({
    origin: [
      // "http://localhost:5173",
      "https://aryan-srivastava-08.vercel.app",
      "https://aryansrivastava.me",
    ],
    credentials: true,
  }),
);
app.use(express.json());

// Routes
app.use("/api/contact", mailRoutes);

const PORT = process.env.PORT || 5000;

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
