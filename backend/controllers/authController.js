const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    if (!name || !email || !age || !password)
      return res.status(400).json({ message: "Please fill all the details." });
    const existedEmail = await User.findOne({ email });
    if (existedEmail)
      return res.status(400).json({ message: "Email already exists." });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, age, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({
      data: {
        name: newUser.name,
        age: newUser.age,
        email: newUser.email,
      },
      message: "Registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error occurred." });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Please fill all the details." });
  const existingUser = await User.findOne({ email });
  if (!existingUser)
    return res.status(404).json({ message: "Email doesn't exist." });

  const isMatch = await bcrypt.compare(password, existingUser.password);
  if (!isMatch)
    return res.status(403).json({ message: "Invalid credentials." });
  return res.status(200).json({
    data: {
      name: existingUser.name,
      email: existingUser.email,
      age: existingUser.age,
    },
    message: "Logged in successfully.",
  });
};

module.exports = { registerUser, loginUser };
