const express = require('express');
const router = express.Router();
const validateToken = require("../middleware/tokenValidation");
const {basicDetails, getUserDetails, updateUserDetails} = require("../controller/detailsController");

router.post('/basicdetails',validateToken,basicDetails);
router.get('/info/:id',validateToken,getUserDetails);
router.put('/update/:id',validateToken,updateUserDetails);

module.exports = router;