import { guardString } from '@zerodep/guard-string';
import { stringDeburr } from '@zerodep/string-deburr';
import { stringLowerFirst } from '@zerodep/string-lowerfirst';
import { stringUpperFirst } from '@zerodep/string-upperfirst';

export const caseCamel = (value: string): string => {
  guardString(value);

  const camel = stringDeburr(value)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^a-z\d]/gi, ' ')
    .replace(/^\d+/, '')
    .replace(/ +/g, ' ')
    .split(' ')
    .map((val) => stringUpperFirst(val))
    .join('');

  return stringLowerFirst(camel);
};
