import { guardString } from '@zerodep/guard-string';
import { stringDeburr } from '@zerodep/string-deburr';
import { stringUpperFirst } from '@zerodep/string-upperfirst';

export const casePascal = (value: string): string => {
  guardString(value);

  const pascal = stringDeburr(value)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^a-z\d]/gi, ' ')
    .replace(/^\d+/, '')
    .replace(/ +/g, ' ')
    .split(' ')
    .map((val) => stringUpperFirst(val))
    .join('');

  return stringUpperFirst(pascal);
};
