import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"Guard" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toStrictEqual([
      'ZeroDepError',
      'guardArray',
      'guardArrayHOF',
      'guardBigInt',
      'guardBigIntHOF',
      'guardBoolean',
      'guardBooleanHOF',
      'guardDate',
      'guardDateHOF',
      'guardFloat',
      'guardFloatHOF',
      'guardFunction',
      'guardFunctionHOF',
      'guardInteger',
      'guardIntegerHOF',
      'guardNumber',
      'guardNumberHOF',
      'guardObject',
      'guardObjectHOF',
      'guardPojo',
      'guardPojoHOF',
      'guardString',
      'guardStringHOF',
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
