'use strict';

const { models } = require('../models');
const { user, like } = models;

exports.getAllUsers = async (req, res) => {
  try {
    const all = await user.findAll({ attributes: { exclude: ['password'] } });
    res.send(all).status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

exports.register = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.send(newUser).status(201);
  } catch (error) {
    console.error(error);
    res.send(error).status(500);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await user.findOne({
      where: {
        username,
        password,
      },
      include: [{ model: like }],
    });
    if (!userExists) throw new Error('Invalid login credentials');
    else res.send(userExists).status(200);
  } catch (error) {
    console.error(error);
    error.message === 'Invalid login credentials'
      ? res.send(error).status(401)
      : res.send(error).status(500);
  }
};

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const fetchedUser = await user.findByPk(userId);
    res.send(fetchedUser).status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
