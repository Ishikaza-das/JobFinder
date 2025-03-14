const express = require('express');
const router = express.Router();
const validateCompanyToken = require('../middleware/companyTokenValidation');
const {createOpenings, totalJobs,getAllJobs} = require('../controller/openingsController');
const validateToken = require('../middleware/tokenValidation');


router.post('/createop',validateCompanyToken,createOpenings);
router.get('/stats',validateCompanyToken,totalJobs);
router.get('/jobs',validateToken,getAllJobs);

module.exports = router;