const authRouter = require('./auth');
const userRouter = require('express').Router();

userRouter.use('/auth', authRouter) 
// userRouter.use('/learning')
// userRouter.use('/student')

module.exports = userRouter;