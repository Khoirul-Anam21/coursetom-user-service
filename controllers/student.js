const UserController = require("./user_base");
const { User, StudentBio } = require("../models");

class StudentController extends UserController {
  constructor() {
    super('student');
  }

  async getBio(req, res, next) {
    try {
      const { id } = req.user;
      const student = await StudentBio.findOne({
        where: {
          userId: id,
        },
        include: [
          {
            model: User,
            attributes: ['name', 'email', 'role']
          }
        ]
      })
      if (!student) throw res.status(404).json({
        message: "data not found"
      })
      res.status(200).json({
        message: "success",
        data: student,
      })
    } catch (error) {
      next(error);
    }
  }


  async updateBio(req, res, next) {
    try {
      const { id } = req.user;
      const { phoneNumber, address, name, role } = req.body;
      
      const student = await StudentBio.findOne({
        where: {
          userId: id,
        },
        include: [
          {
            model: User,
            attributes: ['name', 'email', 'role']
          }
        ]
      })
      if (!student) throw res.status(404).json({
        message: "data not found"
      })


    } catch (error) {
      next(error);
    }
  }

  getOngoingCourses(req, res, next) {}

  getCompletedCourses(req, res, next) {}

  getStudentCourse(req, res, next) {}

  getAllCourse(req, res, next) {}

  getCourseByName(req, res, next) {}

  getCourseByChapter(req, res, next) {}


  updateCurrentProgress(req, res, next) {}

  purchaseCourse(req, res, next) {}
}

module.exports = StudentController;
