import { isArray } from '@zerodep/is.array';
import { isObject } from '@zerodep/is.object';

export const isJson = (value: any): boolean => {
  if (!isArray(value) && !isObject(value)) {
    return false;
  }

  try {
    JSON.parse(JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};
