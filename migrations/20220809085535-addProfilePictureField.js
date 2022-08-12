"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("StudentBios", "progressId"),
      queryInterface.addColumn("AdminBios", "profilePict", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("StudentBios", "profilePict", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("StudentBios", "progressId", {
        type: Sequelize.STRING,
      }),
      queryInterface.removeColumn("AdminBios", "profilePict"),
      queryInterface.removeColumn("StudentBios", "profilePict"),
    ]);
  },
};
