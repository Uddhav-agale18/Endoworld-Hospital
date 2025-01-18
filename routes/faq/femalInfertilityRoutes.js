const express = require('express');
const router = express.Router();
const femaleFertilityController = require('../../controllers/faq/femaleInfertilityController');

// Create a new entry
router.post('/', femaleFertilityController.createEntry);

// Get all entries
router.get('/', femaleFertilityController.getAllEntries);

// Get an entry by ID
router.get('/:id', femaleFertilityController.getEntryById);

// Update an entry
router.put('/:id', femaleFertilityController.updateEntry);

// Delete an entry
router.delete('/:id', femaleFertilityController.deleteEntry);

module.exports = router;
