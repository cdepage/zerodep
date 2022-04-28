import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isBigInt } from '@zerodep/is.bigint';

export interface GuardBigIntOptions {
  min?: BigInt;
  max?: BigInt;
}

// default options
const defaultOptions: GuardBigIntOptions = {
  min: undefined,
  max: undefined,
};

export const guardBigInt = (options: GuardBigIntOptions = {}) => {
  const config: GuardBigIntOptions = { ...defaultOptions, ...options };

  return (value: any): BigInt => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (!isBigInt(value)) {
      const error = new ZeroDepErrorGuardType('Value is not a BigInt');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      const error = new ZeroDepErrorGuardRange(`BigInt is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      const error = new ZeroDepErrorGuardRange(`BigInt is greater than ${config.max}`);
      error.value = value;
      throw error;
    }

    return value;
  };
};
