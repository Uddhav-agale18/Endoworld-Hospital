const express = require('express');
const router = express.Router();
const itemController = require('../../controllers/HomeServiceController/serviceItemController');

// Add a new item
router.post('/', itemController.addItem);

// Get all items
router.get('/', itemController.getAllItems);

// Get all services for dropdown
router.get('/services', itemController.getAllServices);

// Delete an item
router.delete('/:id', itemController.deleteItem);

// Update an item
router.put('/:id', itemController.updateItem);

module.exports = router;
