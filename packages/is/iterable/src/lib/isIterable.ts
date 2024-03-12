import { isNil } from '@zerodep/is-nil';
import { isString } from '@zerodep/is-string';

export function isIterable(value: any): boolean {
  try {
    // we do not want to report strings as iterable (JavaScript says they are)
    // - this is a potential source of software defects / unexpected behaviours
    if (isString(value) || isNil(value)) {
      return false;
    }

    return (
      typeof value[Symbol.iterator] === 'function' ||
      typeof value[Symbol.asyncIterator] === 'function'
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
}
