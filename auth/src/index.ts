import express from "express";
import { json } from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { registerRouter } from "./routes/register";
import { loginRouter } from "./routes/login";
import { logoutRouter } from "./routes/logout";

const app = express();
app.use(json());

// register routes
app.use(currentUserRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(logoutRouter);

app.listen(3000, () => {
  console.log("Listening to port 3000");
  console.log("Are you actually listening?");
});
