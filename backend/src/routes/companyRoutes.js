const express = require('express');
const router = express.Router();
const validateCompanyToken = require('../middleware/companyTokenValidation');
const { getAllCompanies,  getCompanyProfile, updateCompanyDetails, checkAuthStatus} = require('../controller/companyController');

router.get('/companies',getAllCompanies);
router.get('/companies/:id',validateCompanyToken, getCompanyProfile);
router.put('/details', validateCompanyToken, updateCompanyDetails);
router.get('/check',validateCompanyToken,checkAuthStatus);

module.exports = router;