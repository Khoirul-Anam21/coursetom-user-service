import { Router } from "express";

const bioRouter = Router();

bioRouter.get('/bio');
bioRouter.put('/bio');

export default bioRouter;