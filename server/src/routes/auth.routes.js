const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/auth.controller');

authRoutes.post('/register', authController.register);
authRoutes.post('/login', authController.login);
authRoutes.get('/verify-token', authController.verifyToken);

module.exports = authRoutes;
