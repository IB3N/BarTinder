'use strict';

const { group, user } = require('../models');

exports.createGroup = async (req, res) => {
  try {
    const newGroup = await group.create(req.body);
    res.send(newGroup).status(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

exports.getGroup = async (req, res) => {
  try {
    const names = await group.findByPk(req.body.groupId);
    res.send(names).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

exports.getGroups = async (req, res) => {
  try {
    const foundUser = await user.findByPk(req.body.userId);
    const usersGroups = foundUser.getGroups({ order: [['groupId', 'DESC']] });
    res.status(200).send(usersGroups);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
