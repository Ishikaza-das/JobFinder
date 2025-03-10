const mongoose = require('mongoose');

const openingSchema = new mongoose.Schema({
    openingid: {type: String, required: true},
    jobtitle: {type: String, required: true},
    department: {type: String, required: true},
    location: {type: String, required: true},
    experience: {type: String, required: true},
    salary: {type: String, required: true},
    description: {type: String, required: true},
    skill: {type: String, required: true},
    companyname: {type: String, required: true},
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
})

const Openings = mongoose.model('Openings', openingSchema);
module.exports = Openings;