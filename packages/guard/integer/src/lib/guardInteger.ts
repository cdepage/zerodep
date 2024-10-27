import { ZeroDepError } from '@zerodep/errors';
import { isInteger } from '@zerodep/is-integer';

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

  return (value: unknown): void => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (!isInteger(value)) {
      const error = new ZeroDepError('Value is not an integer');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && (value as number) < config.min) {
      const error = new ZeroDepError(`Integer is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && (value as number) > config.max) {
      const error = new ZeroDepError(`Integer is greater than ${config.max}`);
      error.value = value;
      throw error;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardInteger = guardIntegerHOF();
