import { Router } from "express";
import { registerUserUsingCreate, updateUser } from "../controller/Usercontroller.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = Router();
router.post("/register", registerUserUsingCreate);
router.post("/update", authenticateToken, updateUser);

    

export default router;
