import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isJson } from '@zerodep/is.json';

export interface GuardJSONOptions {
  minQuantity?: number;
  maxQuantity?: number;
}

// default options
const defaultOptions: GuardJSONOptions = {
  minQuantity: undefined,
  maxQuantity: undefined,
};

export const guardJSONHOF = (options: GuardJSONOptions = {}) => {
  const config: GuardJSONOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isFloat() to error
    if (!isJson(value)) {
      const error = new ZeroDepErrorGuardType('Value is not a JSON object');
      error.value = value;
      throw error;
    }

    if (
      typeof config.minQuantity !== 'undefined' &&
      Object.keys(value).length < config.minQuantity
    ) {
      const error = new ZeroDepErrorGuardRange(
        `JSON object has fewer than ${config.minQuantity} items`
      );
      error.value = value;
      throw error;
    }

    if (
      typeof config.maxQuantity !== 'undefined' &&
      Object.keys(value).length > config.maxQuantity
    ) {
      const error = new ZeroDepErrorGuardRange(
        `JSON object has more than ${config.maxQuantity} items`
      );
      error.value = value;
      throw error;
    }

    return;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardJSON = guardJSONHOF();
