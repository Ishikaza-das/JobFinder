const express = require('express');

const {signupCompany, updateCompanyDetails} = require('../controller/companyController');
const validateCompanyToken = require('../middleware/companyTokenValidation');

const router = express.Router();

router.post('/signup', signupCompany);
router.put('/details', validateCompanyToken, updateCompanyDetails);

module.exports = router