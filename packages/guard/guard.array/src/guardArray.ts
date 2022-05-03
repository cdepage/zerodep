import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/errors';
import { isArray } from '@zerodep/is.array';

export interface GuardArrayOptions {
  minQuantity?: number;
  maxQuantity?: number;
}

export const guardArrayHOF = (options: GuardArrayOptions = {}) => {
  const config: GuardArrayOptions = options;

  return (value: any | any[]): void => {
    if (!isArray(value)) {
      const error = new ZeroDepErrorGuardType('Value is not an array');
      error.value = value;
      throw error;
    }

    if (typeof config.minQuantity !== 'undefined' && value.length < config.minQuantity) {
      const error = new ZeroDepErrorGuardRange(`Array has fewer than ${config.minQuantity} items`);
      error.value = value;
      throw error;
    }

    if (typeof config.maxQuantity !== 'undefined' && value.length > config.maxQuantity) {
      const error = new ZeroDepErrorGuardRange(`Array has more than ${config.maxQuantity} items`);
      error.value = value;
      throw error;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardArray = guardArrayHOF();
