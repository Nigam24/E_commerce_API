import mongoose from "mongoose";
const PartySchema = new mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    prize:{type:Number,required:true},
    rating:{type:Number,required:true}
})
const Party = mongoose.model('party',PartySchema);
export default Party;