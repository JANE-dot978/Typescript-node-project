"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
// In-memory data
let users = [
    { id: 1, name: "Jane" },
    { id: 2, name: "John" }
];
// GET users
const getUsers = (req, res) => {
    res.json(users);
};
exports.getUsers = getUsers;
// POST user
const createUser = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }
    const newUser = {
        id: users.length + 1,
        name
    };
    users.push(newUser);
    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
};
exports.createUser = createUser;
