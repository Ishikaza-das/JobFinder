const express = require('express');
const { googleAuth } = require('../controller/googleAuthController');
const router = express.Router();

// router.get();

router.get('/google',googleAuth);

module.exports = router