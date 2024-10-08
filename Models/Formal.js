import mongoose from "mongoose";
const FormalSchema = new mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    prize:{type:Number,required:true},
    rating:{type:Number,required:true}
})
const Formal = mongoose.model('formal',FormalSchema);
export default Formal;