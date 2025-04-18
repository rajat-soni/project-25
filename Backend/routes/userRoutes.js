const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define route for creating a user
router.post('/user', userController.createUser);

module.exports = router;
