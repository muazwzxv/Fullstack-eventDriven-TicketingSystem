import express from "express";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middlewares/auth-middleware";
import { currentUserMiddleware } from "../middlewares/currentuser-middleware";

const router = express.Router();

router.get(
  "/api/users/me",
  currentUserMiddleware,
  authMiddleware,
  (req, res) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
