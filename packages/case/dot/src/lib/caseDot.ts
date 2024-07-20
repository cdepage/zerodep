import { guardString } from '@zerodep/guard-string';
import { stringDeburr } from '@zerodep/string-deburr';

export const caseDot = (value: string): string => {
  guardString(value);

  const dot = stringDeburr(value)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^a-z0-9]/gi, ' ')
    .replace(/^\d+/, '')
    .trim()
    .replace(/ +/g, '.')
    .toLowerCase();

  return dot;
};
