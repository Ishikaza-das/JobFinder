const express = require('express');

const {signupCompany} = require('../controller/companyController');
// const validateCompanyToken = require('../middleware/companyTokenValidation');

const router = express.Router();

router.post('/signup', signupCompany);

module.exports = router