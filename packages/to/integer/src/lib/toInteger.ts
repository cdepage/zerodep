import { isInteger } from '@zerodep/is-integer';
import { toNumber } from '@zerodep/to-number';

export const toInteger = (
  value: number | bigint | string | boolean | Date
): number => {
  const num = toNumber(value);
  if (isInteger(num)) {
    return num;
  }

  return Math.trunc(num);
};
