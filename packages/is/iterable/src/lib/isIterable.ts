import { isNil } from '@zerodep/is-nil';
import { isString } from '@zerodep/is-string';

export function isIterable(value: any): boolean {
  // we do not want to report strings as iterable (JavaScript says they are)
  // - this is a potential source of software defects / unexpected behaviours
  if (isString(value) || isNil(value)) {
    return false;
  }

  return (
    typeof value[Symbol.iterator] === 'function' ||
    typeof value[Symbol.asyncIterator] === 'function'
  );
}
