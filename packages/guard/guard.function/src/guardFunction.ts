import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isFunction } from '@zerodep/is.function';

export interface GuardFunctionOptions {}

// default options
const defaultOptions: GuardFunctionOptions = {};

export const guardFunctionHOF = (options: GuardFunctionOptions = {}) => {
  const config: GuardFunctionOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isFunction() to error
    if (!isFunction(value)) {
      const error = new ZeroDepErrorGuardType('Value is not a function');
      error.value = value;
      throw error;
    }

    return;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardFunction = guardFunctionHOF();
