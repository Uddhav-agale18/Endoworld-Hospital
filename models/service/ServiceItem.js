const mongoose = require('mongoose');

const serviceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
});

module.exports = mongoose.model('ServiceItem', serviceItemSchema);
