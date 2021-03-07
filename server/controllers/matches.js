'use strict';

const { member, like } = require('../models');

exports.getMatches = async (req, res) => {
  try {
    // Get members of a group
    // const { groupId } = req.body
    const members = await member.findAll({
      where: { groupId: req.body.groupId },
    });
    // Map array of id's
    console.log(members);
    // Get all likes where userId in group member ids
  } catch (error) {
    console.error(error);
    res.send(error).status(500);
  }
};
