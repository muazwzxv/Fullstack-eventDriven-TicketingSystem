import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  // Ensure JWT_KEY env is defined
  if (!process.env.JWT_KEY) throw new Error("Jwt must be defined");

  try {
    await mongoose.connect("mongodb://auth-mongo-clusterip-srv:27017/auth");
  } catch (err) {
    console.log(err);
  }

  console.log("Connected to mongodb");

  app.listen(3000, () => {
    console.log("Listening to port 3000");
    console.log("Are you actually listening?");
  });
};

start();
