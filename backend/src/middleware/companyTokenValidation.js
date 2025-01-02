const jwt = require('jsonwebtoken');
const Company = require('../models/company');

const validateCompanyToken = async (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const company = await Company.findById(decoded.companyId).select('-password');
        
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }

        req.company = company;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = validateCompanyToken;
