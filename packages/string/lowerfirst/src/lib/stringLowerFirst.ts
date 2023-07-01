import { guardString } from '@zerodep/guard-string';

export const stringLowerFirst = (value: string): string => {
  guardString(value);

  if (value === '') {
    return '';
  }

  if (value.length === 1) {
    return value.toLowerCase();
  }

  return value[0].toLowerCase() + value.slice(1);
};
