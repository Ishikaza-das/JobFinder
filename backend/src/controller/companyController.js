const jwt = require('jsonwebtoken');
const Comapany = require('../models/company');

const getAllCompanies = async(req,res) => {
    try {
        const companies = await Comapany.find({});
        res.status(200).json({
            companies
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getCompanyProfile = async(req,res) => {
    try {
        const companyId = req.companies.companyId;
        const company = await Comapany.findById(companyId).select('-password');

        if(!company){
            return res.status(404).json({message: "Company not found" });
        }

        res.status(200).json({
            success: true,
            company
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching profile",
            error: error.message
        });
    }
};

const checkAuthStatus = async (req,res) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: 'Not authenticated'});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const company = await Comapany.findById(decoded.companyId).select('-password');

        if(!company){
            return res.status(404).json({message: 'Company not found' });
        }
        res.json({ company});
    } catch (error) {
        res.status(401).json({message: 'Invalid token'});
    }
};

const updateCompanyDetails = async(req,res) => {
    try {
        const { website, address, location, phone } = req.body;
        const companyId = req.company._id;

        await Comapany.findByIdAndUpdate(
            companyId,
            {
                location: location,
                website: website,
                address: address,
                phone: phone
            },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Company details updated successfully"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {getAllCompanies, getCompanyProfile, updateCompanyDetails, checkAuthStatus};
