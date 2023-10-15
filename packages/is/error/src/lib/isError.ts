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

  // there may not be a message, which IS permitted in JavaScript
  if (!('message' in (value as Error))) {
    return true;
  }

  // any message must be a string
  return isString((value as Error).message);
};
