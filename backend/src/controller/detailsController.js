const Details = require('../models/details');
const User = require('../models/user');

const basicDetails = async (req,res) => {
    try {
        const {dob, gender, currentCollege, summary,  address} = req.body;
        const userId = req.user.userId;

        const userData = await User.findById(userId);

        const basicDetails = new Details({
            ...req.body,
            user: userId,
            username: userData.name
        });
        await basicDetails.save();
        res.status(200).json({
            success: true,
            message: "Basic Details saved",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving basic details"
        });
    }
}

module.exports = {basicDetails}