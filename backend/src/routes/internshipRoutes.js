const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/tokenValidation");
const {internship} = require('../controller/internshipController');

router.post('/internshipdetails',validateToken,internship);

module.exports = router;