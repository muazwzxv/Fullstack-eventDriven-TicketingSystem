import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { validateRequestMiddleware } from "../middlewares/validate-request";
import { BadRequestError } from "../errors/bad-request";
import jwt from "jsonwebtoken";
import { Password } from "../util/password";

const router = express.Router();

router.post(
  "/api/users/login",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 4, max: 20 }),
  ],
  validateRequestMiddleware,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (!userFound) throw new BadRequestError("Bad request");

    const isMatch = await Password.compare(userFound.password, password);
    if (!isMatch) throw new BadRequestError("Bad request");

    const userJwt = jwt.sign(
      {
        id: userFound.id,
        email: userFound.email,
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(userFound);
  }
);

export { router as loginRouter };
