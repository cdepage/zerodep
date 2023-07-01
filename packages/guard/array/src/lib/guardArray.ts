import { ZeroDepError } from '@zerodep/errors';
import { isArray } from '@zerodep/is-array';

export interface GuardArrayOptions {
  minQuantity?: number;
  maxQuantity?: number;
  typeFn?: (value: any) => boolean;
}

export const guardArrayHOF = (options: GuardArrayOptions = {}) => {
  const config: GuardArrayOptions = options;

  return (value: any | any[]): void => {
    if (!isArray(value)) {
      const error = new ZeroDepError('Value is not an array');
      error.value = value;
      throw error;
    }

    if (
      typeof config.minQuantity !== 'undefined' &&
      value.length < config.minQuantity
    ) {
      const error = new ZeroDepError(
        `Array has fewer than ${config.minQuantity} items`
      );
      error.value = value;
      throw error;
    }

    if (
      typeof config.maxQuantity !== 'undefined' &&
      value.length > config.maxQuantity
    ) {
      const error = new ZeroDepError(
        `Array has more than ${config.maxQuantity} items`
      );
      error.value = value;
      throw error;
    }

    if (config.typeFn) {
      for (const item of value) {
        if (!config.typeFn(item)) {
          const error = new ZeroDepError(
            `An array item is of the incorrect type`
          );
          error.value = value;
          throw error;
        }
      }
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardArray = guardArrayHOF();
