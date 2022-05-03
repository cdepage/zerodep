import { ZeroDepErrorCategory, ZeroDepErrorSource } from '../types';
import { ZeroDepError } from '../ZeroDepError';

export class ZeroDepErrorGuard extends ZeroDepError {
  constructor(
    message = 'Value is invalid',
    category: ZeroDepErrorCategory = 'unknown',
    source: ZeroDepErrorSource = 'guard',
    value: any = undefined
  ) {
    super(message, category, source, value);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
