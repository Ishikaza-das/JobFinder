const Education = require('../models/education');
const User = require('../models/user');
const { basicDetails } = require('./detailsController');

const education = async (req,res) => {
    try {
        const {program,branch,college,semester,startDate,endDate} = req.body;
        const userId = req.user.userId;

        const userData = await User.findById(userId);
        const educationDetails = new Education({
            ...req.body,
            user: userId,
            username: userData.name
        });
        await educationDetails.save();
        res.status(200).json({
            success: true,
            message: "Education details saved"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving education details"
        })
    }
}

module.exports = {education};