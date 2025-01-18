const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {
  addDoctorStaff,
  getDoctorStaff,
  editDoctorStaff,
  deleteDoctorStaff
} = require('../controllers/doctorStaffController');

// Routes
router.post('/add', upload.single('image'), addDoctorStaff);  // Add Doctor Staff
router.get('/', getDoctorStaff);  // Get All Doctor Staff
router.put('/edit/:id', upload.single('image'), editDoctorStaff);  // Edit Doctor Staff
router.delete('/delete/:id', deleteDoctorStaff);  // Delete Doctor Staff

module.exports = router;
