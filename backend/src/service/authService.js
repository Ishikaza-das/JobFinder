const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id, email: newUser.email }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    res.cookie('token',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 
    })
    res.status(201).json({
        message: "User Created",
        userId: newUser._id
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createUser };