import { INTERNAL_SERVER_ERROR } from "../constants/error.js";
import Product from "../Models/Product.js";
export const getSingleproduct = async (req, res) => {

  console.log('getSingleproduct controller starts ');

  try{
    let {productId} = req.query;
    if(!productId){
    return res.status(400).json({success:false});
    }

    let productDetails = await Product.findById({_id:productId}).lean();

    if(!productDetails){
      return res.status(400).json({message:'product not found '});
    }

    return res.status(200).json(productDetails);
  }catch(error){
    console.log('Exception occured at getSingleProduct ',error);
    return res.status(500).json(INTERNAL_SERVER_ERROR);
  }

}
