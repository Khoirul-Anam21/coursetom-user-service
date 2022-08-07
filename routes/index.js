import { Router } from "express";

const router = Router();

router.get('/user', (req, res, next)=>{
    res.send({name: 'Anam'})
});


export default router;