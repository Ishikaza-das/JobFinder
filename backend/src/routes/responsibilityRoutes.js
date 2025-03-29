const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/tokenValidation");
const {responsibility} = require('../controller/responsibilityController');

router.post('/responsibilitydetails',validateToken,responsibility);

module.exports = router;