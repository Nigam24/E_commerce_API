import mongoose from "mongoose";
const GymSchema = new mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    prize:{type:Number,required:true},
    rating:{type:Number,required:true}
})
const Gym = mongoose.model('gym',GymSchema);
export default Gym;