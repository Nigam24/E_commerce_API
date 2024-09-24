import mongoose, { SchemaTypes } from "mongoose"; 
 
const orderSchema = new mongoose.Schema({ 
  items: [ 
    { 
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, 
      quantity: { type: Number, required: true }, 
      color:{type:String,required: true}, 
      size:{type:String,required: true}, 
      price: { type: Number, required: true }, 
    }, 
  ], 
  subtotal: { type: Number, required: true }, 
  discount: { type: Number }, 
  deliveryFee: { type: Number, required: true }, 
  total: { type: Number, required: true }, 
  userId:{type:String}, 
  placedAt: { type: Date, default: Date.now }, 
}); 
 const Order = mongoose.model("order", orderSchema); 
 
export default Order;