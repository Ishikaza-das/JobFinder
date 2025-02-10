const express = require('express');

const {signupCompany, loginCompany, verifyEmail} = require('../controller/companyAuthController');
const validateCompanyToken = require('../middleware/companyTokenValidation');


const router = express.Router();

router.post('/signup', signupCompany);
router.post('/login',loginCompany);
router.post('/verify-email', verifyEmail);


module.exports = router