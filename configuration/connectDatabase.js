import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/ecom", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB!!!!!");
    })
    .catch((error) => {
      console.error("Connection error", error);
    });
};