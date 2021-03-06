'use strict';

const { Router } = require('express');
const router = Router();

// Controllers imports go here
const { login, register, getAllUsers } = require('./controllers/auth');
const {
  allLikes,
  choose,
  usersLikes,
  usersDislikes,
} = require('./controllers/likes');
const { createGroup } = require('./controllers/groups');
const {
  createMember,
  usersGroups,
  allGroupMembers,
} = require('./controllers/members');

// Authorization
router.get('/register', getAllUsers);
router.post('/register', register);
router.post('/login', login);
// delete user

// Likes
router.get('/likes', allLikes);
router.post('/likes', choose); // When a user swipes right or left
router.post('/user/likes', usersLikes);
router.post('/user/dislikes', usersDislikes);

// Groups
router.post('/group', createGroup);
router.post('/user/groups', usersGroups); // Get all groups of one user
// delete group

// Members
router.post('/addMember', createMember);
router.post('/members', allGroupMembers);
// delete member

module.exports = router;
