import { IZeroDepError } from '@zerodep/errors';
import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guards.errors';

export interface IGuardNumberOptions extends IZeroDepError {
  min?: number;
  max?: number;
}

// default options
const defaultOptions: IGuardNumberOptions = {
  min: undefined,
  max: undefined,
};

export const guardNumber = (options: IGuardNumberOptions = {}) => {
  const config: IGuardNumberOptions = { ...defaultOptions, ...options };

  return (value: any): number => {
    // we need to check for the typeof first as "undefined" will cause isNumber() to error
    if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)) {
      throw new ZeroDepErrorGuardType('Value is not a number', undefined, value);
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      throw new ZeroDepErrorGuardRange(
        `Number too small - was less than ${config.min}`,
        400,
        value
      );
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      throw new ZeroDepErrorGuardRange(
        `Number too large - was more than ${config.max}`,
        400,
        value
      );
    }

    return value;
  };
};
