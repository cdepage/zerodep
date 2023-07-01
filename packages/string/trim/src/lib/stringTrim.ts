import { guardString } from '@zerodep/guard-string';

export const stringTrim = (value: string, char = ''): string => {
  guardString(value);

  // short-circuit: use built-in method, if possible
  if (char === '') {
    return value.trim();
  }

  // ensure the character in the regex is regex-safe
  const safeChar = ['.', '?'].includes(char) ? `\\${char}` : char;

  const regex1 = new RegExp(`^${safeChar}+`);
  const regex2 = new RegExp(`${safeChar}+$`);

  return value.replace(regex1, '').replace(regex2, '');
};
