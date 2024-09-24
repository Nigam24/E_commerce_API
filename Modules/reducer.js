import {Router} from 'express';
import { reduceQuantity } from '../controller/reduceController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';
let router=Router();
router
.route('/')
.put(authenticateToken,reduceQuantity);
export default router