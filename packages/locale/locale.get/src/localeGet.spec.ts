import * as getBrowserLocales from './lib/getBrowserLocales';
import * as getIntlLocales from './lib/getIntlLocales';
import * as getNodeLocales from './lib/getNodeLocales';
import { localeGet } from './localeGet';

describe('getLocale', () => {
  let getBrowserLocalesSpy: any;
  let getIntlLocalesSpy: any;
  let getNodeLocalesSpy: any;

  beforeEach(() => {
    getBrowserLocalesSpy = jest.spyOn(getBrowserLocales, 'getBrowserLocales');
    getIntlLocalesSpy = jest.spyOn(getIntlLocales, 'getIntlLocales');
    getNodeLocalesSpy = jest.spyOn(getNodeLocales, 'getNodeLocales');
  });

  afterEach(() => {
    getBrowserLocalesSpy.mockRestore();
    getIntlLocalesSpy.mockRestore();
    getNodeLocalesSpy.mockRestore();
  });

  it('should return the locale when in a browser environment', () => {
    getBrowserLocalesSpy.mockReturnValue(['fr-CH']);
    getNodeLocalesSpy.mockReturnValue([]);
    getIntlLocalesSpy.mockReturnValue([]);

    const fallback = 'fr-BE';
    expect(localeGet(fallback)).toEqual(['fr-CH', fallback]);

    expect(getBrowserLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getNodeLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getIntlLocalesSpy).toHaveBeenCalledTimes(1);
  });

  it('should return the locale from the Intl values', () => {
    getBrowserLocalesSpy.mockReturnValue([]);
    getNodeLocalesSpy.mockReturnValue([]);
    getIntlLocalesSpy.mockReturnValue(['fr-CA']);

    const fallback = 'en-GB';
    expect(localeGet(fallback)).toEqual(['fr-CA', fallback]);

    expect(getBrowserLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getNodeLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getIntlLocalesSpy).toHaveBeenCalledTimes(1);
  });

  it('should return the locale from the Node values', () => {
    getBrowserLocalesSpy.mockReturnValue([]);
    getNodeLocalesSpy.mockReturnValue(['fr-FR']);
    getIntlLocalesSpy.mockReturnValue([]);

    const fallback = 'en-ZA';
    expect(localeGet(fallback)).toEqual(['fr-FR', fallback]);

    expect(getBrowserLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getNodeLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getIntlLocalesSpy).toHaveBeenCalledTimes(1);
  });

  it('should append the fallback locale if no other lang+region values are found', () => {
    getBrowserLocalesSpy.mockReturnValue(['en']);
    getIntlLocalesSpy.mockReturnValue(['es']);
    getNodeLocalesSpy.mockReturnValue(['de']);

    const fallback = 'en-AU';
    expect(localeGet(fallback)).toEqual(['en', 'de', 'es', fallback]);

    expect(getBrowserLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getNodeLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getIntlLocalesSpy).toHaveBeenCalledTimes(1);
  });

  it('should append the default fallback locale if no languages or regions are found and no fallback specified', () => {
    getBrowserLocalesSpy.mockReturnValue([]);
    getNodeLocalesSpy.mockReturnValue([]);
    getIntlLocalesSpy.mockReturnValue([]);

    expect(localeGet()).toEqual(['en-US']);

    expect(getBrowserLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getNodeLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getIntlLocalesSpy).toHaveBeenCalledTimes(1);
  });

  it('should deduplicate results', () => {
    getBrowserLocalesSpy.mockReturnValue(['de-DE']);
    getNodeLocalesSpy.mockReturnValue(['de-DE']);
    getIntlLocalesSpy.mockReturnValue(['de-DE']);

    expect(localeGet('de-DE')).toEqual(['de-DE']);

    expect(getBrowserLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getNodeLocalesSpy).toHaveBeenCalledTimes(1);
    expect(getIntlLocalesSpy).toHaveBeenCalledTimes(1);
  });
});
