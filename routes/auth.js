const express = require("express");
const { StudentController, AdminController } = require("../controllers/index");

const authRouter = express.Router();
const studentController = new StudentController();
const adminController = new AdminController();

authRouter.post("/sign-up", studentController.auth().signUp);
authRouter.post("/sign-in", studentController.auth().signIn);

authRouter.post("/adm-sign-up", adminController.auth().signUp);
authRouter.post("/adm-sign-in", adminController.auth().signIn);

authRouter.post('/verif-email-student/:credential', studentController.auth().createAccount);
authRouter.post('/verif-email-admin/:credential', adminController.auth().createAccount);

module.exports = authRouter;
