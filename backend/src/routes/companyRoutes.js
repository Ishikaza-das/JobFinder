const express = require('express');

const {signupCompany, updateCompanyDetails, loginCompany, verifyEmail} = require('../controller/companyController');
const validateCompanyToken = require('../middleware/companyTokenValidation');

const router = express.Router();

router.post('/signup', signupCompany);
router.put('/details', validateCompanyToken, updateCompanyDetails);
router.post('/login',loginCompany);
router.post('/verify-email', verifyEmail);

module.exports = router