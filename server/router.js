'use strict';

const { Router } = require('express');
const router = Router();

// Controllers imports go here
const { login, register, getAllUsers } = require('./controllers/auth');

// Routes go here
router.get('/register', getAllUsers);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
