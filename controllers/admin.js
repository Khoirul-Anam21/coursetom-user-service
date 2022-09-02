const { StudentBio, User, AdminBio } = require("../models");
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

  async updateBio(req, res, next) {
    try {
      const { name, phoneNumber, position, address } = req.body;
      // const id  = 1; //tes
      const { id } = req.user 
      if (name) {
        await User.update({ name }, { where: { id } });
      }
      if (phoneNumber || position || address ) {
        await AdminBio.update(
          { phoneNumber, position, address },
          {
            where: {
              userId: id,
            },
          }
        );
      }
      return res.json({
        message: 'Succesfully updated biodata'
      })
    } catch (error) {
      next(error);
    }
  }

}

module.exports = AdminController;
