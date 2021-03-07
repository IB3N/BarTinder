'use strict';

const { member, user } = require('../models');

exports.createMember = async (req, res) => {
  try {
    // const { email, groupId } = req.body;
    const foundUser = await user.findOne(
      { attributes: ['id'] },
      { where: { email: req.body.email } },
    );
    const newMember = await member.create({
      groupId: req.body.groupId,
      userId: foundUser[0].dataValues.id,
    });
    res.send(newMember).status(201);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

exports.usersGroups = async (req, res) => {
  try {
    // const { userId } = req.body;
    const groupIds = await member.findAll(
      { attributes: ['groupId'] },
      { where: { userId: req.body.userId } },
    );
    // let groups = [];
    // await groupIds.forEach(async ({ groupId }) => {
    //   const foundGroup = await group.findByPk(groupId, {
    //     attributes: ['id', 'name', 'date'],
    //   });
    //   groups.push(foundGroup.dataValues);
    //   console.log(foundGroup.dataValues);
    //   console.log(groups);
    // });
    res.send(groupIds).status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};

exports.allGroupMembers = async (req, res) => {
  try {
    // const { groupId } = req.body
    const members = await member.findAll({
      where: { groupId: req.body.groupId },
    });
    res.send(members).status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
