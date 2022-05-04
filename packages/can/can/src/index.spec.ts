import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"Can" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(packages)).toEqual(['canIterate']);
  });

  // contrived test for barrel-file
  test.each(keys)('should have %s', (name) => {
    // @ts-ignore
    expect(['function', 'object', 'undefined']).toContain(typeof packages[name]);
  });
});
