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
