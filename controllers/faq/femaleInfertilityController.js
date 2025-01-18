const FemaleFertility = require('../../models/faq/FemaleInfertility');

// Create a new FemaleFertility entry
exports.createEntry = async (req, res) => {
    try {
        const { title, subTitle, description } = req.body;
        const newEntry = new FemaleFertility({ title, subTitle, description });
        await newEntry.save();
        res.status(201).json({ message: "Entry created successfully", data: newEntry });
    } catch (error) {
        res.status(500).json({ message: "Failed to create entry", error });
    }
};

// Get all FemaleFertility entries
exports.getAllEntries = async (req, res) => {
    try {
        const entries = await FemaleFertility.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch entries", error });
    }
};

// Get a single FemaleFertility entry by ID
exports.getEntryById = async (req, res) => {
    try {
        const entry = await FemaleFertility.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json(entry);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch entry", error });
    }
};

// Update a FemaleFertility entry
exports.updateEntry = async (req, res) => {
    try {
        const { title, subTitle, description } = req.body;
        const updatedEntry = await FemaleFertility.findByIdAndUpdate(
            req.params.id,
            { title, subTitle, description },
            { new: true }
        );
        if (!updatedEntry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json({ message: "Entry updated successfully", data: updatedEntry });
    } catch (error) {
        res.status(500).json({ message: "Failed to update entry", error });
    }
};

// Delete a FemaleFertility entry
exports.deleteEntry = async (req, res) => {
    try {
        const deletedEntry = await FemaleFertility.findByIdAndDelete(req.params.id);
        if (!deletedEntry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json({ message: "Entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete entry", error });
    }
};
