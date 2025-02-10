const Comapany = require('../models/company');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendVerificationEmail } = require('../middleware/emailValidation');

const pendingRegistrations = new Map();

const signupCompany = async (req,res) => {
    try {
        const {name, companyname, email, password} = req.body;
        const existingCompany = await Comapany.findOne({ email });
        if(existingCompany){
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const pin = await sendVerificationEmail(email);
        console.log('Generated PIN:', pin);
        
        pendingRegistrations.set(email, {
            name,
            companyname,
            email,
            password: hashedPassword,
            pin
        });
        res.status(200).json({
            success: true,
            message: "Please verify your email with PIN sent to your inbox",
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const verifyEmail = async (req,res) => {
    try {
        const {email, pin} = req.body;
        const pendingRegistration = pendingRegistrations.get(email);

        if(!pendingRegistration){
            return res.status(404).json({
                success: false,
                message: "Registration not found or expired"
            });
        }
        if(pin.toString() !== pendingRegistration.pin.toString()){
            return res.status(400).json({
                success: false,
                message: "Invalid PIN"
            });
        }

        const newComapany = new Comapany({
            name: pendingRegistration.name,
            companyname: pendingRegistration.companyname,
            email: pendingRegistration.email,
            password: pendingRegistration.password,
            verified: true
        });

        await newComapany.save();
        pendingRegistrations.delete(email);

        const token = jwt.sign({companyId: newComapany._id},process.env.SECRET_KEY,{expiresIn: '24h'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(201).json({
            success: true,
            message: "Company registered & verified successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        if(!companyUser.verified){
            res.status(400).json({
                message: "Please verify your email first"
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

module.exports = {signupCompany, loginCompany, verifyEmail};
