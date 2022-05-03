import { ZeroDepErrorGuardType } from '@zerodep/errors';
import { isBoolean } from '@zerodep/is.boolean';

export interface GuardBooleanOptions {}

export const guardBooleanHOF = (options: GuardBooleanOptions = {}) => {
  return (value: any): void => {
    if (isBoolean(value)) {
      return;
    }

    const error = new ZeroDepErrorGuardType('Value is not a boolean');
    error.value = value;
    throw error;
  };
};

// for every HOF that is for configuration (not argument currying) export a function using the default values
export const guardBoolean = guardBooleanHOF();
