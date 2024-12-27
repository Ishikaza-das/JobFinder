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

const getUserProfile = async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await User.findById(userId).select('-password');
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching profile",
            error: error.message
        });
    }
};

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

const updateUser = async (req, res) => {
    const userId = req.user.userId;
    const currentUser = await User.findById(userId);

    const updateData = {
        name: req.body.name || currentUser.name,
        email: req.body.email || currentUser.email,
        mobileno: req.body.mobileno || currentUser.mobileno,
        address: req.body.address || currentUser.address,
        country: req.body.country || currentUser.country,
        state: req.body.state || currentUser.state
    };

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: updateData },
        { new: true, runValidators: true }
    );

    res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user: updatedUser
    });
};




module.exports = { getAllUsers, getUserProfile, checkAuthStatus, updateUser};