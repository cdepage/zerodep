import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/errors';
import { isObject } from '@zerodep/is.object';

export interface GuardObjectOptions {
  minQuantity?: number;
  maxQuantity?: number;
}

// default options
const defaultOptions: GuardObjectOptions = {
  minQuantity: undefined,
  maxQuantity: undefined,
};

export const guardObjectHOF = (options: GuardObjectOptions = {}) => {
  const config: GuardObjectOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    if (!isObject(value)) {
      const error = new ZeroDepErrorGuardType('Value is not an object');
      error.value = value;
      throw error;
    }

    if (
      typeof config.minQuantity !== 'undefined' &&
      Object.keys(value).length < config.minQuantity
    ) {
      const error = new ZeroDepErrorGuardRange(`Object has fewer than ${config.minQuantity} items`);
      error.value = value;
      throw error;
    }

    if (
      typeof config.maxQuantity !== 'undefined' &&
      Object.keys(value).length > config.maxQuantity
    ) {
      const error = new ZeroDepErrorGuardRange(`Object has more than ${config.maxQuantity} items`);
      error.value = value;
      throw error;
    }

    return;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardObject = guardObjectHOF();
