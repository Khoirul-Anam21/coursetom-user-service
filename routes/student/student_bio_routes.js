
const StudentController =  require("../../controllers/student");
const authUser = require('../../middlewares/auth_middleware');

const bioRouter = require('express').Router();
const studentController = new StudentController()

bioRouter.get('/bio', authUser, studentController.getBio);
// bioRouter.put('/bio', authUser, studentController.updateBio);

module.exports = bioRouter