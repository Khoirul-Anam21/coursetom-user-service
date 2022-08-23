'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentBio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentBio.belongsTo(models.User, { foreignKey: 'userId'})
    }
  }
  StudentBio.init({
    userId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    profilePict: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentBio',
  });
  return StudentBio;
};