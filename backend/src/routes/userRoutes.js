const express = require('express');
const router = express.Router();
const {getAllUsers, getUserById, checkAuthStatus} = require('../controller/userController');
const validateToken = require('../middleware/tokenValidation');

router.get('/check',validateToken, checkAuthStatus);
router.get('/users',validateToken, getAllUsers);
router.get('/users/:id',validateToken, getUserById);


module.exports = router