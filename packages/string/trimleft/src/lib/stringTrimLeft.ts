import { guardString } from '@zerodep/guard-string';

export const stringTrimLeft = (value: string, char = ''): string => {
  guardString(value);

  // short-circuit: use built-in method, if possible
  if (char === '') {
    return value.trimStart();
  }

  // ensure the character in the regex is regex-safe
  const safeChar = ['.', '?'].includes(char) ? `\\${char}` : char;
  const regex = new RegExp(`^${safeChar}+`);

  return value.replace(regex, '');
};
