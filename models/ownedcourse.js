'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OwnedCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OwnedCourse.init({
    studentBioId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    deadline: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OwnedCourse',
  });
  return OwnedCourse;
};