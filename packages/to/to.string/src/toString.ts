import { isArray } from '@zerodep/is.array';
import { isBigInt } from '@zerodep/is.bigint';
import { isBoolean } from '@zerodep/is.boolean';
import { isDate } from '@zerodep/is.date';
import { isNil } from '@zerodep/is.nil';
import { isNumber } from '@zerodep/is.number';
import { isSet } from '@zerodep/is.set';
import { isString } from '@zerodep/is.string';
import { isTypedArray } from '@zerodep/is.typedarray';
import { isWeakMap } from '@zerodep/is.weakmap';
import { isWeakSet } from '@zerodep/is.weakset';
import { ZeroDepErrorTo } from '@zerodep/errors';
import { toJSON } from '@zerodep/to.json';
import { TypesLocales } from '@zerodep/types.locales';
import { TypesTimeZones } from '@zerodep/types.timezones';

export interface ToStringOptions {
  locale?: TypesLocales | TypesLocales[] | string | string[];
  timeZone?: TypesTimeZones;
  dateStyle?: 'full' | 'long' | 'medium' | 'short';
  timeStyle?: 'full' | 'long' | 'medium' | 'short';
  booleanValues?: [string, string];
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

const defaultOptions: ToStringOptions = {
  locale: [], // uses the default value for the platform
  timeZone: undefined,
  dateStyle: undefined,
  timeStyle: undefined,
  booleanValues: ['true', 'false'],
  minimumFractionDigits: undefined,
  maximumFractionDigits: 6,
};

export const toStringHOF = (options: ToStringOptions = {}) => {
  const config: ToStringOptions = { ...defaultOptions, ...options };

  // cache & getter for the dateTime formatter
  let dateTimeFormatter: Intl.DateTimeFormat;
  const getDateTimeFormatter = () => {
    if (!dateTimeFormatter) {
      dateTimeFormatter = new Intl.DateTimeFormat(config.locale, {
        dateStyle: config.dateStyle,
        timeStyle: config.timeStyle,
        timeZone: config.timeZone,
      });
    }
    return dateTimeFormatter;
  };

  // cache & getter for the number formatter
  let numberFormatter: Intl.NumberFormat;
  const getNumberFormatter = () => {
    if (!numberFormatter) {
      numberFormatter = new Intl.NumberFormat(config.locale, {
        minimumFractionDigits: config.minimumFractionDigits,
        maximumFractionDigits: config.maximumFractionDigits,
      });
    }
    return numberFormatter;
  };

  const convertValue = (value: any): string => {
    if (isString(value)) {
      return value;
    }

    if (isNil(value)) {
      return '';
    }

    if (isBoolean(value)) {
      return value ? config.booleanValues![0] : config.booleanValues![1];
    }

    if (isDate(value)) {
      if (config.timeZone || config.dateStyle || config.timeStyle) {
        return getDateTimeFormatter().format(value);
      } else {
        return value.toISOString();
      }
    }

    // floats & integers
    if (isNumber(value)) {
      return getNumberFormatter().format(value);
    }

    // remaining number-like values (NaN, etc...)
    if (Object.prototype.toString.call(value) === '[object Number]') {
      return String(value);
    }

    if (isBigInt(value)) {
      return getNumberFormatter().format(value.toString());
    }

    // arrays & sets need each of their values checked recursively (which may blow-up the callstack)
    if (isArray(value) || isSet(value)) {
      const items = [];
      for (const item of [...value]) {
        items.push(convertValue(item));
      }
      return items.join(', ');
    }

    // these are not convertible
    if (isWeakSet(value) || isWeakMap(value) || isTypedArray(value)) {
      const error = new ZeroDepErrorTo('Cannot convert to string');
      error.value = value;
      throw error;
    }

    // let's try to stringify any remaining objects, maps, whatever is left
    try {
      return JSON.stringify(toJSON(value));
    } catch {
      const error = new ZeroDepErrorTo('Cannot convert to string');
      error.value = value;
      throw error;
    }
  };

  return (value: any | any[]): string => convertValue(value);
};

export const toString = toStringHOF();
