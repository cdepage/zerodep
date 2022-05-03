import { formatLocale } from './formatLocale';

export const getBrowserLocales = (): string[] => {
  // short-circuit
  if (typeof window === 'undefined' || !('navigator' in window)) {
    return [];
  }

  const { navigator } = window;
  const locales: Set<string> = new Set();

  for (const locale of navigator.languages || []) {
    locales.add(locale);
  }

  // @ts-ignore
  [navigator.language, navigator.userLanguage, navigator.browserLanguage, navigator.systemLanguage]
    .filter((l) => l)
    .forEach((l) => locales.add(formatLocale(l)));

  return [...locales];
};
