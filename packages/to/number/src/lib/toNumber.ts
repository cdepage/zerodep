import { ZeroDepError } from '@zerodep/errors';
import { isBigInt } from '@zerodep/is-bigint';
import { isBoolean } from '@zerodep/is-boolean';
import { isDate } from '@zerodep/is-date';
import { isNumber } from '@zerodep/is-number';
import { isString } from '@zerodep/is-string';

// brute force attempt to make a string make sense as a number
const numberFromLocaleString = (value: unknown): number | null => {
  const cleanedValue = String(value)
    .toLowerCase()
    .replace(/[^\d,.+e-]/g, '');
  if (cleanedValue.length === 0) {
    return null;
  }

  const try1 = Number(cleanedValue);
  if (isNumber(try1)) {
    return try1;
  }

  const qtyNumbers = (cleanedValue.match(/\d/g) || []).length;
  const qtyCommas = (cleanedValue.match(/,/g) || []).length;
  const qtyPeriods = (cleanedValue.match(/\./g) || []).length;

  // if there are no numbers, commas or decimal points, this isn't a number we can parse
  if (qtyNumbers === 0 || (!qtyCommas && !qtyPeriods)) {
    return null;
  }

  // there can be multiple thousands-separators, but only one decimal separator
  if (qtyCommas > 1) {
    const possibleNumber2 = cleanedValue.replace(/,/g, '');
    const try2 = Number(possibleNumber2);
    if (isNumber(try2)) {
      return try2;
    }
  }
  if (qtyPeriods > 1) {
    const possibleNumber3 = cleanedValue.replace(/\./g, '').replace(',', '.');
    const try3 = Number(possibleNumber3);
    if (isNumber(try3)) {
      return try3;
    }
  }

  // nope, can't figure out what the number is, if it even is a number
  return null;
};

const errMessage = `Cannot convert to number`;

export const toNumber = (
  value: number | bigint | string | boolean | Date
): number => {
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
    // try the built-in method first
    const number = Number(value);

    // ensure we don't have NaN and infinite numbers
    if (isNumber(number)) {
      return number;
    }

    throw Error();
  } catch {
    // we can brute-force attempt to convert a string
    if (isString(value)) {
      const possibleNumber = numberFromLocaleString(value);
      if (possibleNumber !== null) {
        return possibleNumber;
      }
    }

    const error = new ZeroDepError(errMessage);
    error.value = value;
    throw error;
  }
};
