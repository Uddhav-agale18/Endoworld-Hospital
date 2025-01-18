const express = require('express');
const router = express.Router();
const hysteroscopyController = require('../../controllers/faq/hysteroscopyController');

// Create a new Hysteroscopy entry
router.post('/', hysteroscopyController.createEntry);

// Get all Hysteroscopy entries
router.get('/', hysteroscopyController.getAllEntries);

// Get a single Hysteroscopy entry by ID
router.get('/:id', hysteroscopyController.getEntryById);

// Update a Hysteroscopy entry
router.put('/:id', hysteroscopyController.updateEntry);

// Delete a Hysteroscopy entry
router.delete('/:id', hysteroscopyController.deleteEntry);

module.exports = router;
