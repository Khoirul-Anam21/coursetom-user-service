import { Router } from "express";
import { StudentController } from "../../controllers";

const bioRouter = Router();
const studentController = new StudentController()

bioRouter.get('/bio', studentController.getBio);
bioRouter.put('/bio', studentController.updateBio);

export default bioRouter;