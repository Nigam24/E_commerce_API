import Product from "../Models/Product.js"
import Cart from "../Models/Cart.js"
import mongoose  from "mongoose";
import { CART_NOT_FOUND, INTERNAL_SERVER_ERROR, PRODUCT_ID } from "../constants/error.js";

export const addToCart = async (request, response) => {
  try {
    const { product_id, color, size, quantity } = request.body; 
    let user_id = request.userId;
    console.log("user_id", user_id);
    console.log("productId", product_id);

    let userdetails = await Cart.findOne({
        user_id: user_id,
        product_id: product_id
      }).lean();

    console.log("userdetails ", userdetails);
    if (userdetails) {
      let cartdetails = await Cart.updateOne(
        { user_id, product_id },
        { $inc: { quantity: quantity } }
        
      );
      console.log("cart details  ", cartdetails);
      return response
        .status(200)
        .json({ message: "cart details ", cartdetails });
    }

    console.log(request.body);
    console.log(user_id);

    if (!user_id || !product_id || !color || !quantity) {
      return response.status(400).json({ message: "All fields are required" });
    }
    let result = request.body;

    let obj = {
      ...result,
      user_id,
    };
    let savedetails = await Cart.create(obj);
    console.log(savedetails)
    return response.status(201).json({
      message:'added to cart',
      savedetails,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "internal server error",
    });
  }
};
export default addToCart;


export const fetchAllProducts = async(req,res)=>{
  console.log('fetchAllProducts started ');
  try {
    let userId = req.userId
    console.log(userId);
    
    // Fetch cart items for the given user
    const cartItems = await Cart.find({ user_id: userId }).lean();
    // console.log('Cart Items:', cartItems);

    // Extract product IDs from the cart items
    const productIds = cartItems.map(item => item.product_id);

    // Fetch products based on the product IDs
    const products = await Product.find({ _id: { $in: productIds } }).lean();
    console.log('Products:', products);

    // Create a mapping of product IDs to product details for quick lookup
    const productMap = new Map(products.map(product => [product._id.toString(), product]));

    const cartWithProducts = cartItems.map(cartItem => {
        const product = productMap.get(cartItem.product_id.toString());
        return {
            ...cartItem,
            ...product
        };
    });

    return res.status(200).json(cartWithProducts)
  }
  
  catch(error){
    console.log('Exception occured at fetchAllProducts ',error)
    return res.status(500).json(INTERNAL_SERVER_ERROR)
  }
}

export const increaseQuantity = async(req,res)=>{ 
 
  console.log('increaseQuantity started :'); 
  try{ 
 
    let userId = req.userId; 
    console.log(userId) 
    let {productId} = req.body; 
    console.log(productId); 
     
    if(!productId){ 
      return res.status(400).json(PRODUCT_ID); 
    } 
    let userDetails = await Cart.findOne({user_id:userId,product_id:productId}).lean(); 
 
    if(!userDetails){ 
      return res.status(400).json(CART_NOT_FOUND) 
    } 
 
    let cartDetails = await Cart.updateOne({user_id:userId,product_id:productId},{$inc:{quantity:1}}); 
 
    return res.status(200).json({message:'Increased successfully ',cartDetails}) 
  } 
  catch(error){ 
    console.log(`Exception occured at increaseQuantity`,error); 
    return res.status(500).json(INTERNAL_SERVER_ERROR) 
  } 
}



export const deletefromcart = async(req,res)=>{

  console.log('deletefromcart :');
  try {
    let userId = req.userId;
    console.log(userId)
    let {productId} = req.query;
    if(!productId){
      return res.status(400).json(PRODUCT_ID);
    }

    let userDetails = await Cart.findOne({user_id:userId,product_id:productId}).lean()
    if(!userDetails){
      return res.status(400).json({message:"details not found"})
    }
    let cartDetails = await Cart.deleteOne({user_id:userId,product_id:productId}).lean()
    return res.status(200).json({message:'Product Deleted from cart',cartDetails})
  } catch (error) {
    return res.status(500).json(INTERNAL_SERVER_ERROR)
  }
}