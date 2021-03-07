'use strict';

const { member, like } = require('../models');

exports.getMatches = async (req, res) => {
  try {
    // Get members of a group
    const { groupId } = req.body;
    const members = await member.findAll({
      where: { groupId },
    });
    // Map array of id's
    const memberIds = members.map((member) => member.dataValues.userId);
    // Get all likes where userId in group member ids
    const matches = await like.findAll({
      where: {
        userId: memberIds,
      },
    });
    res.send(matches).status(200);
  } catch (error) {
    console.error(error);
    res.send(error).status(500);
  }
};
