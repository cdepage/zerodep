import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"Parsers" barrel package', () => {
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
      'geoCountry',
      'geoCountryInfoMap',
      'geoCountryIso',
      'geoCountryNameMap',
      'geoState',
      'geoStateIso',
      'geoStateNameMapCA',
      'geoStateNameMapUS',
      'getZipCountryState',
      'stateInfoMap',
      'toBoolean',
      'toDate',
      'toInteger',
      'toNumber',
      'toPojo',
      'toString',
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
