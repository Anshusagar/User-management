const express = require('express');

const router = express.Router();

// Controller functions (replace with your actual controller logic)
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController.js');

// GET /users - Get all users
router.get('/', getAllUsers);

// GET /users/:id - Get user by ID
router.get('/:id', getUserById);

// POST /users - Create a new user
router.post('/', createUser);

// PUT /users/:id - Update user by ID
router.put('/:id', updateUser);

// DELETE /users/:id - Delete user by ID
router.delete('/:id', deleteUser);

module.exports = router;