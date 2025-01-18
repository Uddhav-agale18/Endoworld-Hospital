const mongoose = require('mongoose');

const FemaleFertilitySchema = new mongoose.Schema({
    title: { type: String },
    subTitle:{type: String},
    description: { type: String },
     
}, { timestamps: true });

module.exports = mongoose.model('FemaleFertility', FemaleFertilitySchema);
