const UserController = require('./user_base')
class StudentController extends UserController {
    constructor(params) {
      super('admin');
    }
  }
  
  module.exports = StudentController