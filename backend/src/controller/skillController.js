const Skill = require('../models/skill');
const User = require('../models/user');

const skill = async (req,res)=> {
    try {
        const {skillset, proficiency} = req.body;
        const userId = req.user.userId;

        const userData = await User.findById(userId);
        const skillDetails = new Skill({
            ...req.body,
            user: userId,
            username: userData.name
        });
        await skillDetails.save();
        res.status(200).json({
            success: true,
            message: "Skill details saved"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error saving skill details"
        })
    }
}

module.exports = {skill};