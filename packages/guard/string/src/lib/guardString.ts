import { ZeroDepError } from '@zerodep/errors';
import { isString } from '@zerodep/is-string';

export interface GuardStringOptions {
  minLength?: number;
  maxLength?: number;
}

// default options
const defaultOptions: GuardStringOptions = {
  minLength: undefined,
  maxLength: undefined,
};

export const guardStringHOF = (options: GuardStringOptions = {}) => {
  const config: GuardStringOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (!isString(value)) {
      const error = new ZeroDepError('Value is not a string');
      error.value = value;
      throw error;
    }

    if (
      typeof config.minLength !== 'undefined' &&
      value.length < config.minLength
    ) {
      const error = new ZeroDepError(
        `String is shorter than ${config.minLength} character(s)`
      );
      error.value = value;
      throw error;
    }

    if (
      typeof config.maxLength !== 'undefined' &&
      value.length > config.maxLength
    ) {
      const error = new ZeroDepError(
        `String is longer than ${config.maxLength} character(s)`
      );
      error.value = value;
      throw error;
    }
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardString = guardStringHOF();
