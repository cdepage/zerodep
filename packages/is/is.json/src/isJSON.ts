import { isArray } from '@zerodep/is.array';
import { isBoolean } from '@zerodep/is.boolean';
import { isNil } from '@zerodep/is.nil';
import { isNull } from '@zerodep/is.null';
import { isNumber } from '@zerodep/is.number';
import { isObject } from '@zerodep/is.object';
import { isString } from '@zerodep/is.string';

const isAllowedJSONProperty = (value: any): boolean => {
  if (isString(value) || isNumber(value) || isBoolean(value) || isNull(value)) {
    return true;
  }

  // arrays need each of their values checked recursively (which may blow-up the callstack)
  if (isArray(value)) {
    for (const item of value) {
      if (!isAllowedJSONProperty(item)) {
        return false;
      }
    }
    return true;
  }

  // objects need each of their properties checked recursively (which may blow-up the callstack)
  if (isObject(value)) {
    for (const key in value) {
      if (!isString(key) || !isAllowedJSONProperty(value[key])) {
        return false;
      }
    }
    return true;
  }

  // if it's not in the allow-list above, it's not a JSON-able property
  return false;
};

export const isJSON = (value: any): boolean => {
  if ((!isArray(value) && !isObject(value)) || isNil(value)) {
    return false;
  }

  return isAllowedJSONProperty(value);
};
