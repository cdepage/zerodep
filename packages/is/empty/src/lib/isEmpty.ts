import { isArray } from '@zerodep/is-array';
import { isBigInt } from '@zerodep/is-bigint';
import { isBoolean } from '@zerodep/is-boolean';
import { isDate } from '@zerodep/is-date';
import { isError } from '@zerodep/is-error';
import { isFunction } from '@zerodep/is-function';
import { isMap } from '@zerodep/is-map';
import { isNil } from '@zerodep/is-nil';
import { isNumber } from '@zerodep/is-number';
import { isObject } from '@zerodep/is-object';
import { isPromise } from '@zerodep/is-promise';
import { isRegex } from '@zerodep/is-regex';
import { isSet } from '@zerodep/is-set';
import { isString } from '@zerodep/is-string';
import { isSymbol } from '@zerodep/is-symbol';

export const isEmpty = (value: unknown): boolean => {
  try {
    if (isNil(value)) {
      return true;
    }

    // more common types used by this function
    if (
      isNumber(value) ||
      isBoolean(value) ||
      isBigInt(value) ||
      isDate(value)
    ) {
      return false;
    }

    if (isString(value)) {
      return value === '';
    }

    if (isArray(value)) {
      return !(value as any[]).length;
    }

    if (isObject(value)) {
      return !Object.keys(value as Record<string, any>).length;
    }

    if (isMap(value) || isSet(value)) {
      return !(value as Map<any, any> | Set<any>).size;
    }

    // less common things likely used in this function
    return !(
      isRegex(value) ||
      isFunction(value) ||
      isPromise(value) ||
      isSymbol(value) ||
      isError(value)
    );
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
