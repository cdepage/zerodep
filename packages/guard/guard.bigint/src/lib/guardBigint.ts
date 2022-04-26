import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isBigint } from '@zerodep/is.bigint';

export interface GuardBigIntOptions {
  min?: bigint;
  max?: bigint;
}

// default options
const defaultOptions: GuardBigIntOptions = {
  min: undefined,
  max: undefined,
};

export const guardBigint = (options: GuardBigIntOptions = {}) => {
  const config: GuardBigIntOptions = { ...defaultOptions, ...options };

  return (value: any): bigint => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (!isBigint(value)) {
      const error = new ZeroDepErrorGuardType('Value is not a bigint');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      const error = new ZeroDepErrorGuardRange(`Bigint is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      const error = new ZeroDepErrorGuardRange(`Bigint is greater than ${config.max}`);
      error.value = value;
      throw error;
    }

    return value;
  };
};
