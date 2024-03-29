import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { currentUserRouter } from "./routes/current-user";
import { registerRouter } from "./routes/register";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { errorHandlerMiddleware } from "./middlewares/error-handler-middleware";
import { NotFoundError } from "./errors/not-found-error";
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
app.use(errorHandlerMiddleware);

export { app };
