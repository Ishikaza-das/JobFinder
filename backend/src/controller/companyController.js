const Comapany = require('../models/company');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const signupCompany = async (req,res) => {
    try {
        const {name, companyname, email, password} = req.body;
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
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateCompanyDetails = async(req,res) => {
    try {
        const { website, address, location, phone } = req.body;
        const companyId = req.company.id;

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

const loginCompany = async (req,res) => {
    try {
        const { email, password} = req.body;
        const companyUser = await Comapany.findOne({email});

        if(!companyUser){
            res.status(400).json({
                message: "User not found"
            });
        };
        const isValidPassword = await bcrypt.compare(password, companyUser.password);
        if(!isValidPassword) {
            return res.status(400).json({message: 'Invalid password'});
        }
        const token = jwt.sign(
            { companyId: companyUser._id },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({
            success: true,
            message: "Login successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {signupCompany, updateCompanyDetails, loginCompany};