import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guards.errors';

export interface IGuardStringOptions {
  minLength?: number;
  maxLength?: number;
}

// default options
const defaultOptions: IGuardStringOptions = {
  minLength: undefined,
  maxLength: undefined,
};

export const guardString = (options: IGuardStringOptions = {}) => {
  const config: IGuardStringOptions = { ...defaultOptions, ...options };

  return (value: any): string => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (typeof value !== 'string') {
      const error = new ZeroDepErrorGuardType('Value is not a string');
      error.value = value;
      throw error;
    }

    if (typeof config.minLength !== 'undefined' && value.length < config.minLength) {
      const error = new ZeroDepErrorGuardRange(
        `String is shorter than ${config.minLength} character(s)`
      );
      error.value = value;
      throw error;
    }

    if (typeof config.maxLength !== 'undefined' && value.length > config.maxLength) {
      const error = new ZeroDepErrorGuardRange(
        `String is longer than ${config.maxLength} character(s)`
      );
      error.value = value;
      throw error;
    }

    return value;
  };
};
