import { ZeroDepError } from '@zerodep/errors';
import { isPojo } from '@zerodep/is-pojo';

export interface GuardPojoOptions {
  minQuantity?: number;
  maxQuantity?: number;
}

// default options
const defaultOptions: GuardPojoOptions = {
  minQuantity: undefined,
  maxQuantity: undefined,
};

export const guardPojoHOF = (options: GuardPojoOptions = {}) => {
  const config: GuardPojoOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isFloat() to error
    if (!isPojo(value)) {
      const error = new ZeroDepError('Value is not a JSON object');
      error.value = value;
      throw error;
    }

    if (
      typeof config.minQuantity !== 'undefined' &&
      Object.keys(value).length < config.minQuantity
    ) {
      const error = new ZeroDepError(
        `JSON object has fewer than ${config.minQuantity} items`
      );
      error.value = value;
      throw error;
    }

    if (
      typeof config.maxQuantity !== 'undefined' &&
      Object.keys(value).length > config.maxQuantity
    ) {
      const error = new ZeroDepError(
        `JSON object has more than ${config.maxQuantity} items`
      );
      error.value = value;
      throw error;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardPojo = guardPojoHOF();
