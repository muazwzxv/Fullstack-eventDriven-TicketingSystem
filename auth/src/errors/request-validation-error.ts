import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errros: ValidationError[]) {
    super();

    // Only for typescript when extending built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
