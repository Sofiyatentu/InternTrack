require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

const authRouter = require("./routes/authRoutes");

const app = express();
const port = 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
