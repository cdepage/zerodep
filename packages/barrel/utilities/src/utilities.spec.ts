import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"Utilities" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toStrictEqual([
      'ZeroDepError',
      'addressCountry',
      'addressDirectional',
      'addressNormalize',
      'addressParse',
      'addressSecondary',
      'addressState',
      'addressZip',
      'getZipCountryState',
    ]);
  });

  // contrived test for barrel-file
  test.each(keys)('should have %s', (name) => {
    expect(['function', 'object', 'undefined']).toContain(
      // @ts-ignore
      typeof packages[name]
    );
  });
});
