const sequelize = require("sequelize");
const { User, StudentBio, AdminBio, Sequelize } = require("../models");

const addUser = async (user) => {
  // TODO: Use Sequelize Transaction
  const createdUser = await User.create({
    ...user,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  if (!user.role === "student" || !user.role === "admin") {
    throw {
      status: 400,
      message: "invalid input",
    };
  }
  if (user.role === "student") {
    await StudentBio.create({
      userId: createdUser.id,
    });
    return {
      status: 201,
      message: `User ${createdUser.name} succesfully created`,
    };
  }
  await AdminBio.create({
    userId: createdUser.id,
  });
  return {
    status: 201,
    message: `User ${createdUser.name} succesfully created`,
  };
};

module.exports = addUser;
