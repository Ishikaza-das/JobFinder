const express = require('express');
const router = express.Router();
const googleAuthController = require('../controller/googleAuthController');
const validateToken = require('../middleware/tokenValidation');

router.get('/google', googleAuthController.getGoogleAuthUrl);
router.get('/google/callback', googleAuthController.googleCallback);
router.get('/verify', validateToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
