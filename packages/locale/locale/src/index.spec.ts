import * as converters from './index';

describe('Locale barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(converters).sort()).toEqual(['localeGet', 'localeSettings']);
  });
});
