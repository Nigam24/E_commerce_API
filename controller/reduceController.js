import { INTERNAL_SERVER_ERROR ,PRODUCT_ID,CART_NOT_FOUND} from "../constants/error.js";

import Cart from "../Models/Cart.js";
export const reduceQuantity = async(req,res)=>{

    console.log('reduceQuantity started :');
    try{
      let userId = req.userId;
      console.log(userId)
      let {productId} = req.query;
      if(!productId){
        return res.status(400).json(PRODUCT_ID);
      }
      let userDetails = await Cart.findOne({user_id:userId,product_id:productId}).lean();
  
      if(!userDetails){
        return res.status(400).json(CART_NOT_FOUND)
      }
  
      if(userDetails.quantity===1){
        let cartDetails = await Cart.deleteOne({user_id:userId,product_id:productId}).lean()
        return res.status(200).json({message:'Product Deleted from cart',cartDetails})
      }
  
      let cartDetails = await Cart.updateOne({user_id:userId,product_id:productId},{$inc:{quantity:-1}});
  
      return res.status(200).json({message:'Decreased successfully ',cartDetails})
    }
    catch(error){
      console.log(`Exception occured at reduceQuantity`,error);
      return res.status(500).json(INTERNAL_SERVER_ERROR)
    }
  }