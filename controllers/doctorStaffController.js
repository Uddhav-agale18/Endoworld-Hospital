const DoctorStaff = require('../models/doctorStaff'); // Importing the doctorStaff model

// Add a New Doctor Staff
exports.addDoctorStaff = async (req, res) => {
  try {
    const { name, education, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !education || !image || !description) {
      return res.status(400).json({ error: 'Name, education, image, and description are required' });
    }

    const newDoctorStaff = new DoctorStaff({ name, image, education, description });
    await newDoctorStaff.save();

    res.status(201).json(newDoctorStaff);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get All Doctor Staff
exports.getDoctorStaff = async (req, res) => {
  try {
    const doctorStaffList = await DoctorStaff.find();
    res.status(200).json(doctorStaffList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Edit a Doctor Staff
exports.editDoctorStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, education, description } = req.body;

    // Update image if a new one is uploaded
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedFields = { name, education, description };
    if (image) updatedFields.image = image;

    const updatedDoctorStaff = await DoctorStaff.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedDoctorStaff) {
      return res.status(404).json({ error: 'Doctor Staff not found' });
    }

    res.status(200).json(updatedDoctorStaff);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a Doctor Staff
exports.deleteDoctorStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedDoctorStaff = await DoctorStaff.findByIdAndDelete(id);

    if (!deletedDoctorStaff) {
      return res.status(404).json({ error: 'Doctor Staff not found' });
    }

    res.status(200).json({ message: 'Doctor Staff deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
