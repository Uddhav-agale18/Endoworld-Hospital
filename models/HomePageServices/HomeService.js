const mongoose = require('mongoose');

const homeServiceSchema = new mongoose.Schema({
  serviceName: { type: String, required: true },
});

module.exports = mongoose.model('HomeService', homeServiceSchema);
