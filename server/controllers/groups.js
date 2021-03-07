'use strict';

const { group } = require('../models');

exports.createGroup = async (req, res) => {
  try {
    const newGroup = await group.create(req.body);
    res.send(newGroup).status(201);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

exports.getGroup = async (req, res) => {
  try {
    const names = await group.findByPk(req.body.groupId);
    res.send(names).status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
