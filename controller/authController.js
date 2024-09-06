///////////// DYNMIC LOGIN Page///////////////

import jwt from "jsonwebtoken";
import { setUser } from "./service.js";
import User from "../Models/User.js";
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  let userDetails = await User.findOne({ email: email }).lean();
  if (userDetails) {
    const jwtToken = await jwt.sign({ userId: userDetails._id }, "secretKey", {
      expiresIn: "30h",
    });
    return res.status(400).json({ success: true,message: "user logged in successfully",jwtToken:jwtToken });
  }

  console.log(req.body);
  const user = await User.findOne({ email, password });

  if (!user) {
    res.status(201).json({ message: "User does not exists!" });

    // response is not defined
    console.log("user does not exist");
    return;
  }

  const token = setUser(user);
  res.cookie("uid", token).json({ "token:": token });
  console.log("token", token);
  //   return res.redirect("/");
};

// import jwt from "jsonwebtoken";
// import { secretKey } from "../constants/auth.js";

// export const signIn = async (request, response) => {
//   const { email, password } = request.body;
//   try {
//     console.log(email, password);

//     // Check email and password
//     if (email === "aaru@gmail.com" && password === "3456") {
//       // Generate JWT token
//       const token = jwt.sign({ email }, secretKey, {
//         expiresIn: "30h",
//       });

//       // Send token as response
//       response.status(200).json({ token });
//       console.log(token);
//     } else {
//       // Invalid credentials response
//       return response.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     // Handle any other errors
//     response.status(400).json({ message: error.message });
//   }
// };
