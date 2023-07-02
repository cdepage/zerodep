import { Stringifiables, toString } from '@zerodep/to-string';

/**
 * A really fast and somewhat weak hashing algorithm.
 *
 * @source https://github.com/darkskyapp/string-hash/blob/master/index.js
 * @date 2023-07-01
 */
export const hash = (val: Stringifiables) => {
  const str = toString(val);
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
};
