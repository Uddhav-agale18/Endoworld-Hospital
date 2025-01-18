const mongoose = require('mongoose');

const MapSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('Map', MapSchema);
