'use strict';

const { models } = require('../models');
const { like } = models;

exports.getMatches = async (req, res) => {
  try {
    const { memberIds } = req.body;
    const matches = await like.count({
      where: {
        userId: memberIds,
        like: true,
      },
      col: 'drinkId',
      group: ['drinkId'],
    });
    res.send(matches).status(200);
  } catch (error) {
    console.error(error);
    res.send(error).status(500);
  }
};
