import { isNil } from '@zerodep/is.nil';

export function canIterate(value: any): boolean {
  // we do not want any kind of number or string to be iterable
  const type = typeof value;
  if (type === 'string' || isNil(value)) {
    return false;
  }

  return (
    typeof value[Symbol.iterator] === 'function' ||
    typeof value[Symbol.asyncIterator] === 'function'
  );
}
