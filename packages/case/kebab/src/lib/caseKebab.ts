import { guardString } from '@zerodep/guard-string';
import { stringDeburr } from '@zerodep/string-deburr';

export const caseKebab = (value: string): string => {
  guardString(value);

  const camel = stringDeburr(value)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^a-z\d]/gi, ' ')
    .replace(/^\d+/, '')
    .trim()
    .replace(/ +/g, '-');

  return camel.toLowerCase();
};
