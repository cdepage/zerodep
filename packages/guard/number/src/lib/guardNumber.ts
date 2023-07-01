import { ZeroDepError } from '@zerodep/errors';
import { isNumber } from '@zerodep/is-number';

export interface GuardNumberOptions {
  min?: number;
  max?: number;
}

// default options
const defaultOptions: GuardNumberOptions = {
  min: undefined,
  max: undefined,
};

export const guardNumberHOF = (options: GuardNumberOptions = {}) => {
  const config: GuardNumberOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isNumber() to error
    if (!isNumber(value)) {
      const error = new ZeroDepError('Value is not a number');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      const error = new ZeroDepError(`Number is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      const error = new ZeroDepError(`Number is greater than ${config.max}`);
      error.value = value;
      throw error;
    }

    return;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardNumber = guardNumberHOF();
