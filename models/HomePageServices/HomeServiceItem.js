const mongoose = require('mongoose');

const homeServiceItemSchema = new mongoose.Schema({
  homeTitle: { type: String, required: true },
  homeDescription: { type: String, required: true },
  homeServiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'HomeService', required: true },
});

module.exports = mongoose.model('HomeServiceItem', homeServiceItemSchema);
