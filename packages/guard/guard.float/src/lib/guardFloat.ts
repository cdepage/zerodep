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

export const guardFloat = (options: GuardFloatOptions = {}) => {
  const config: GuardFloatOptions = { ...defaultOptions, ...options };

  return (value: any): number => {
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

    return value;
  };
};
