const express = require('express');

const {signupCompany} = require('../controller/companyController');

const router = express.Router();

router.post('/signup', signupCompany);

module.exports = router