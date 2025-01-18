const express = require('express');
const router = express.Router();
const mapController = require('../controllers/mapController');

// Add a map link
router.post('/', mapController.addMap);

// Get the map link
router.get('/', mapController.getMap);

// Update the map link
router.put('/', mapController.updateMap);

// Delete the map link
router.delete('/', mapController.deleteMap);

module.exports = router;
