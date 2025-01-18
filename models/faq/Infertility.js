const mongoose = require('mongoose');

const InfertilitySchema = new mongoose.Schema({
    title: { type: String },
    subTitle:{type: String},
    description: { type: String },
     
}, { timestamps: true });

module.exports = mongoose.model('Infertility',InfertilitySchema);
