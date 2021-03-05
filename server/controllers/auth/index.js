'use strict';

const { user } = require('../../models');

exports.getAllUsers = async (req, res) => {
  try {
    const all = await user.findAll();
    res.send(all).status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

exports.register = async (req, res) => {
  console.log('register reached');
  try {
    const newUser = await user.create(req.body);
    res.send(newUser).status(201);
  } catch (error) {
    console.error(error);
    res.send(error).status(500);
  }
};

exports.login = async (req, res) => {
  console.log('login reached');
  const { username, password } = req.body;
  try {
    const userExists = await user.findAll({
      where: {
        username,
        password,
      },
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
