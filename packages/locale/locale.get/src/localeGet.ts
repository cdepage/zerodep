import { TypesLocales } from '@zerodep/types.locales';
import { formatLocale } from './lib/formatLocale';
import { getBrowserLocales } from './lib/getBrowserLocales';
import { getIntlLocales } from './lib/getIntlLocales';
import { getNodeLocales } from './lib/getNodeLocales';

const mostRecentCache: Record<string, string[]> = {};

export const localeGet = (fallback: TypesLocales | string = 'en-US'): string[] => {
  const fallbackLocale = formatLocale(fallback);

  // only get/map/set the locales if we haven't done it already for this language
  if (!mostRecentCache[fallbackLocale]) {
    // pull all possible locales for the browser or node environments, and the fallback value
    const availableLocales = new Set([
      ...getBrowserLocales(),
      ...getNodeLocales(),
      ...getIntlLocales(),
    ]);

    // sort the available locales into full values vs language-only values
    const locales: string[] = [];
    const languages: string[] = [];
    for (const item of availableLocales) {
      if (item.includes('-')) {
        locales.push(item);
      } else {
        languages.push(item);
      }
    }

    // add the fallback to teh end of the languages (not the locales)
    // - ensures it's the last item of the returned array
    // - if it's not already in the list of locales
    if (!locales.includes(fallbackLocale)) {
      languages.push(fallbackLocale);
    }

    // return the most likely language+region first, followed by languages
    mostRecentCache[fallbackLocale] = [...locales, ...languages];
  }

  return mostRecentCache[fallbackLocale];
};
