import { Request, Response, NextFunction } from "express";
import { UnAuthorizedErrors } from "../errors/unauthorized-error";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) throw new UnAuthorizedErrors();

  next();
};
