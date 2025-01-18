const mongoose = require('mongoose');

const HysteroscopySchema = new mongoose.Schema({
    title: { type: String },
    subTitle:{type: String},
    description: { type: String },
     
}, { timestamps: true });

module.exports = mongoose.model('Hysteroscopy',HysteroscopySchema);
