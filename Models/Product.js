import {Schema,model} from "mongoose";
const product= new Schema({
    image:{
        fileName:String,
        fileType:String,
        fileContent:String,},
    title:String,
    price:String,
    rating:String,
    category:String,
    description:String,
    discount:String,

})

const productSchema = new Schema(
    {
        Topselling:{
            type:[product],
            default:[]
        },
        newArrivals:{
            type:[product],
            default:[]
        }
    }
)


const Product = model('Product' , productSchema );

export default Product;