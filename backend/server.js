require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const app = express();
const port = 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hii future Intern...");
});

app.post("/register", async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    if (!name || !age || !email || !password)
      return res.status(400).json({ message: "Please fill all the details." });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, age, email, password: hashedPassword });
    await newUser.save();
    console.log(newUser);
    return res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      age: newUser.age,
      email: newUser.email,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error." });
  }
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
