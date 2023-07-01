import { guardString } from '@zerodep/guard-string';
import { stringUpperFirst } from '@zerodep/string-upperfirst';

export const stringTitleCase = (value: string): string => {
  guardString(value);

  return (
    value
      .split(' ')
      .map(stringUpperFirst)
      .join(' ')

      // hyphenated words
      .split('-')
      .map(stringUpperFirst)
      .join('-')

      // apostrophes - exception for certain contractions and possessives
      .split("'")
      .map((val, ndx) =>
        ndx === 1 && ['d', 'll', 'nt', 's', 't', 've'].includes(val)
          ? val
          : stringUpperFirst(val)
      )
      .join("'")
      .trim()
  );
};
