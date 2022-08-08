import { Router } from "express";

const learningRouter = Router();

learningRouter.get('/my-courses');
learningRouter.get('/:course_name');
learningRouter.get('/:courseName/:chapterNum');
learningRouter.get('/ongoing-courses');
learningRouter.get('/completed-courses');
learningRouter.put('/update-progress');
learningRouter.post('/purchase-course');


export default learningRouter;