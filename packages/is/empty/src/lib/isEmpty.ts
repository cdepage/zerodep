import { isArray } from '@zerodep/is-array';
import { isMap } from '@zerodep/is-map';
import { isNil } from '@zerodep/is-nil';
import { isPojo } from '@zerodep/is-pojo';
import { isSet } from '@zerodep/is-set';
import { isString } from '@zerodep/is-string';

export const isEmpty = (value: unknown): boolean => {
  try {
    if (isNil(value)) {
      return true;
    }

    if (isString(value)) {
      return value === '';
    }

    if (isArray(value)) {
      // @ts-expect-error - type is correct
      return !value.length;
    }

    if (isPojo(value)) {
      // @ts-expect-error - type is correct
      return !Object.keys(value).length;
    }

    if (isMap(value) || isSet(value)) {
      // @ts-expect-error - type is correct
      return !value.size;
    }

    return false;
  } catch {
    // anything that isn't handled by the above code is definitely false
    return false;
  }
};
