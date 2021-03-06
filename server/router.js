'use strict';

const { Router } = require('express');
const router = Router();

// Controllers imports go here
const { login, register, getAllUsers } = require('./controllers/auth');
const { getAllLikes, choose } = require('./controllers/main');

// Authorization
router.get('/register', getAllUsers);
router.post('/register', register);
router.post('/login', login);

// Main
router.get('/likes', getAllLikes);
router.post('/likes', choose);

module.exports = router;
