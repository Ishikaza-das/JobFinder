const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/tokenValidation");
const {skill} = require('../controller/skillController');

router.post('/skilldetails',validateToken,skill);

module.exports = router;