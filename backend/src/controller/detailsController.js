const Details = require('../models/details');
const User = require('../models/user');

const basicDetails = async (req,res) => {
    try {
        const {dob, gender, currentCollege, summary,  presentaddress, permanentaddress} = req.body;
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

const getUserDetails = async (req,res) => {
    try {
        const userId = req.user.userId;
        const details = await Details.findOne({user: userId});
    if(!details){
        res.status(404).json({
            success: false,
            message: 'User details not found'
        })
        return;
    }
    res.status(200).json({
        success: true,
        details
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching user details'
        })
    }
}

const updateUserDetails = async (req,res) => {
    try {
        const {dob, gender, currentCollege, summary,  presentaddress, permanentaddress} = req.body;
        const userId = req.user.userId;
        let updateDetails = await Details.findOne({user: userId});

        if(!updateDetails){
            res.status(404).json({
                success: false,
                message: 'User details not found'
            });
            return;
        }
        updateDetails.dob = dob || updateDetails.dob;
        updateDetails.gender = gender || updateDetails.gender;
        updateDetails.currentCollege = currentCollege || updateDetails.currentCollege;
        updateDetails.summary = summary || updateDetails.summary;
        updateDetails.presentaddress = presentaddress || updateDetails.presentaddress;
        updateDetails.permanentaddress = permanentaddress || updateDetails.permanentaddress;

        await updateDetails.save();
        res.status(200).json({
            success: true,
            message: 'User details updated successfully',
            updateDetails 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating user details'
        });
    }
};

module.exports = {basicDetails, getUserDetails, updateUserDetails}