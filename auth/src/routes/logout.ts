import express from "express";

const router = express.Router();

router.post("/api/usrs/logout", (req, res) => {
  res.send("Hello ther");
});

export { router as logoutRouter };
