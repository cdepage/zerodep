import { ZeroDepError, ZeroDepErrorSource, ZeroDepErrorCategory } from '@zerodep/errors';

export class ZeroDepErrorTo extends ZeroDepError {
  constructor(
    message = 'Cannot convert value',
    category: ZeroDepErrorCategory = 'syntax',
    source: ZeroDepErrorSource = 'to',
    value: any = undefined
  ) {
    super(message, category, source, value);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
