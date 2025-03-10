const Openings = require('../models/openings');
const Comapany = require('../models/company');

const createOpenings = async (req,res) => {
    const {jobtitle, department, location, experience, salary, description, skill } = req.body;
    const companyId = req.companies.companyId;

    const company = await Comapany.findById(companyId);
    try {
        const newOpenings = new Openings({
            ...req.body,
            company: companyId,
            companyname: company.companyname,
            openingid: `JOB-${Date.now()}`
        })
        await newOpenings.save();
        res.status(200).json({
            success: true,
            message: "Openings Created.",
        });
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {createOpenings}