/* eslint-disable @typescript-eslint/no-empty-interface */
import { ZeroDepError } from '@zerodep/errors';
import { isFunction } from '@zerodep/is-function';

export const guardFunctionHOF = () => {
  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isFunction() to error
    if (!isFunction(value)) {
      const error = new ZeroDepError('Value is not a function');
      error.value = value;
      throw error;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardFunction = guardFunctionHOF();
