const express = require('express');

const {signupCompany, updateCompanyDetails, loginCompany} = require('../controller/companyController');
const validateCompanyToken = require('../middleware/companyTokenValidation');

const router = express.Router();

router.post('/signup', signupCompany);
router.put('/details', validateCompanyToken, updateCompanyDetails);
router.post('/login',loginCompany);

module.exports = router