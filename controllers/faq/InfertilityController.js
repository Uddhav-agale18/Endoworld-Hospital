const Fertility = require('../../models/faq/Infertility');

// Create a new Fertility entry
exports.createEntry = async (req, res) => {
    try {
        const { title, subTitle, description } = req.body;
        const newEntry = new Fertility({ title, subTitle, description });
        await newEntry.save();
        res.status(201).json({ message: "Entry created successfully", data: newEntry });
    } catch (error) {
        res.status(500).json({ message: "Failed to create entry", error });
    }
};

// Get all Fertility entries
exports.getAllEntries = async (req, res) => {
    try {
        const entries = await Fertility.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch entries", error });
    }
};

// Get a single Fertility entry by ID
exports.getEntryById = async (req, res) => {
    try {
        const entry = await Fertility.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json(entry);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch entry", error });
    }
};

// Update a Fertility entry
exports.updateEntry = async (req, res) => {
    try {
        const { title, subTitle, description } = req.body;
        const updatedEntry = await Fertility.findByIdAndUpdate(
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

// Delete a Fertility entry
exports.deleteEntry = async (req, res) => {
    try {
        const deletedEntry = await Fertility.findByIdAndDelete(req.params.id);
        if (!deletedEntry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json({ message: "Entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete entry", error });
    }
};
