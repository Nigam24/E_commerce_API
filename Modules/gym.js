import { Router } from "express";
import Gym from "../Models/Gym";
const router = Router();
router.post('/data',async(req,res)=>{
    const id = req.params.id;
    const {url,title,prize,rating}= req.body;
    const gym = new Gym({url,title,prize,rating});
    try{
        const savedGym = await gym.save();
        res.status(201).json(savedGym);
    }
    catch(error){
        res.status(400).json({msg:error.msg});
    }
})
export default router;