import { isArray } from '@zerodep/is-array';
import { isBoolean } from '@zerodep/is-boolean';
import { isNull } from '@zerodep/is-null';
import { isNumber } from '@zerodep/is-number';
import { isObject } from '@zerodep/is-object';
import { isString } from '@zerodep/is-string';

// eslint-disable-next-line sonarjs/cognitive-complexity
const isAllowedJSONProperty = (value: unknown): boolean => {
  if (isString(value) || isNumber(value) || isBoolean(value) || isNull(value)) {
    return true;
  }

  // Check arrays and objects recursively
  if (isArray(value)) {
    for (const item of value) {
      if (!isAllowedJSONProperty(item)) {
        return false;
      }
    }
    return true;
  }

  if (isObject(value)) {
    for (const key in value) {
      // Early exit if key is not a string
      if (!isString(key)) {
        return false;
      }
      // @ts-expect-error - override intended
      if (!isAllowedJSONProperty(value[key])) {
        return false;
      }
    }
    return true;
  }

  // If it's not in the allow-list above, it's not a JSON-able property
  return false;
};

export const isJson = <T extends object>(value: any): value is T => {
  try {
    // to be valid JSON it must be an object or an array
    if (!isArray(value) && !isObject(value)) {
      return false;
    }

    return isAllowedJSONProperty(value);
  } catch {
    // Anything that isn't serializable must be false, such as a circular reference
    return false;
  }
};
