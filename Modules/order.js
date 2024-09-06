import {Router} from "express";
import { createOrder,fetchUserOrders,fetchOrder} from "../controller/orderController.js"
 import { authenticateToken } from "../middlewares/authenticateToken.js";

const router =Router();
router.post("/create", createOrder);
router.post("/fetchuserorders", fetchUserOrders);
 router.post("/fetch",authenticateToken, fetchOrder);

export default router;