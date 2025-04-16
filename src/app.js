process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// src/app.js
const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const todoRoutes = require("./routes/todo");

const app = express();

app.use(bodyParser.json());
app.use("/api/todos/", todoRoutes);

app.use("/api/test", async (req, res) => {
  res.status(200).json({ message: "Работааееет" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync();
  console.log("Database synced");
});
