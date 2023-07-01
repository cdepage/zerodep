import { ZeroDepError } from '@zerodep/errors';
import { isInteger } from '@zerodep/is-integer';
import { toNumber } from '@zerodep/to-number';

const errMessage = `Cannot convert to integer`;

export const toInteger = (
  value: number | bigint | string | boolean | Date
): number => {
  const num = toNumber(value);
  if (isInteger(num)) {
    return num;
  }

  const int = Math.trunc(num);
  if (!Number.isNaN(int)) {
    return int;
  }

  throw new ZeroDepError(errMessage);
};
