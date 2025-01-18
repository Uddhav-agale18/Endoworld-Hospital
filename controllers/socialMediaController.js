const SocialMediaLinks = require('../models/SocialMediaLinks');

// Get Social Media Links
exports.getSocialMediaLinks = async (req, res) => {
  try {
    const links = await SocialMediaLinks.findOne();
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching social media links' });
  }
};

// Update Social Media Links
exports.updateSocialMediaLinks = async (req, res) => {
  try {
    const { facebook, twitter, instagram, youtube, linkedin } = req.body; // Add linkedin
    const links = await SocialMediaLinks.findOneAndUpdate(
      {}, 
      { facebook, twitter, instagram, youtube, linkedin }, // Update linkedin
      { new: true, upsert: true }
    );
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: 'Error updating social media links' });
  }
};

// Add Social Media Links
exports.addSocialMediaLinks = async (req, res) => {
  try {
    const { facebook, twitter, instagram, youtube, linkedin } = req.body; // Add linkedin

    // Check if any link is missing
    if (!facebook || !twitter || !instagram || !youtube || !linkedin) { // Ensure linkedin is included
      return res.status(400).json({ message: 'All social media links are required' });
    }

    const newLinks = new SocialMediaLinks({
      facebook,
      twitter,
      instagram,
      youtube,
      linkedin, // Add linkedin
    });

    const savedLinks = await newLinks.save();
    res.status(201).json(savedLinks);
  } catch (error) {
    res.status(500).json({ message: 'Error adding social media links' });
  }
};

// Delete Social Media Links
exports.deleteSocialMediaLinks = async (req, res) => {
  try {
    const deletedLinks = await SocialMediaLinks.deleteOne({});
    
    if (deletedLinks.deletedCount === 0) {
      return res.status(404).json({ message: 'No social media links found to delete' });
    }

    res.status(200).json({ message: 'Social media links deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting social media links' });
  }
};
