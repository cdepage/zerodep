import { ZeroDepErrorCategory, ZeroDepErrorSource } from '../types';
import { ZeroDepError } from '../ZeroDepError';

export class ZeroDepErrorFormat extends ZeroDepError {
  constructor(
    message = 'Cannot format value',
    category: ZeroDepErrorCategory = 'unknown',
    source: ZeroDepErrorSource = 'format',
    value: any = undefined
  ) {
    super(message, category, source, value);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
