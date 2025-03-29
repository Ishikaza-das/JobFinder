const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skillset: {type: String, required: true},
    proficiency: {type: String, required: true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username:{type: String, required:true}
});

const Skill = mongoose.model('Skill',skillSchema);
module.exports = Skill;