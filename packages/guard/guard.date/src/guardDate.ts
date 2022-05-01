import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isDate } from '@zerodep/is.date';

export interface GuardDateOptions {
  earliest?: Date;
  latest?: Date;
}

// default options
const defaultOptions: GuardDateOptions = {
  earliest: undefined,
  latest: undefined,
};

export const guardDateHOF = (options: GuardDateOptions = {}) => {
  const config: GuardDateOptions = { ...defaultOptions, ...options };

  return (value: any): void => {
    if (!isDate(value)) {
      const error = new ZeroDepErrorGuardType('Value is not a date');
      error.value = value;
      throw error;
    }

    if (typeof config.earliest !== 'undefined' && value < config.earliest) {
      const error = new ZeroDepErrorGuardRange(
        `Date is less than ${config.earliest.toISOString()}`
      );
      error.value = value;
      throw error;
    }

    if (typeof config.latest !== 'undefined' && value > config.latest) {
      const error = new ZeroDepErrorGuardRange(
        `Date is greater than ${config.latest.toISOString()}`
      );
      error.value = value;
      throw error;
    }

    return;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardDate = guardDateHOF();
