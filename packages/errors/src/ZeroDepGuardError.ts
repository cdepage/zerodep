import { ZeroDepError } from './ZeroDepError';

export class ZeroDepGuardError extends ZeroDepError {
  constructor(message = 'Guard Error') {
    super(message);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
