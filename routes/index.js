const accountMngmntRoute = require('./admin/account_management_routes');
const authRouter = require('./auth');
const bioRouter = require('./student/student_bio_routes');
const userRouter = require('express').Router();

userRouter.use('/auth', authRouter) 
// userRouter.use('/learning')
userRouter.use('/student', bioRouter)
userRouter.use('/admin', accountMngmntRoute)

module.exports = userRouter;