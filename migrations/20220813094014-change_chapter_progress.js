'use strict';



module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.removeColumn('StudentProgresses', 'courseId', { transaction: t }),
          queryInterface.addColumn('StudentProgresses', 'courseInfo', {
              type: Sequelize.ARRAY(Sequelize.STRING), // requestnya JSON BOI
          }, { transaction: t })
      ])
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.removeColumn('StudentProgresses', 'courseInfo', { transaction: t }),
          queryInterface.addColumn('StudentProgresses', 'courseId', {
              type: Sequelize.INTEGER,
          }, { transaction: t })
      ])
  })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
