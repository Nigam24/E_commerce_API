import { Router } from "express";
import Formal from "../Models/Formal";
const router = Router();
router.post('/data',async(req,res)=>{
    const id = req.params.id;
    const {url,title,prize,rating}= req.body;
    const formal = new Formal({url,title,prize,rating});
    try{
        const savedFormal = await formal.save();
        res.status(201).json(savedFormal);
    }
    catch(error){
        res.status(400).json({msg:error.msg});
    }
})
export default router;