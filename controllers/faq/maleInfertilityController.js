const MaleFertility = require('../../models/faq/MaleInfertility');

// Create a new MaleFertility record
exports.createMaleFertility = async (req, res) => {
  try {
    const { title, subTitle, description } = req.body;

    // Create new record
    const newRecord = new MaleFertility({
      title,
      subTitle,
      description
    });

    // Save to database
    await newRecord.save();
    res.status(201).json({ message: 'Male Fertility record created successfully', data: newRecord });
  } catch (error) {
    res.status(500).json({ message: 'Error creating record', error: error.message });
  }
};

// Get all MaleFertility records
exports.getAllMaleFertility = async (req, res) => {
  try {
    const records = await MaleFertility.find();
    res.status(200).json({ data: records });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching records', error: error.message });
  }
};

// Get a single MaleFertility record by ID
exports.getMaleFertilityById = async (req, res) => {
  try {
    const record = await MaleFertility.findById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ data: record });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching record', error: error.message });
  }
};

// Update a MaleFertility record
exports.updateMaleFertility = async (req, res) => {
  try {
    const updatedRecord = await MaleFertility.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record updated successfully', data: updatedRecord });
  } catch (error) {
    res.status(500).json({ message: 'Error updating record', error: error.message });
  }
};

// Delete a MaleFertility record
exports.deleteMaleFertility = async (req, res) => {
  try {
    const deletedRecord = await MaleFertility.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting record', error: error.message });
  }
};
