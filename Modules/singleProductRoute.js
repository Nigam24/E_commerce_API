import Router from 'express';
import { getSingleproduct } from '../controller/singleproductController.js';

const singleProductRouter = Router();

singleProductRouter.route('/single').get(getSingleproduct);

export default singleProductRouter;