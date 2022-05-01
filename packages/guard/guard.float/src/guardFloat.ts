import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isFloat } from '@zerodep/is.float';

export interface GuardFloatOptions {
  min?: number;
  max?: number;
}

// default options
const defaultOptions: GuardFloatOptions = {
  min: undefined,
  max: undefined,
};

export const guardFloatHOF = (options: GuardFloatOptions = {}) => {
  const config: GuardFloatOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isFloat() to error
    if (!isFloat(value)) {
      const error = new ZeroDepErrorGuardType('Value is not a float');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      const error = new ZeroDepErrorGuardRange(`Float is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      const error = new ZeroDepErrorGuardRange(`Float is greater than ${config.max}`);
      error.value = value;
      throw error;
    }

    return;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardFloat = guardFloatHOF();
