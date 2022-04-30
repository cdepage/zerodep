import { isArray } from '@zerodep/is.array';
import { isBigInt } from '@zerodep/is.bigint';
import { isFunction } from '@zerodep/is.function';
import { isMap } from '@zerodep/is.map';
import { isNil } from '@zerodep/is.nil';
import { isObject } from '@zerodep/is.object';
import { isPromise } from '@zerodep/is.promise';
import { isRegex } from '@zerodep/is.regex';
import { isSet } from '@zerodep/is.set';
import { isSymbol } from '@zerodep/is.symbol';
import { isWeakMap } from '@zerodep/is.weakmap';
import { isWeakSet } from '@zerodep/is.weakset';
import { ZeroDepErrorTo } from '@zerodep/to.errors';

export interface ToJsonOptions {
  convertErrorsToNull?: boolean;
}

const defaultOptions: ToJsonOptions = {
  convertErrorsToNull: false,
};

export const toJson = <T = Record<string, any> | any[]>(options: ToJsonOptions = {}) => {
  const config: ToJsonOptions = { ...defaultOptions, ...options };

  // Replacer is used by the JSON.stringify() method, it needs access to the "config" value
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

    if (isWeakMap(value) || isWeakSet(value) || isSymbol(value) || isPromise(value)) {
      if (config.convertErrorsToNull) {
        return null;
      }
      throw new Error();
    }

    return value;
  };

  return (value: any | any[]): T | null => {
    // short-circuit: value could just be null
    if (isNil(value)) {
      return null;
    }

    // if we have an object with a toJSON method, use it
    if (typeof value === 'object' && 'toJSON' in value && !isSymbol(value)) {
      return value.toJSON();
    }

    const type = typeof value;
    const errMessage = `Cannot convert a ${type} to JSON`;
    let maybeJson: any;

    // valid JSON is an object literal or an array
    if (
      isSymbol(value) ||
      isRegex(value) ||
      isFunction(value) ||
      type === 'string' ||
      type === 'number' ||
      type === 'boolean' ||
      type === 'bigint'
    ) {
      throw new ZeroDepErrorTo(errMessage);
    }

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
      throw Error();
    } catch {
      throw new ZeroDepErrorTo(errMessage);
    }
  };
};
