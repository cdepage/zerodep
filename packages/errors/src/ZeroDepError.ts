import { ZeroDepErrorSource, ZeroDepErrorCategory } from './types';

export class ZeroDepError extends Error {
  public category: ZeroDepErrorCategory;
  public source: ZeroDepErrorSource;
  public value: any;

  constructor(
    message = 'An unexpected error has occurred',
    category: ZeroDepErrorCategory = 'unknown',
    source: ZeroDepErrorSource = 'unknown',
    value: any = undefined
  ) {
    super(message);
    this.category = category;
    this.source = source;
    this.value = value;

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
