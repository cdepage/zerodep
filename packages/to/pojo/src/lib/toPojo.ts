/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ZeroDepError } from '@zerodep/errors';
import { isArray } from '@zerodep/is-array';
import { isBigInt } from '@zerodep/is-bigint';
import { isBoolean } from '@zerodep/is-boolean';
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
import { isTypedArray } from '@zerodep/is-typedarray';
import { isWeakMap } from '@zerodep/is-weakmap';
import { isWeakSet } from '@zerodep/is-weakset';

// Replacer is used by the JSON.stringify() method
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter
const replacer = (key: string, value: any) => {
  if (isSet(value)) {
    return [...value];
  }

  if (isMap(value)) {
    return Object.fromEntries(value);
  }

  if (isBigInt(value)) {
    return value.toString();
  }

  if (
    isWeakMap(value) ||
    isWeakSet(value) ||
    isSymbol(value) ||
    isPromise(value)
  ) {
    const error = new ZeroDepError(errMessage);
    error.value = value;
    throw error;
  }

  return value;
};

const errMessage = `Cannot convert to JSON`;

export type Serializables =
  | bigint
  | boolean
  | null
  | number
  | string
  | undefined
  | Date
  | Map<string, Serializables>
  | Set<Serializables>
  | Serializables[]
  | { [key: string]: Serializables }
  | { toJSON: () => Serializables; [key: string]: any };

export const toPojo = <T = Record<string, Serializables> | Serializables[]>(
  value:
    | Serializables[]
    | { [key: string]: Serializables }
    | Map<string, Serializables>
    | Set<Serializables>
    | null
): T | null => {
  // short-circuit: value could just be null
  if (isNil(value)) {
    return null;
  }

  // valid JSON is an object literal or an array
  if (
    isString(value) ||
    isNumber(value) ||
    isBoolean(value) ||
    isBigInt(value) ||
    isSymbol(value) ||
    isRegex(value) ||
    isFunction(value) ||
    isTypedArray(value) ||
    (Object.prototype.toString.call(value) === '[object Number]' &&
      // @ts-ignore
      (Math.abs(value) === Infinity || Number.isNaN(value)))
  ) {
    const error = new ZeroDepError(errMessage);
    error.value = value;
    throw error;
  }

  // if we have an object with a toJSON method, use it
  // @ts-ignore
  if ('toJSON' in value && isFunction(value.toJSON)) {
    // @ts-ignore
    return value.toJSON();
  }

  let maybeJSON: any;

  // maps can be converted to object literals
  if (isMap(value)) {
    // @ts-ignore
    maybeJSON = Object.fromEntries(value);
  }

  // sets can be converted to arrays
  if (isSet(value)) {
    // @ts-ignore
    maybeJSON = [...value];
  }

  try {
    // dev reminders:
    // - undefined is converted to null by stringify()
    // - the replacer converts nested values recursively
    const json = JSON.parse(JSON.stringify(maybeJSON ?? value, replacer));

    // final paranoid check
    if (isObject(json) || isArray(json)) {
      return json;
    }

    // only objects can be returned
    const error = new ZeroDepError(errMessage);
    error.value = json;
    throw error;
  } catch (error: any) {
    const zdError = new ZeroDepError(errMessage);
    if (error.value) {
      zdError.value = error.value;
    }

    // for every HOF that is for configuration (not argument currying) export a function using the default values

    throw zdError;
  }
};
