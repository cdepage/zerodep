import { ZeroDepError, ZeroDepErrorSource, ZeroDepErrorTax } from '@zerodep/errors';

export class ZeroDepErrorTo extends ZeroDepError {
  constructor(
    message = 'Cannot convert value',
    tax: ZeroDepErrorTax = 'syntax',
    source: ZeroDepErrorSource = 'to',
    value: any = undefined
  ) {
    super(message, tax, source, value);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
