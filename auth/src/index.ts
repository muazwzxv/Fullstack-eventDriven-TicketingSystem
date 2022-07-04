import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { currentUserRouter } from "./routes/current-user";
import { registerRouter } from "./routes/register";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

// register routes
app.use(currentUserRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(logoutRouter);

// throw custom error on routes that don't exist
app.all("*", async (req, res) => {
  throw new NotFoundError();
});

// register error handler
app.use(errorHandler);

const start = async () => {
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
