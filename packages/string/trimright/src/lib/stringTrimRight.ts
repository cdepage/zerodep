import { guardString } from '@zerodep/guard-string';

export const stringTrimRight = (value: string, char = ''): string => {
  guardString(value);

  // short-circuit: use built-in method, if possible
  if (char === '') {
    return value.trimEnd();
  }

  // ensure the character in the regex is regex-safe
  const safeChar = ['.', '?'].includes(char) ? `\\${char}` : char;
  const regex = new RegExp(`${safeChar}+$`);

  return value.replace(regex, '');
};
