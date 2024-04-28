import { isString } from '@zerodep/is-string';

export const isError = (value: unknown, errorType?: any): boolean => {
  // fail on wrong type
  if (Object.prototype.toString.call(value) !== '[object Error]') {
    return false;
  }

  // fail on wrong error type/subclass
  if (errorType && !(value instanceof errorType)) {
    return false;
  }

  // any message must be a string
  return isString((value as Error).message);
};
