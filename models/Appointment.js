const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  message: String,
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
