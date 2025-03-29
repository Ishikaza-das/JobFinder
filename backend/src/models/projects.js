const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectTitle: {type: String, require: true},
    projectDomain: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    projectDesc: {type: String, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username:{type: String, required:true}
});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;