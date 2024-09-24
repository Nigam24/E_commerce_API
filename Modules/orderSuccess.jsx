import { Router } from "express"; 
import { createOrder,fetchOrder } from "../controllers/orderController.js"; 
import { authenticateToken } from "../middlewares/authenticateToken.js"; 
const router = Router(); 
router.post("/create",createOrder); 
router.post("/fetch",authenticateToken,fetchOrder); 

export default router; 