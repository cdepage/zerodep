import { isNil } from '@zerodep/is-nil';
import { isString } from '@zerodep/is-string';

export function isIterable(value: any): boolean {
  // Early return for null or undefined values
  if (isNil(value)) {
    return false;
  }

  // Strings are not considered iterables in this context
  if (isString(value)) {
    return false;
  }

  try {
    // Check for both sync and async iterators
    const hasSyncIterator = typeof value[Symbol.iterator] === 'function';
    const hasAsyncIterator = typeof value[Symbol.asyncIterator] === 'function';

    return hasSyncIterator || hasAsyncIterator;
  } catch {
    // If any error occurs during the check, consider it non-iterable
    return false;
  }
}
