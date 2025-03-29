const mongoose = require('mongoose');

const responsibilitySchema = new mongoose.Schema({
    position: {type: String, required: true},
    organization: {type: String, required: true},
    description: {type: String, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username:{type: String, required:true}
});

const Responsibility = mongoose.model('Responsibility',responsibilitySchema);
module.exports = Responsibility;