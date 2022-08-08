import { Router } from "express";

const userRouter = Router();

userRouter.use('/auth')
userRouter.use('/learning')
userRouter.use('/student')

export default userRouter;