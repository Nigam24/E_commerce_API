import { Router } from "express";
import Casual from "../Models/Casual";
const router = Router();
router.post('/data',async(req,res)=>{
    const id = req.params.id;
    const {url,title,prize,rating}= req.body;
    const casual = new Casual({url,title,prize,rating});
    try{
        const savedCasual = await casual.save();
        res.status(201).json(savedCasual);
    }
    catch(error){
        res.status(400).json({msg:error.msg});
    }
})
export default router;