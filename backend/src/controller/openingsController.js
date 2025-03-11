const Openings = require('../models/openings');
const Company = require('../models/company');

const createOpenings = async (req,res) => {
    try {
        const {jobtitle, department, location, experience, salary, description, skill } = req.body;
        const companyId = req.companies.companyId;

        const companyData = await Company.findById(companyId);

        const newOpenings = new Openings({
            ...req.body,
            company: companyId,
            companyname: companyData.companyname,
            openingid: `JOB-${Date.now()}`
        });
        await newOpenings.save();

        companyData.jobpostings = (companyData.jobpostings || 0) + 1;
        await companyData.save();

        res.status(200).json({
            success: true,
            message: "Openings Created.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error creating opening"
        });
    }
}

const totalJobs = async(req,res) => {
    try {
        const companyId = req.companies.companyId;
        const company = await Company.findById(companyId);
        res.status(200).json({
            success: true,
            stats: {
                totalJobs: company.jobpostings || 0
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching stats"
        });
    }
}

module.exports = {createOpenings, totalJobs};