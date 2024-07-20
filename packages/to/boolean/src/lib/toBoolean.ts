import { ZeroDepError } from '@zerodep/errors';
import { isArray } from '@zerodep/is-array';
import { isMap } from '@zerodep/is-map';
import { isObject } from '@zerodep/is-object';
import { isSet } from '@zerodep/is-set';
import { isString } from '@zerodep/is-string';
import { stringDeburr } from '@zerodep/string-deburr';

const errMessage = `Cannot reliably convert to boolean`;

export const toBoolean = (value: unknown): boolean => {
  // easy cases
  switch (value) {
    case true:
    case 1:
    case 1n:
      return true;

    case false:
    case 0:
    case 0n:
    case '':
    case null:
    case undefined:
      return false;

    default:
    // noop
  }

  // strings
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
  }

  if (isArray(value)) {
    // @ts-expect-error - all good
    return !!value.length;
  }

  if (isObject(value)) {
    // @ts-expect-error - all good
    return !!Object.keys(value).length;
  }

  if (isSet(value) || isMap(value)) {
    // @ts-expect-error - all good
    return !!value.size;
  }

  // whatever is left cannot be reliably converted to a boolean
  throw new ZeroDepError(errMessage);
};
