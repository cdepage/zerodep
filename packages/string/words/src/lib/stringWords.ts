import { ZeroDepError } from '@zerodep/errors';
import { guardString } from '@zerodep/guard-string';
import { isRegExp } from '@zerodep/is-regexp';
import { isString } from '@zerodep/is-string';
import { stringTrim } from '@zerodep/string-trim';

export const stringWords = (
  value: string,
  separator: string | RegExp = ' ',
): string[] => {
  guardString(value);
  if (!isString(separator) && !isRegExp(separator)) {
    throw new ZeroDepError('Separator is not a string or RegExp');
  }

  return value
    .split(separator)
    .map((val) => stringTrim(val, '.'))
    .map((val) => stringTrim(val, '?'))
    .map((val) => stringTrim(val, '!'))
    .filter((val) => val);
};
