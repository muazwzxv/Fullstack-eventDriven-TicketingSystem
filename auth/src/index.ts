import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3000, () => {
  console.log("Listening to port 3000");
  console.log("Are you actually listening?");
});

app.get("/api/users/currentuser", (req, res) => {
  res.send("Hello there");
});
