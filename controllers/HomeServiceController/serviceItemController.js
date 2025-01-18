const Service = require('../../models/HomePageServices/HomeService');
const Item = require('../../models/HomePageServices/HomeServiceItem');

// Add a new item
exports.addItem = async (req, res) => {
  try {
    const item = new Item({
      homeTitle: req.body.homeTitle,
      homeDescription: req.body.homeDescription,
      homeServiceId: req.body.homeServiceId,
    });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    // Ensure `serviceName` matches the actual field in your HomeService schema
    const items = await Item.find().populate('homeServiceId', 'serviceName');
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all services for dropdown
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find(); // Get all services
    res.json(services); // Send them as a response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        homeTitle: req.body.homeTitle,
        homeDescription: req.body.homeDescription,
        homeServiceId: req.body.homeServiceId,
      },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
