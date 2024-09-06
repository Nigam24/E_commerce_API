import user from '../Modules/user.js'              
import product from '../Modules/product.js'
import order from'../Modules/order.js'
import auth from'../Modules/auth.js'
import productRoutes from '../Modules/product.js'
import { signupUser } from '../controller/signUpController.js'
export const configureRoutes = (app) =>{
    app.use('/products', productRoutes);
    app.use('/user', user);
    app.use('/order', order);
    app.use('/auth', auth);
    app.use('/api/products', productRoutes); 
    app.use('/signup', signupUser);
}