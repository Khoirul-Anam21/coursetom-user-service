import { Router } from "express";
import { StudentController } from "../../controllers";

const learningRouter = Router();
const studentController  = new StudentController()

learningRouter.get('/my-courses', studentController.getStudentCourse);
learningRouter.get('/:course_name', studentController.getCourseByName);
learningRouter.get('/:courseName/:chapterNum', studentController.getCourseByChapter);
learningRouter.get('/ongoing-courses', studentController.getOngoingCourses);
learningRouter.get('/completed-courses', studentController.getCompletedCourses);
learningRouter.put('/update-progress', studentController.updateCurrentProgress);
learningRouter.post('/purchase-course', studentController.purchaseCourse);


export default learningRouter;