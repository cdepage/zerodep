import { isArray } from '@zerodep/is-array';
import { isMap } from '@zerodep/is-map';
import { isNil } from '@zerodep/is-nil';
import { isJson } from '@zerodep/is-json';
import { isSet } from '@zerodep/is-set';
import { isString } from '@zerodep/is-string';

export const isEmpty = (value: unknown): boolean => {
  try {
    // Check for null or undefined first, as these are the most common empty values
    if (isNil(value)) return true;

    // Check for strings next, as they are also common and have a simple empty check
    if (isString(value)) return value === '';

    // Check for arrays, which have a straightforward length property
    if (isArray(value)) {
      return !value.length;
    }

    // Check for plain objects using Object.keys to determine emptiness
    if (isJson(value)) {
      return !Object.keys(value).length;
    }

    // Check for Map and Set objects, which have a size property
    if (isMap(value) || isSet(value)) {
      return !value.size;
    }

    // If none of the above checks pass, the value is not empty
    return false;
  } catch {
    // In case of any unexpected errors, assume the value is not empty
    return false;
  }
};
