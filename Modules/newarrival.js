// import { Router } from "express";
// import Narrival from "../Models/Narrival";
// const router = Router();
// router.post('/data',async(req,res)=>{
//     const id = req.params.id;
//     const {url,title,prize,rating}= req.body;
//     const narrival = new Narrival({url,title,prize,rating});
//     try{
//         const savedNarrival = await narrival.save();
//         res.status(201).json(savedNarrival);
//     }
//     catch(error){
//         res.status(400).json({msg:error.msg});
//     }
// })
// export default router;