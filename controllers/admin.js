const { StudentBio, User } = require("../models");
const UserController = require("./user_base");
const { Op } = require("sequelize");
class AdminController extends UserController {
  constructor(params) {
    super("admin");
  }

  async getStudents(req, res, next) {
    try {
      const { name, status } = req.query;
      const students = await StudentBio.findAll({
        include: [
          {
            model: User,
            where: {
              name: {
                [Op.or]: [
                  { [Op.iLike]: `%${name ? name : ""}` },
                  { [Op.iLike]: `%${name ? name : ""}%` },
                  { [Op.iLike]: `${name ? name : ""}%` },
                ],
              },
            },
          },
        ],
        required: true,
      });
      res.json(students);
    } catch (error) {
      next(error);
    }
  }

  async updateBio(req, res, next) {}
}

module.exports = AdminController;
