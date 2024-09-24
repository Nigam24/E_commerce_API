import { Router } from "express";
import { signupUser } from "../controller/signUpController";

const router = Router();

//router.post('/login')
router.post("/Signup", signupUser);

export default router;
