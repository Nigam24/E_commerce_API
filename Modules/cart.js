import {Router} from 'express';
import { addToCart, deletefromcart, fetchAllProducts, increaseQuantity }  from '../controller/cartController.js';
import {authenticateToken} from '../middlewares/authenticateToken.js'


let router = Router();

router
.route('/cart')
.post(authenticateToken,addToCart)
.put(authenticateToken,increaseQuantity)
.get(authenticateToken, fetchAllProducts)
.delete(authenticateToken,deletefromcart)

// router.post()

export default router;