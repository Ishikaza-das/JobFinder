const express = require('express');
const router = express.Router();
const {getAllUsers, getUserProfile, checkAuthStatus,  updateUser} = require('../controller/userController');
const validateToken = require('../middleware/tokenValidation');

router.get('/check',validateToken, checkAuthStatus);
router.get('/users',validateToken, getAllUsers);
router.get('/users/:id',validateToken, getUserProfile);
router.put('/users/profile', validateToken, updateUser);



module.exports = router