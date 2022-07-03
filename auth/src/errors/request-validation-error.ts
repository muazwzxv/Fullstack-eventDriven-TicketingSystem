import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  status = 400;
  constructor(public errors: ValidationError[]) {
    super("request validation error");

    // Only for typescript when extending built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    const formatted = this.errors.map((error) => {
      return {
        message: error.msg,
        field: error.param,
      };
    });
    return formatted;
  }
}
