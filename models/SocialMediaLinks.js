// models/SocialMediaLinks.js

const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  youtube: { type: String },
  linkedin: { type: String }  // Added LinkedIn field
});

const SocialMediaLinks = mongoose.model('SocialMediaLinks', socialMediaSchema);
module.exports = SocialMediaLinks;
