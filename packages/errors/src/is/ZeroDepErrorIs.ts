import { ZeroDepErrorCategory, ZeroDepErrorSource } from '../types';
import { ZeroDepError } from '../ZeroDepError';

export class ZeroDepErrorIs extends ZeroDepError {
  constructor(
    message = 'Cannot check value',
    category: ZeroDepErrorCategory = 'type',
    source: ZeroDepErrorSource = 'is',
    value: any = undefined
  ) {
    super(message, category, source, value);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
