const express = require('express');

const {createUser} = require('../service/authService');
const validateToken = require('../middleware/tokenValidation');

const router = express.Router();

router.post('/signup', createUser);
router.get('/protected', validateToken, (req,res)=>{
    res.json({message: "You have accessed a protected route ", user: req.user});
})

module.exports = router