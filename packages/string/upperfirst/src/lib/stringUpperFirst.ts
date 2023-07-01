import { guardString } from '@zerodep/guard-string';

export const stringUpperFirst = (value: string): string => {
  guardString(value);

  if (value === '') {
    return '';
  }

  if (value.length === 1) {
    return value.toUpperCase();
  }

  return value[0].toUpperCase() + value.slice(1);
};
