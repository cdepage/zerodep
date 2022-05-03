import { getIntlLocales } from './getIntlLocales';

describe('getIntlLocales', () => {
  it('should return an array of one or more locales', () => {
    expect(getIntlLocales().length).toBeGreaterThanOrEqual(1);
  });
});
