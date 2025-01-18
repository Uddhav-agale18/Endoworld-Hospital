const express = require('express');
const router = express.Router();
const fertilityController = require('../../controllers/faq/InfertilityController');

// Create a new Fertility entry
router.post('/', fertilityController.createEntry);

// Get all Fertility entries
router.get('/', fertilityController.getAllEntries);

// Get a single Fertility entry by ID
router.get('/:id', fertilityController.getEntryById);

// Update a Fertility entry
router.put('/:id', fertilityController.updateEntry);

// Delete a Fertility entry
router.delete('/:id', fertilityController.deleteEntry);

module.exports = router;
