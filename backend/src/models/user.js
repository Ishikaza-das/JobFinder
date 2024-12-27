const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    image: {type: String},
    isGoogleUser: { type: Boolean, default: false },
    googleId: { type: String },
    mobileno: {type: String},
    address: {type: String},
    country: {type: String},
    state: {type: String},
});

const  User = mongoose.model('User', userSchema);
module.exports = User;
