import { guardString } from '@zerodep/guard-string';
import { stringTrim } from '@zerodep/string-trim';

export const stringWords = (
  value: string,
  separator: string | RegExp = ' '
): string[] => {
  guardString(value);

  return value
    .split(separator)
    .map((val) => stringTrim(val, '.'))
    .map((val) => stringTrim(val, '?'))
    .map((val) => stringTrim(val, '!'))
    .filter((val) => val);
};
