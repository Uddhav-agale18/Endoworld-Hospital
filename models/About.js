const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    mission: { type: String },
    vision: { type: String },
    image: { type: String },  
}, { timestamps: true });

module.exports = mongoose.model('About', AboutSchema);
