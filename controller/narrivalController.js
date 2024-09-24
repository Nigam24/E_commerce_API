// import Narrival from "../Models/Narrival.js";
// export const narrival = async(request,response)=>{
//     const id = request.params.id;
//     const{ url,title,prize,rating } = request.body;
//     const narrival = new Narrival({url,title,prize,rating});
//     try{
//         const savedNarrival = await narrival.save();
//         response.status(200).json(savedNarrival);
//     }
//     catch(error){
//         response.status(400).json({msg:error.msg});
//     }
// }