import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isInteger } from '@zerodep/is.integer';

export interface GuardIntegerOptions {
  min?: number;
  max?: number;
}

// default options
const defaultOptions: GuardIntegerOptions = {
  min: undefined,
  max: undefined,
};

export const guardIntegerHOF = (options: GuardIntegerOptions = {}) => {
  const config: GuardIntegerOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (!isInteger(value)) {
      const error = new ZeroDepErrorGuardType('Value is not an integer');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      const error = new ZeroDepErrorGuardRange(`Integer is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      const error = new ZeroDepErrorGuardRange(`Integer is greater than ${config.max}`);
      error.value = value;
      throw error;
    }

    return;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardInteger = guardIntegerHOF();
