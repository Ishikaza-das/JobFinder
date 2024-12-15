const express = require('express');

const {signupUser, loginUser, logout} = require('../controller/authController');
const validateToken = require('../middleware/tokenValidation');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser)
router.get('/protected', validateToken, (req,res)=>{
    res.json({message: "You have accessed a protected route ", user: req.user});
})
router.post('/logout', logout);

module.exports = router