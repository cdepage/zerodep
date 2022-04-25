import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guards.errors';

export interface IGuardNumberOptions {
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
      const error = new ZeroDepErrorGuardType('Value is not a number');
      error.value = value;
      throw error;
    }

    if (typeof config.min !== 'undefined' && value < config.min) {
      const error = new ZeroDepErrorGuardRange(`Number is less than ${config.min}`);
      error.value = value;
      throw error;
    }

    if (typeof config.max !== 'undefined' && value > config.max) {
      const error = new ZeroDepErrorGuardRange(`Number is greater than ${config.max}`);
      error.value = value;
      throw error;
    }

    return value;
  };
};
