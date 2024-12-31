const Comapany = require('../models/company');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const signupCompany = async (req,res) => {
    try {
        const {name, email, password, website, address, phone} = req.body;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newCompany = new Comapany({...req.body, password: hashedPassword});
        await newCompany.save();
        const token = jwt.sign(
            { companyId: newCompany._id },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(201).json({
            success: true,
            message: "Company registered successfully",
            company: {
                id: newCompany._id,
                name: newCompany.name,
                email: newCompany.email
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {signupCompany};