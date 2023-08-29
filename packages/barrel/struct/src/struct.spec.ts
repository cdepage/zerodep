import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"Struct" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toStrictEqual([
      'structCollectionFactory',
      'structLinkedListFactory',
      'structQueueFactory',
      'structStackFactory',
      'structTreeFactory',
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
