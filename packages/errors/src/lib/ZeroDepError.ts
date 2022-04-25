import { ZeroDepErrorSource, ZeroDepErrorTax } from './types';

export class ZeroDepError extends Error {
  public tax: ZeroDepErrorTax;
  public source: ZeroDepErrorSource;
  public value: any;

  constructor(
    message = 'An unexpected error has occurred',
    tax: ZeroDepErrorTax = 'unknown',
    source: ZeroDepErrorSource = 'unknown',
    value: any = undefined
  ) {
    super(message);
    this.tax = tax;
    this.source = source;
    this.value = value;

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
