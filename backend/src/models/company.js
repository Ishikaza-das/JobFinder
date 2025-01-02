const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyname: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    website: {type: String},
    address: {type: String},
    phone: {type: String},
    verified: {type: Boolean, default: false}
});

const Company = mongoose.model('Comapany',companySchema);

module.exports = Company;