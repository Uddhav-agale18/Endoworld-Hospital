const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Route to handle appointment creation
router.post('/appointment', appointmentController.createAppointment);

module.exports = router;
