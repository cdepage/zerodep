import { IZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guards.errors';

export interface IGuardStringOptions extends IZeroDepError {
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
      throw new ZeroDepErrorGuardType('Value is not a string', undefined, value);
    }

    if (typeof config.minLength !== 'undefined' && value.length < config.minLength) {
      throw new ZeroDepErrorGuardRange(
        `String too short - was less than ${config.minLength} characters`,
        400,
        value
      );
    }

    if (typeof config.maxLength !== 'undefined' && value.length > config.maxLength) {
      throw new ZeroDepErrorGuardRange(
        `String too long - was more than ${config.maxLength} characters`,
        400,
        value
      );
    }

    return value;
  };
};
