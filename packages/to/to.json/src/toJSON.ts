import { ZeroDepError } from '@zerodep/errors';
import { isArray } from '@zerodep/is.array';
import { isBigInt } from '@zerodep/is.bigint';
import { isBoolean } from '@zerodep/is.boolean';
import { isFunction } from '@zerodep/is.function';
import { isMap } from '@zerodep/is.map';
import { isNil } from '@zerodep/is.nil';
import { isNumber } from '@zerodep/is.number';
import { isObject } from '@zerodep/is.object';
import { isPromise } from '@zerodep/is.promise';
import { isRegex } from '@zerodep/is.regex';
import { isSet } from '@zerodep/is.set';
import { isString } from '@zerodep/is.string';
import { isSymbol } from '@zerodep/is.symbol';
import { isWeakMap } from '@zerodep/is.weakmap';
import { isWeakSet } from '@zerodep/is.weakset';
import { ZeroDepErrorTo } from '@zerodep/to.errors';

export interface ToJSONOptions {
  convertInvalidToNull?: boolean;
}

const defaultOptions: ToJSONOptions = {
  convertInvalidToNull: false,
};

const errMessage = `Cannot convert to JSON`;

export const toJSONHOF = <T = Record<string, any> | any[]>(options: ToJSONOptions = {}) => {
  const config: ToJSONOptions = { ...defaultOptions, ...options };

  // Replacer is used by the JSON.stringify() method, it needs access to the "config" value
  // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter
  //
  // Dev Note: this needs to be inside the HOF as it needs access to the config object
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

    if (isWeakMap(value) || isWeakSet(value) || isSymbol(value) || isPromise(value)) {
      if (config.convertInvalidToNull) {
        return null;
      }
      const error = new ZeroDepErrorTo(errMessage);
      error.value = value;
      throw error;
    }

    return value;
  };

  return (value: any | any[]): T | null => {
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
      (Object.prototype.toString.call(value) === '[object Number]' &&
        (Math.abs(value) === Infinity || Number.isNaN(value)))
    ) {
      const error = new ZeroDepErrorTo(errMessage);
      error.value = value;
      throw error;
    }

    // if we have an object with a toJSON method, use it
    if ('toJSON' in value && isFunction(value.toJSON)) {
      return value.toJSON();
    }

    let maybeJson: any;

    // maps can be converted to object literals
    if (isMap(value)) {
      maybeJson = Object.fromEntries(value);
    }

    // sets can be converted to arrays
    if (isSet(value)) {
      maybeJson = [...value];
    }

    try {
      // dev reminders:
      // - undefined is converted to null by stringify()
      // - the replacer converts nested values recursively
      const json = JSON.parse(JSON.stringify(maybeJson ?? value, replacer));

      // final paranoid check
      if (isObject(json) || isArray(json)) {
        return json;
      }

      // only objects can be returned
      const error = new ZeroDepErrorTo(errMessage);
      error.value = json;
      throw error;
    } catch (error: any) {
      const zdError = new ZeroDepErrorTo(errMessage);
      if (error.value) {
        zdError.value = error.value;
      }

      throw zdError;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const toJSON = toJSONHOF();
