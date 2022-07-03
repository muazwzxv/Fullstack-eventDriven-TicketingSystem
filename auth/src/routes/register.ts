import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnecctionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";

const router = express.Router();

router.post(
  "/api/users/register",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").trim().isLength({ min: 4, max: 20 }),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;
    console.log("creating a user ....");
    throw new DatabaseConnecctionError();
    res.send({});
  }
);

export { router as registerRouter };
