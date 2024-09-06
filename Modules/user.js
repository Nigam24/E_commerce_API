import { Router } from "express";
import { registerUserUsingCreate, updateUser } from "../controller/Usercontroller.js";
import { authenticateToken } from "../middlewares/authenticateToken.js";

const router = Router();
router.post("/register", registerUserUsingCreate);
router.post("/update", authenticateToken, updateUser);

    

export default router;

// router.get("/", (req, res) => {
//   res.status(200).send({ msg: "This is root user route" });
// });

// router.get("/getDetails", (req, res) => {
//   res.status(200).send({ msg: "This is root product route" });
// });





// const router = Router();

// router.get('/', (req, res) => {
//     res.status(200).send({ msg : 'This is root not user route' });
// })

// router.get('/getDetails', (req, res) => {
//     res.status(200).send({ msg : 'This is root product route' });
// })
    

// router.post('/register',async (req, res) => {

//     const id = req.params.id;
//     const { name, email, password } = req.body;
//     const user = new User({ name, email, password });
//     try {
//         const savedUser = await user.save();
//         res.status(201).json(savedUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// })

// export default router;