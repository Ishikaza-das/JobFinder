const Responsibility = require('../models/responsibility');
const User = require('../models/user');

const responsibility = async(req,res) => {
    try {
        const {position, organization, description} = req.body;
        const userId = req.user.userId;

        const userData = await User.findById(userId);
        const responsibilityDetails = new Responsibility({
            ...req.body,
            user: userId,
            username: userData.name
        });
        await responsibilityDetails.save();
        res.status(200).json({
            success: true,
            message: "Responsibility details saved"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving responsibility details"
        });
    }
}

module.exports = {responsibility};