const Internship = require('../models/internship');
const User = require('../models/user');

const internship = async(req,res) => {
    try {
        const {companyName, companySector, jobTitle, jobLocation, startDate, endDate, jobWork} = req.body;
        const userId = req.user.userId;

        const userData = await User.findById(userId);
        const internshipDetails = new Internship({
            ...req.body,
            user: userId,
            username: userData.name
        });
        await internshipDetails.save();
        res.status(200).json({
            success: true,
            message: "Internship details saved"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving internship details"
        })
    }
}

module.exports = {internship};