import { formatLocale } from './formatLocale';

export const getNodeLocales = (): string[] => {
  // @ts-ignore
  const env = process?.env;
  const locales: Set<string> = new Set();

  // @ts-ignore
  [env?.LC_ALL, env.LC_MESSAGES, env.LANG, env.LANGUAGE]
    .filter((l) => l)
    .map((l) => l.replace(/[.:].*/, '').replace(/_/g, '-'))
    .forEach((l) => locales.add(formatLocale(l)));

  return [...locales];
};
