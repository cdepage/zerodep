import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guards.errors';
import { isNumber } from '@zerodep/is.number';

export interface GuardNumberOptions {
  min?: number;
  max?: number;
}

// default options
const defaultOptions: GuardNumberOptions = {
  min: undefined,
  max: undefined,
};

export const guardNumber = (options: GuardNumberOptions = {}) => {
  const config: GuardNumberOptions = { ...defaultOptions, ...options };

  return (value: any): number => {
    // we need to check for the typeof first as "undefined" will cause isNumber() to error
    if (!isNumber(value)) {
      const error = new ZeroDepErrorGuardType('Value is not a number');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      const error = new ZeroDepErrorGuardRange(`Number is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      const error = new ZeroDepErrorGuardRange(`Number is greater than ${config.max}`);
      error.value = value;
      throw error;
    }

    return value;
  };
};
