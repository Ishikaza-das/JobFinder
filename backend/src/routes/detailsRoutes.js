const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/tokenValidation");
const {basicDetails} = require("../controller/detailsController");

router.post('/basicdetails',validateToken,basicDetails);

module.exports = router;