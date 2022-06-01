// server.js
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/v1/tasks", taskRoutes);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
