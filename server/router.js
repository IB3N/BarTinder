'use strict';

const { Router } = require('express');
const router = Router();

// Controllers imports
const auth = require('./controllers/auth');
const likes = require('./controllers/likes');
const groups = require('./controllers/groups');
const members = require('./controllers/members');
const matches = require('./controllers/matches');

// Authorization
router.get('/register', auth.getAllUsers);
router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/user', auth.getUser);
// delete user

// Likes
router.get('/likes', likes.allLikes);
router.post('/likes', likes.choose); // When a user swipes right or left
router.post('/user/likes', likes.usersLikes);
router.post('/user/dislikes', likes.usersDislikes);
router.post('/user/likesAndDislikes', likes.usersLikesAndDislikes);

// Groups
router.get('/groups', groups.getGroups);
router.post('/group', groups.createGroup);
router.post('/groups', groups.getGroup);
// router.post('/groups', groups.getGroups);
router.post('/user/groups', members.usersGroups); // Get all groups of one user
// delete group

// Members
router.post('/addMember', members.createMember);
router.post('/members', members.allGroupMembers);
// delete member

// Matches
router.post('/matches', matches.getMatches);

module.exports = router;
