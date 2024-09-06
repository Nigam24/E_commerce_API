import { Router } from "express";
import { signIn } from "../controller/authController.js";

const router = Router();

//router.post('/login')
router.post('/login', signIn)

export default router;