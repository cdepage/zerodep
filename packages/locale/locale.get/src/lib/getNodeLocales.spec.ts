import { getNodeLocales } from './getNodeLocales';

describe('getNodeLocales', () => {
  it('should return an array of one or more locales', () => {
    expect(getNodeLocales().length).toBeGreaterThanOrEqual(1);
  });
});
