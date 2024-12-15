const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signupUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({...req.body,password: hashedPassword});
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
    res.status(200).json({
        message: "Signup successful",
        userId: newUser._id
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async(req,res) =>{
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({message: 'User not found'});
    }
    if (user.isGoogleUser) {
      return res.status(400).json({ 
          message: 'This email is registered with Google. Please use Google Sign-In.' 
      });
    }
    const isValidatePassoerd = await bcrypt.compare(password, user.password);
    if(!isValidatePassoerd){
      return res.status(400).json({message: 'Invalid password'});
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    });
    res.status(200).json({
        message: "Login successful",
        userId: user._id,
        user: user
    });
  } catch (error) {
    res.status(500).json({message: "Server error"});
  }
};

const logout = async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = { signupUser, loginUser, logout};