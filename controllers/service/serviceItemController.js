const Service = require('../../models/service/Service');
const Item = require('../../models/service/ServiceItem');

// Add a new item
exports.addItem = async (req, res) => {
  try {
    const item = new Item({
      title: req.body.title,
      description: req.body.description,
      serviceId: req.body.serviceId,
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
    const items = await Item.find().populate('serviceId', 'name');
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
        title: req.body.title,
        description: req.body.description,
        serviceId: req.body.serviceId,
      },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
