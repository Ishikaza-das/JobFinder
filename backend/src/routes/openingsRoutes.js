const express = require('express');
const router = express.Router();
const validateCompanyToken = require('../middleware/companyTokenValidation');
const {createOpenings, totalJobs} = require('../controller/openingsController');


router.post('/createop',validateCompanyToken,createOpenings);
router.get('/stats',validateCompanyToken,totalJobs);

module.exports = router;