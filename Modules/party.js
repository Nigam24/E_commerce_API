import { Router } from "express";
import Party from "../Models/Party";
const router = Router();
router.post('/data',async(req,res)=>{
    const id = req.params.id;
    const {url,title,prize,rating}= req.body;
    const party = new Party({url,title,prize,rating});
    try{
        const savedParty = await party.save();
        res.status(201).json(savedParty);
    }
    catch(error){
        res.status(400).json({msg:error.msg});
    }
})
export default router;