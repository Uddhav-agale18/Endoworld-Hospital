const express = require('express');
const router = express.Router();
const maleFertilityController = require('../../controllers/faq/maleInfertilityController');

router.post('/', maleFertilityController.createMaleFertility);

router.get('/', maleFertilityController.getAllMaleFertility);

router.get('/:id', maleFertilityController.getMaleFertilityById);

router.put('/:id', maleFertilityController.updateMaleFertility);

router.delete('/:id', maleFertilityController.deleteMaleFertility);

module.exports = router;
