const express = require('express');
const router = express.Router();
const validateCompanyToken = require('../middleware/companyTokenValidation');
const {createOpenings} = require('../controller/openingsController');


router.post('/createop',validateCompanyToken,createOpenings);

module.exports = router;