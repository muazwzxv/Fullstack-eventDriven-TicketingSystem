import { CustomError } from "./custom-error";

export class UnAuthorizedErrors extends CustomError {
  status = 401;
  constructor() {
    super("Not Authorized");

    Object.setPrototypeOf(this, UnAuthorizedErrors.prototype);
  }

  serializeErrors() {
    return [{ message: "Not Authorized" }];
  }
}
