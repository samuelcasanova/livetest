import { HttpStatusCode } from './codes';

export class BaseError extends Error {
  public readonly httpCode: HttpStatusCode;
  constructor(httpCode: HttpStatusCode, description: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.httpCode = httpCode;
    Error.captureStackTrace(this);
  }
}
