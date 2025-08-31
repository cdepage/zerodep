import { ZeroDepError } from './ZeroDepError';

export class ZeroDepTypeError extends ZeroDepError {
  constructor(message = 'Invalid Type') {
    super(message);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
