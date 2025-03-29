const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    program: {type: String, required:true},
    branch: {type: String, required: true},
    college: {type: String, required: true},
    semester: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username:{type: String, required:true}    
});

const Education = mongoose.model('Education',educationSchema);
module.exports = Education;