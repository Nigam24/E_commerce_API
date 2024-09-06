import mongoose, { SchemaTypes } from "mongoose";
// import Product from "./Product";

const orderSchema = new mongoose.Schema({
  user: { type: SchemaTypes.ObjectId, ref: "user", required: true },
  product: { type: SchemaTypes.ObjectId, ref: "product", required: true },
  quantity: { type: Number },
  shippingAddress: { type: String},
  paymentMode: { type: String },
  discount: { type: Number},
  paymentStatus: { type: String, default: "unpaid" },
  orderStatus: { type: String, default: "pending" },
  totalPrice: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("order", orderSchema);

export default Order;