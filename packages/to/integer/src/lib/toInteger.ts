import { ZeroDepError } from '@zerodep/errors';
import { isBigInt } from '@zerodep/is-bigint';
import { isBoolean } from '@zerodep/is-boolean';
import { isDate } from '@zerodep/is-date';
import { isInteger } from '@zerodep/is-integer';
import { isNumber } from '@zerodep/is-number';
import { isString } from '@zerodep/is-string';
import { numberFromLocaleString } from '@zerodep/to-number';

const errMessage = `Cannot convert to integer`;

export const toInteger = (
  value: number | bigint | string | boolean | Date
): number => {
  // easy path
  if (isInteger(value)) {
    return value as number;
  }

  // fail fast
  if (
    !isNumber(value) &&
    !isBigInt(value) &&
    !isString(value) &&
    !isBoolean(value) &&
    !isDate(value)
  ) {
    throw new ZeroDepError(errMessage);
  }

  try {
    const int = Math.trunc(Number(value));
    if (!Number.isNaN(int)) {
      return int;
    }

    throw new Error();
  } catch {
    // we can brute-force attempt to convert a string
    if (isString(value)) {
      const possibleNumber = numberFromLocaleString(value);
      if (possibleNumber !== null) {
        return toInteger(possibleNumber);
      }
    }

    const error = new ZeroDepError(errMessage);
    error.value = value;
    throw error;
  }
};
