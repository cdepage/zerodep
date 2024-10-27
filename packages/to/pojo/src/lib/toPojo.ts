/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ZeroDepError } from '@zerodep/errors';
import { isFunction } from '@zerodep/is-function';

// Replacer is used by the JSON.stringify() method
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter
const replacer = (_key: string, value: any) => {
  const type = Object.prototype.toString.call(value);

  if (type === '[object BigInt]' || type === '[object Date]') {
    return value.toString();
  }

  if (type === '[object Set]') {
    return [...value];
  }

  if (type === '[object Map]') {
    return Object.fromEntries(value);
  }

  // only the following types may be serialized
  if (
    type !== '[object Array]' &&
    type !== '[object BigInt]' &&
    type !== '[object Boolean]' &&
    type !== '[object Null]' &&
    type !== '[object Number]' &&
    type !== '[object Object]' &&
    type !== '[object String]' &&
    type !== '[object Undefined]' &&
    type !== '[object Undefined]'
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
  const type = Object.prototype.toString.call(value);

  // short-circuit: value could just be null
  if (type === '[object Null]' || type === '[object Undefined]') {
    return null;
  }

  // fail fast - only arrays, Maps, Sets, objects, and functions with toJSON() methods can be serialized
  if (
    type !== '[object Array]' &&
    type !== '[object Map]' &&
    type !== '[object Object]' &&
    type !== '[object Set]' &&
    type !== '[object Function]' &&
    type !== '[object AsyncFunction]'
  ) {
    const error = new ZeroDepError(errMessage);
    error.value = value;
    throw error;
  }

  let maybeJson: unknown;

  // if we have an object with a toJSON method, use it
  // @ts-ignore
  if ('toJSON' in value && isFunction(value.toJSON)) {
    // @ts-ignore
    maybeJson = value.toJSON();
  }

  try {
    // dev reminders:
    // - undefined is converted to null by stringify()
    // - the replacer converts nested values recursively
    return JSON.parse(JSON.stringify(maybeJson ?? value, replacer));
  } catch (error: any) {
    const zdError = new ZeroDepError(errMessage);
    if (error.value) {
      zdError.value = error.value;
    }
    throw zdError;
  }
};
