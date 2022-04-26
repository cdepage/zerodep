import { ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { isBoolean } from '@zerodep/is.boolean';

export const guardBoolean = () => {
  return (value: any): boolean => {
    if (isBoolean(value)) {
      return value;
    }

    const error = new ZeroDepErrorGuardType('Value is not a boolean');
    error.value = value;
    throw error;
  };
};
