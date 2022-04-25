import { ZeroDepError, ZeroDepErrorSource, ZeroDepErrorTax } from '@zerodep/errors';

export class ZeroDepErrorGuard extends ZeroDepError {
  constructor(
    message = 'Value is invalid',
    tax: ZeroDepErrorTax = 'unknown',
    source: ZeroDepErrorSource = 'guard',
    value: any = undefined
  ) {
    super(message, tax, source, value);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
