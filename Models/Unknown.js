import mongoose from "mongoose";
const unknownSchema = new mongoose.Schema({
    name: { type: String, required: true,unique:true },
    email: { type: String, required: true, unique: true}, 
    password: { type: String, required: true },
    phone: { type: Number },
    isAdmin: { type: Boolean, default: false }
})
const Unknown = mongoose.model('unknown', unknownSchema);
export default Unknown