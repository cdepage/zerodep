import {ZeroDepError} from '@zerodep/errors';
import { guardString } from '@zerodep/guard-string';
import {isRegex} from '@zerodep/is-regex';
import {isString} from '@zerodep/is-string';
import { stringTrim } from '@zerodep/string-trim';

export const stringWords = (
  value: string,
  separator: string | RegExp = ' '
): string[] => {
  guardString(value);
  if (!isString(separator) && !isRegex(separator)) {
    throw new ZeroDepError('Separator is not a string or Regex');
  }

  return value
    .split(separator)
    .map((val) => stringTrim(val, '.'))
    .map((val) => stringTrim(val, '?'))
    .map((val) => stringTrim(val, '!'))
    .filter((val) => val);
};
