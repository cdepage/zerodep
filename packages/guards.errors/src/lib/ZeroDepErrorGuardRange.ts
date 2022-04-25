import { ZeroDepErrorSource, ZeroDepErrorTax } from '@zerodep/errors';
import { ZeroDepErrorGuard } from './ZeroDepErrorGuard';

export class ZeroDepErrorGuardRange extends ZeroDepErrorGuard {
  constructor(
    message = 'Value is out-of-range',
    tax: ZeroDepErrorTax = 'range',
    source: ZeroDepErrorSource = 'guard',
    value: any = undefined
  ) {
    super(message, tax, source, value);

    // ensure the name matches the class
    this.name = this.constructor.name;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
  }
}
