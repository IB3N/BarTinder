'use strict';
const { Op } = require('sequelize');

const { like } = require('../models');

exports.allLikes = async (req, res) => {
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

exports.usersLikes = async (req, res) => {
  try {
    const likes = await like.findAll({
      where: {
        userId: req.body.id,
        like: true,
      },
    });
    res.send(likes).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

exports.usersDislikes = async (req, res) => {
  try {
    const dislikes = await like.findAll({
      where: {
        userId: req.body.id,
        like: false,
      },
    });
    res.send(dislikes).status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};
