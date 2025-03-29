const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    dob: {type: String, required: true},
    gender: {type: String, required: true},
    currentCollege: {type: String, required: true},
    summary: {type: String},
    address:{type: String, required:true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username:{type: String, required:true}
});

const Details = mongoose.model('Details', detailsSchema);
module.exports = Details;