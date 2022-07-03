export class DatabaseConnecctionError extends Error {
  reason = "error connecting to database";

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnecctionError.prototype);
  }
}
