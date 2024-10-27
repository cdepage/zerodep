import { ZeroDepError } from '@zerodep/errors';
import { isObject } from '@zerodep/is-object';

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

  return (value: unknown): void => {
    if (!isObject(value)) {
      const error = new ZeroDepError('Value is not an object');
      error.value = value;
      throw error;
    }

    if (
      typeof config.minQuantity !== 'undefined' &&
      Object.keys(value as Record<string, any>).length < config.minQuantity
    ) {
      const error = new ZeroDepError(
        `Object has fewer than ${config.minQuantity} items`
      );
      error.value = value;
      throw error;
    }

    if (
      typeof config.maxQuantity !== 'undefined' &&
      Object.keys(value as Record<string, any>).length > config.maxQuantity
    ) {
      const error = new ZeroDepError(
        `Object has more than ${config.maxQuantity} items`
      );
      error.value = value;
      throw error;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardObject = guardObjectHOF();
