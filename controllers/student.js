const UserController = require("./user_base");

class StudentController extends UserController {
  constructor() {
    super();
  }

  getBio(req, res, next) {
    try {
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

  updateBio(req, res, next) {}

  updateCurrentProgress(req, res, next) {}

  purchaseCourse(req, res, next) {}
}

module.exports = StudentController;
