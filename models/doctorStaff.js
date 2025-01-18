const mongoose = require('mongoose');

// Define DoctorStaff Schema
const doctorStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // Image path
  education: { type: String, required: true }, // Education field
  description: { type: String, required: true }, // Description field
});

// Export Model
module.exports = mongoose.model('DoctorStaff', doctorStaffSchema);
