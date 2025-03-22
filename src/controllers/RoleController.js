const Role = require('../models/RoleModel');

exports.createRole = async (req, res) => {
    try {
        const { name } = req.body;
        const newRole = new Role({ name });
        await newRole.save();
        res.status(201).json({ message: 'Role created successfully', role: newRole });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
