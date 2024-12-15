const jwt = require('jsonwebtoken');
const User = require('../models/user');

const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            users
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getUserById = async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
}

const checkAuthStatus = async (req, res) => {
  try {
      const token = req.cookies.token;
      
      if (!token) {
          return res.status(401).json({ message: 'Not authenticated' });
      }
      
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(decoded.userId);
      
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      
      res.json({ user });
  } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { getAllUsers, getUserById, checkAuthStatus };