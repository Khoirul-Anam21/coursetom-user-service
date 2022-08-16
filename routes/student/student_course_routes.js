import { Router } from "express";
import { StudentController } from "../../controllers";

const authUser = require('../../middlewares/auth_middleware');

const learningRouter = Router();
const studentController  = new StudentController()

learningRouter.get('/my-courses', authUser, studentController.getStudentCourse);
learningRouter.get('/:course_name', authUser, studentController.getCourseByName);
learningRouter.get('/:courseName/:chapterNum', authUser, studentController.getCourseByChapter);
learningRouter.get('/ongoing-courses', authUser, studentController.getOngoingCourses);
learningRouter.get('/completed-courses', authUser, studentController.getCompletedCourses);
learningRouter.put('/update-progress', authUser, studentController.updateCurrentProgress);
learningRouter.post('/purchase-course', authUser, studentController.purchaseCourse);


export default learningRouter;