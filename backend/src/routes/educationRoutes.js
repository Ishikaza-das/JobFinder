const express= require('express');
const router = express.Router();
const validateToken = require("../middleware/tokenValidation");
const {education} = require('../controller/educationController');

router.post('/educationdetails',validateToken,education);

module.exports = router;