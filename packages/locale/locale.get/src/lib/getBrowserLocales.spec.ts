import { getBrowserLocales } from './getBrowserLocales';

describe('getBrowserLocales', () => {
  describe('in a Node environment (no "window" object)', () => {
    let windowSpy: any;

    beforeEach(() => {
      windowSpy = jest.spyOn(window, 'window', 'get');
    });
    afterEach(() => {
      windowSpy.mockRestore();
    });

    it('should return an empty array', () => {
      windowSpy.mockReturnValue(undefined);
      expect(getBrowserLocales()).toEqual([]);
    });
  });

  describe('with mocked window', () => {
    let languagesSpy: any;
    let languageSpy: any;

    beforeEach(() => {
      languagesSpy = jest.spyOn(window.navigator, 'languages', 'get');
      languageSpy = jest.spyOn(window.navigator, 'language', 'get');
    });

    afterEach(() => {
      languagesSpy.mockRestore();
      languageSpy.mockRestore();
    });

    it('should return a locale from the window', () => {
      languagesSpy.mockReturnValue(['fr-FR', 'fr']);
      languageSpy.mockReturnValue('fr-CH');

      expect(getBrowserLocales()).toEqual(['fr-FR', 'fr', 'fr-CH']);
    });

    it('should return a locale from the window.navigator.languages', () => {
      languagesSpy.mockReturnValue(['fr-FR', 'fr']);
      languageSpy.mockReturnValue(undefined);

      expect(getBrowserLocales()).toEqual(['fr-FR', 'fr']);
    });

    it('should return a locale from the window.navigator.language', () => {
      languagesSpy.mockReturnValue(undefined);
      languageSpy.mockReturnValue('fr-CH');

      expect(getBrowserLocales()).toEqual(['fr-CH']);
    });
  });
});
