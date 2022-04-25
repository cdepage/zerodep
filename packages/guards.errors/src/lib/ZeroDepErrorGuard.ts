import { ZeroDepError } from '@zerodep/errors';

export class ZeroDepErrorGuard extends ZeroDepError {
  constructor(message = 'An invalid value has been provided', code = 400, source?: any) {
    super(message);
    this.code = code;
    this.source = source;

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
