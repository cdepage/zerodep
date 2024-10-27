/* eslint-disable sonarjs/cognitive-complexity */
import { ZeroDepError } from '@zerodep/errors';
import { isArray } from '@zerodep/is-array';
import { isBigInt } from '@zerodep/is-bigint';
import { isBoolean } from '@zerodep/is-boolean';
import { isDate } from '@zerodep/is-date';
import { isNil } from '@zerodep/is-nil';
import { isNumber } from '@zerodep/is-number';
import { isPromise } from '@zerodep/is-promise';
import { isSet } from '@zerodep/is-set';
import { isString } from '@zerodep/is-string';
import { isTypedArray } from '@zerodep/is-typedarray';
import { isWeakMap } from '@zerodep/is-weakmap';
import { isWeakSet } from '@zerodep/is-weakset';
import { toPojo } from '@zerodep/to-pojo';

export type Stringifiable =
  | bigint
  | boolean
  | null
  | number
  | string
  | undefined
  | Date
  | Map<string, Stringifiable>
  | Set<Stringifiable>
  | Stringifiable[]
  | { [key: string]: Stringifiable }
  | { toString: () => string; [key: string]: any };

export const toString = (value: Stringifiable): string => {
  if (isString(value)) {
    return value as string;
  }

  if (isNil(value)) {
    return '';
  }

  if (isBoolean(value)) {
    return value ? 'true' : 'false';
  }

  if (isDate(value)) {
    return (value as Date).toISOString();
  }

  // floats & integers
  if (isNumber(value)) {
    return `${value}`;
  }

  // remaining number-like values (NaN, etc...)
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return String(value);
  }

  if (isBigInt(value)) {
    return (value as bigint).toString();
  }

  // arrays & sets need each of their values checked recursively (which may blow-up the callstack)
  if (isArray(value) || isSet(value)) {
    const items: string[] = [];
    for (const item of [...(value as any[])]) {
      items.push(toString(item));
    }
    return items.join(', ');
  }

  // these are not convertible
  if (
    isWeakSet(value) ||
    isWeakMap(value) ||
    isTypedArray(value) ||
    isPromise(value)
  ) {
    const error = new ZeroDepError('Cannot convert to string');
    error.value = value;
    throw error;
  }

  // let's try to stringify any remaining objects, maps, whatever is left
  try {
    // @ts-expect-error - unknown value type allowed here
    return JSON.stringify(toPojo(value));
  } catch {
    const error = new ZeroDepError('Cannot convert to string');
    error.value = value;
    throw error;
  }
};
