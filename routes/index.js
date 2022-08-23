const accountMngmntRoute = require('./admin/account_management_routes');
const authRouter = require('./auth');
const userRouter = require('express').Router();

userRouter.use('/auth', authRouter) 
// userRouter.use('/learning')
// userRouter.use('/student')
userRouter.use('/admin', accountMngmntRoute)

module.exports = userRouter;