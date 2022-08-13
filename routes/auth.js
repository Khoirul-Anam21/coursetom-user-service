const authRouter = require("express");
const { StudentController, AdminController } = require("../controllers/index");

const authRouter = Router();
const studentController = new StudentController();
const adminController = new AdminController();

authRouter.post("/sign-up", studentController.auth().signUp(req, res, next));
authRouter.post("/sign-in", studentController.auth().signIn(req, res, next));

authRouter.post("/adm-sign-up", adminController.auth().signUp(req, res, next));
authRouter.post("/adm-sign-in", adminController.auth().signIn(req, res, next));

export default authRouter;
