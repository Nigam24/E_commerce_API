import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true,
        validate:{
            validator: (value) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            }
        }
    }, 
    password: { type: String, required: true },
    phone: { type: Number },
    isAdmin: { type: Boolean, default: false }  
})

 const userModel =new mongoose.model('user', userSchema);

export default userModel
