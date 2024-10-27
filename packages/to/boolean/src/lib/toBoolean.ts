/* eslint-disable sonarjs/cognitive-complexity */
import { ZeroDepError } from '@zerodep/errors';
import { isArray } from '@zerodep/is-array';
import { isBigInt } from '@zerodep/is-bigint';
import { isBoolean } from '@zerodep/is-boolean';
import { isMap } from '@zerodep/is-map';
import { isNumber } from '@zerodep/is-number';
import { isObject } from '@zerodep/is-object';
import { isSet } from '@zerodep/is-set';
import { isString } from '@zerodep/is-string';
import { stringDeburr } from '@zerodep/string-deburr';

const errMessage = `Cannot reliably convert to boolean`;

export type Booleanable =
  | unknown[]
  | bigint
  | number
  | Map<unknown, unknown>
  | Set<unknown>
  | string
  | Record<string, unknown>;

export const toBoolean = (value: Booleanable): boolean => {
  // boolean
  if (isBoolean(value)) {
    return value as unknown as boolean;
  }

  // easy cases
  switch (value) {
    case '':
    case null:
    case undefined:
      return false;

    default:
    // noop
  }

  // number
  if (isNumber(value)) {
    // @ts-expect-error - type is OK
    return value > 0;
  }

  // bigint
  if (isBigInt(value)) {
    // @ts-expect-error - type is OK
    return value > 0;
  }

  // string
  if (isString(value)) {
    switch (stringDeburr(String(value)).toLowerCase()) {
      case 'true':
      case 't':
      case 'yes':
      case 'y':
      case 'cierto':
      case 'c':
      case 'verdadero':
      case 'vrais':
      case 'v':
      case 'si':
      case 'sí':
      case 's':
      case 'oui':
      case 'ouais':
      case 'o':
        return true;

      case 'false':
      case 'falso':
      case 'faux':
      case 'f':
      case 'no':
      case 'non':
      case 'n':
        return false;

      default:
      // noop
    }

    // bigint or number provided as string
    if (/^-?\d+n?$/.test((value as string).replace(/[,.]/g, ''))) {
      try {
        return BigInt(parseInt(value as string, 10)) > 0n;
      } catch {
        // not a bigint or number
      }
    }

    // any string not handled above is truthy
    return true;
  }

  if (isArray(value)) {
    // @ts-expect-error - type is array
    return !!value.length;
  }

  if (isObject(value)) {
    return !!Object.keys(value).length;
  }

  if (isSet(value) || isMap(value)) {
    // @ts-expect-error - type is a map or set
    return !!value.size;
  }

  // whatever is left cannot be reliably converted to a boolean
  throw new ZeroDepError(errMessage);
};
