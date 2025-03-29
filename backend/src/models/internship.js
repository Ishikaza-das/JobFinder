const mongoose = require('mongoose');

const intershipSchema = new mongoose.Schema({
    companyName: {type: String,required: true},
    companySector: {type: String, required: true},
    jobTitle: {type: String, required: true},
    jobLocation: {type: String, required: true},
    stratDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    jobWork: {type: String, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username:{type: String, required:true}
});

const Internship = mongoose.model('Internship', intershipSchema);
module.exports = Internship;