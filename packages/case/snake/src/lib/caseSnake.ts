import { guardString } from '@zerodep/guard-string';
import { stringDeburr } from '@zerodep/string-deburr';

export const caseSnake = (value: string): string => {
  guardString(value);

  const snake = stringDeburr(value)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[^a-z0-9]/gi, ' ')
    .replace(/^\d+/, '')
    .trim()
    .replace(/ +/g, '_');

  return snake.toLowerCase();
};
