const Project = require('../models/projects');
const User = require('../models/user');

const project = async(req,res) => {
    try {
        const {projectTitle, projectDomain, startDate, endDate, projectDesc} = req.body;
        const userId = req.user.userId;

        const userData = await User.findById(userId);
        const projectDetails = new Project({
            ...req.body,
            user: userId,
            username: userData.name
        });
        await projectDetails.save();
        res.status(200).json({
            success: true,
            message: "Project Details saved"
        })
    } catch (error) {
        re.status(500).json({
            success: false,
            message: "Error saving project details"
        })        
    }
}

module.exports = {project};