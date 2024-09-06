// import express from 'express';
import jwt from "jsonwebtoken";
import userModel from "../Models/User.js";

// const app = express();

// In-memory user store (In a real-world app, you'd use a database)

// SignUp endpoint
// app.post('/signup', async (request, response)
export const signupUser = async (request, response) => {
  const { name, email, password } = request.body;

  try {
    // Check if the user already exists
    const existingUser = await userModel.findOne({ email }).lean();

    if (existingUser) {
      return response
        .status(404)
        .json({ success: false, message: "User already exists" });
    }
    const newUser = { name, email, password };
    // users.push(newUser);

    let saveDetails = await userModel.create(newUser);

    // Generate a JWT token
    const token = jwt.sign({ userId: saveDetails._id }, "secretKey", {
      expiresIn: "30h",
    });

    // Respond with the token
    return response.status(201).json({success:true,  jwtToken: token, newUser });
  } catch (error) {
    // Handle any other errors
    return response.status(500).json({ success: false, message: error.message });
  }
};
