import express from "express";
import { json } from "body-parser";
import "express-async-errors";
import { currentUserRouter } from "./routes/current-user";
import { registerRouter } from "./routes/register";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.use(json());

// register routes
app.use(currentUserRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(logoutRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

// register error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening to port 3000");
  console.log("Are you actually listening?");
});
