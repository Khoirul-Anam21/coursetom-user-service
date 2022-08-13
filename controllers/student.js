const UserController = require('./user_base')

class StudentController extends UserController {
  constructor(req, res, next) {
    super()
  }

}

module.exports = StudentController