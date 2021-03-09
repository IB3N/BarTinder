'use strict';

const { Router } = require('express');
const router = Router();

// Controllers imports
const { login, register, getAllUsers, getUser } = require('./controllers/auth');
const {
  allLikes,
  choose,
  usersLikes,
  usersDislikes,
  usersLikesAndDislikes,
} = require('./controllers/likes');
const { createGroup, getGroup } = require('./controllers/groups');
const {
  createMember,
  usersGroups,
  allGroupMembers,
} = require('./controllers/members');
const { getMatches } = require('./controllers/matches');

// Authorization
router.get('/register', getAllUsers);
router.post('/register', register);
router.post('/login', login);
router.post('/user', getUser);
// delete user

// Likes
router.get('/likes', allLikes);
router.post('/likes', choose); // When a user swipes right or left
router.post('/user/likes', usersLikes);
router.post('/user/dislikes', usersDislikes);
router.post('/user/likesAndDislikes', usersLikesAndDislikes);

// Groups
router.post('/group', createGroup);
router.post('/groups', getGroup);
router.post('/user/groups', usersGroups); // Get all groups of one user
// delete group

// Members
router.post('/addMember', createMember);
router.post('/members', allGroupMembers);
// delete member

// Matches
router.post('/matches', getMatches);
// SELECT likes.drinkId, COUNT(likes.drinkId) FROM likes
// WHERE likes.userId IN (
// SELECT members.userId FROM members
// WHERE members.groupId = 1)
// AND likes.like = TRUE;

module.exports = router;
