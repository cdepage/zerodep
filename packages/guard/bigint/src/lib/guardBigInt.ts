/* eslint-disable @typescript-eslint/ban-types */
import { ZeroDepError } from '@zerodep/errors';
import { isBigInt } from '@zerodep/is-bigint';

export interface GuardBigIntOptions {
  min?: BigInt;
  max?: BigInt;
}

// default options
const defaultOptions: GuardBigIntOptions = {
  min: undefined,
  max: undefined,
};

export const guardBigIntHOF = (options: GuardBigIntOptions = {}) => {
  const config: GuardBigIntOptions = { ...defaultOptions, ...options };

  return (value: unknown): void => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (!isBigInt(value)) {
      const error = new ZeroDepError('Value is not a BigInt');
      throw error;
    }

    if (typeof config.min !== 'undefined' && (value as BigInt) < config.min) {
      const error = new ZeroDepError(`BigInt is less than ${config.min}`);
      throw error;
    }

    if (typeof config.max !== 'undefined' && (value as BigInt) > config.max) {
      const error = new ZeroDepError(`BigInt is greater than ${config.max}`);
      throw error;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardBigInt = guardBigIntHOF();
