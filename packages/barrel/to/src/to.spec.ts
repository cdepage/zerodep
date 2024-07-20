import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"To" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toEqual([
      'ZeroDepError',
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
