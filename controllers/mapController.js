const Map = require('../models/Map');

// Add a new map link
exports.addMap = async (req, res) => {
  const { link } = req.body;

  try {
    const newMap = new Map({ link });
    await newMap.save();
    res.status(201).json({ message: 'Map link added successfully', map: newMap });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add map link' });
  }
};

// Get the map link
exports.getMap = async (req, res) => {
  try {
    const map = await Map.findOne(); // Fetch the first map link (only one is allowed)
    res.status(200).json(map);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch map link' });
  }
};

// Update the map link
exports.updateMap = async (req, res) => {
  const { link } = req.body;

  try {
    const map = await Map.findOneAndUpdate({}, { link }, { new: true, upsert: true }); // Update or insert
    res.status(200).json({ message: 'Map link updated successfully', map });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update map link' });
  }
};

// Delete the map link
exports.deleteMap = async (req, res) => {
  try {
    const map = await Map.findOneAndDelete(); // Delete the only map link
    if (!map) {
      return res.status(404).json({ error: 'No map link found to delete' });
    }
    res.status(200).json({ message: 'Map link deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete map link' });
  }
};
