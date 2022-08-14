const authRouter = require("express");
const { StudentController, AdminController } = require("../controllers/index");

const authRouter = Router();
const studentController = new StudentController();
const adminController = new AdminController();

authRouter.post("/sign-up", studentController.auth().signUp);
authRouter.post("/sign-in", studentController.auth().signIn);

authRouter.post("/adm-sign-up", adminController.auth().signUp);
authRouter.post("/adm-sign-in", adminController.auth().signIn);

export default authRouter;
