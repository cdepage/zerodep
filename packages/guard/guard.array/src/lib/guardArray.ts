import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isArray } from '@zerodep/is.array';

export interface GuardArrayOptions {
  minQuantity?: number;
  maxQuantity?: number;
}

export const guardArray = (options: GuardArrayOptions = {}) => {
  const config: GuardArrayOptions = options;

  return (value: any | any[]): any[] => {
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

    return value;
  };
};
