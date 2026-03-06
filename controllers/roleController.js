const Role = require("../models/Role");


// CREATE
exports.createRole = async (req, res) => {

    const role = new Role(req.body);
    await role.save();

    res.json(role);
};


// GET ALL
exports.getRoles = async (req, res) => {

    const roles = await Role.find({ deleted: false });

    res.json(roles);
};


// GET BY ID
exports.getRoleById = async (req, res) => {

    const role = await Role.findById(req.params.id);

    res.json(role);
};


// UPDATE
exports.updateRole = async (req, res) => {

    const role = await Role.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(role);
};


// SOFT DELETE
exports.deleteRole = async (req, res) => {

    await Role.findByIdAndUpdate(
        req.params.id,
        { deleted: true }
    );

    res.json({ message: "Role deleted (soft)" });
};