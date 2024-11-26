const User = require('../models/user');

// Create a user
const createUser = async (req,res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json("User created");
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};



module.exports = {createUser};