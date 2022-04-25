import { IZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guards.errors';

export interface IGuardFloatOptions extends IZeroDepError {
  min?: number;
  max?: number;
}

// default options
const defaultOptions: IGuardFloatOptions = {
  min: undefined,
  max: undefined,
};

export const guardFloat = (options: IGuardFloatOptions = {}) => {
  const config: IGuardFloatOptions = { ...defaultOptions, ...options };

  return (value: any): number => {
    // we need to check for the typeof first as "undefined" will cause isFloat() to error
    if (
      typeof value !== 'number' ||
      Number.isNaN(value) ||
      Number.isInteger(value) ||
      !Number.isFinite(value)
    ) {
      throw new ZeroDepErrorGuardType('Value is not a float', undefined, value);
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      throw new ZeroDepErrorGuardRange(`Float too small - was less than ${config.min}`, 400, value);
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      throw new ZeroDepErrorGuardRange(`Float too large - was more than ${config.max}`, 400, value);
    }

    return value;
  };
};
