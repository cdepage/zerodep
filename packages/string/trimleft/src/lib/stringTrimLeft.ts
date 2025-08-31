import { guardString } from '@zerodep/guard-string';

export const stringTrimLeft = (value: string, char = ''): string => {
  guardString(value);

  // short-circuit: use built-in method, if possible
  if (char === '') {
    return value.trimStart();
  }

  // ensure the character in the regexp is regexp-safe
  const safeChar = ['.', '?'].includes(char) ? `\\${char}` : char;
  const regexp = new RegExp(`^${safeChar}+`);

  return value.replace(regexp, '');
};
