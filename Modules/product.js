import express from 'express';
import {fetchProductDetail, createProduct, fetchAllProducts, getProducts} from '../controller/productController.js';
import multer from 'multer';


const storage = multer.memoryStorage();
const upload = multer({storage:storage})

const router = express.Router();


router.get('/productdetail', fetchProductDetail);

router.get('/getproduct',getProducts);


router.post('/createproduct',upload.single("file"), createProduct);

router.post('/allproducts', fetchAllProducts);

export default router;