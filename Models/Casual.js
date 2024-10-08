import mongoose from "mongoose";
const CasualSchema = new mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    prize:{type:Number,required:true},
    rating:{type:Number,required:true}
})
const Casual = mongoose.model('casual',CasualSchema);
export default Casual;