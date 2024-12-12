const express = require('express');
const { signup, login, getProfile, updateProfileById  } = require('../Controllers/UserController');
const authMiddleware = require('../Middleware/authmiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile/:id', updateProfileById);

module.exports = router;
