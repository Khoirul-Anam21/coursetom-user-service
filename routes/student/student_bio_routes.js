import { Router } from "express";
import { StudentController } from "../../controllers";
const authUser = require('../../middlewares/auth_middleware');

const bioRouter = Router();
const studentController = new StudentController()

bioRouter.get('/bio', authUser,  studentController.getBio);
bioRouter.put('/bio', authUser, studentController.updateBio);

export default bioRouter;