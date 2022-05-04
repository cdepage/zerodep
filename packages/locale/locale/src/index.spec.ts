import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"App" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toEqual(['localeGet', 'localeSettings']);
  });

  // contrived test for barrel-file
  test.each(keys)('should have %s', (name) => {
    // @ts-ignore
    expect(['function', 'object', 'undefined']).toContain(typeof packages[name]);
  });
});
