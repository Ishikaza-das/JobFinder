const express = require('express');

const {createUser} = require('../service/userService');

const router = express.Router();

router.post('/signup', createUser);

module.exports = router