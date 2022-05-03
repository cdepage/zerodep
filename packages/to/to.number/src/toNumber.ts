import { isNil } from '@zerodep/is.nil';
import { isNumber } from '@zerodep/is.number';
import { isString } from '@zerodep/is.string';
import { ZeroDepErrorTo } from '@zerodep/errors';

// used if we need to figure out what characters are used for grouping or fractional separation
// TODO: disabled as there is no need for this now
// const currentLocale = localeSettings.getOne('locale') as string;
// const localeDecimalChar = Intl.NumberFormat(currentLocale, { useGrouping: true })
//   .format(1000.1)
//   .charAt(5);

// brute force attempt to make a string make sense as a number
const numberFromLocaleString = (value: string): number | null => {
  const cleanedValue = value.toLowerCase().replace(/[^\d,.+e-]/g, '');
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

  // certain locales use a comma as a decimal point, if we're in one of those locales treat it as such (as we've got this far with no success)
  // TODO: re-enable if required
  // if (localeDecimalChar === ',') {
  //   const possibleNumber4 = cleanedValue.replace(',', '.');
  //   const try4 = Number(possibleNumber4);
  //   if (isNumber(try4)) {
  //     return try4;
  //   }
  // }

  // nope, can't figure out what the number is, if it is one
  return null;
};

const errMessage = `Cannot convert to number`;

export const toNumberHOF = () => {
  return (value: any | any[]): number => {
    if (isNil(value)) {
      throw new ZeroDepErrorTo(errMessage);
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

      const error = new ZeroDepErrorTo(errMessage);
      error.value = value;
      throw error;
    }
  };
};

export const toNumber = toNumberHOF();
