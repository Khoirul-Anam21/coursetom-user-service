"use strict";

const bcryptjs = require("bcryptjs");
const { User, StudentBio, AdminBio } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "tes";
    const salt = bcryptjs.genSaltSync(10);
    return Promise.all([
      await queryInterface.bulkInsert("Users", [
        {
          email: "khairulanamstud@gmail.com",
          password: bcryptjs.hashSync(password, salt),
          name: "Khoirul Anam",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "hairulnam21@gmail.com",
          password: bcryptjs.hashSync(password, salt),
          name: "Moh Khoirul A",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      await queryInterface.bulkInsert("StudentBios", [
        {
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      await queryInterface.bulkInsert("AdminBios", [
        {
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.bulkDelete("Users", null, {
        truncate: true,
        restartIdentity: true,
      }),
      await queryInterface.bulkDelete("StudentBios", null, {
        truncate: true,
        restartIdentity: true,
      }),
      await queryInterface.bulkDelete("AdminBios", null, {
        truncate: true,
        restartIdentity: true,
      }),
    ]);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
