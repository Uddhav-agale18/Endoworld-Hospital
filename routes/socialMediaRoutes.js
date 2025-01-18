// routes/socialMediaRoutes.js

const express = require('express');
const { getSocialMediaLinks, updateSocialMediaLinks, addSocialMediaLinks, deleteSocialMediaLinks } = require('../controllers/socialMediaController');

const router = express.Router();

// Get Social Media Links
router.get('/', getSocialMediaLinks);

// Update Social Media Links
router.put('/', updateSocialMediaLinks);

// Add Social Media Links
router.post('/', addSocialMediaLinks);

// Delete Social Media Links
router.delete('/', deleteSocialMediaLinks);

module.exports = router;
