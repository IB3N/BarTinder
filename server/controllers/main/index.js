'use strict';

const { like } = require('../../models');

exports.getAllLikes = async (req, res) => {
  try {
    const all = await like.findAll();
    res.send(all).status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

exports.choose = async (req, res) => {
  try {
    const all = await like.create(req.body);
    res.send(all).status(201);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
