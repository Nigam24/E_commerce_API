import mongoose  from "mongoose";

const cartSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "products", required: true },
  quantity: { type: Number},
   color: {type : String},
  size: { type: String },
  //price: { type: Number, required: true }
},
//totalPrice: { type: Number, required: true, default: 0 }
{timestamps: true});

const Cart = mongoose.models.cart || mongoose.model('cart', cartSchema);
// const Cart = mongoose.model("cart", cartSchema);

export default Cart;