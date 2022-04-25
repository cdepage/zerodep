import { IZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guards.errors';

export interface IGuardIntegerOptions extends IZeroDepError {
  min?: number;
  max?: number;
}

// default options
const defaultOptions: IGuardIntegerOptions = {
  min: undefined,
  max: undefined,
};

export const guardInteger = (options: IGuardIntegerOptions = {}) => {
  const config: IGuardIntegerOptions = { ...defaultOptions, ...options };

  return (value: any): number => {
    // we need to check for the typeof first as "undefined" will cause isInteger() to error
    if (typeof value !== 'number' || !Number.isInteger(value)) {
      throw new ZeroDepErrorGuardType('Value is not an integer', undefined, value);
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      throw new ZeroDepErrorGuardRange(
        `Integer too small - was less than ${config.min}`,
        400,
        value
      );
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      throw new ZeroDepErrorGuardRange(
        `Integer too large - was more than ${config.max}`,
        400,
        value
      );
    }

    return value;
  };
};
