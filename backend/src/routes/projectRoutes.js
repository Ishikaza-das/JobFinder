const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/tokenValidation");
const {project} = require('../controller/projectsController');

router.post('/projectdetails',validateToken,project);

module.exports = router;