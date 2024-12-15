const express = require('express');
const router = express.Router();
const {getAllUsers, getUserById, checkAuthStatus} = require('../controller/userController');

router.get('/check', checkAuthStatus);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);


module.exports = router