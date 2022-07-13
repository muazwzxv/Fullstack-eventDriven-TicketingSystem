import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequestMiddleware } from "../middlewares/validate-request";

const router = express.Router();

router.post(
  "/api/users/login",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 4, max: 20 }),
  ],
  validateRequestMiddleware,
  async (req: Request, res: Response) => {}
);

export { router as loginRouter };
