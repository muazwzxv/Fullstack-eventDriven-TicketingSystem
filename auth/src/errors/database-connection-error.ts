import { CustomError } from "./custom-error";

export class DatabaseConnecctionError extends CustomError {
  reason = "error connecting to database";
  status = 500;
  constructor() {
    super("error connecting to DB");

    Object.setPrototypeOf(this, DatabaseConnecctionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
