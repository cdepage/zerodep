import * as packages from './index';

const keys = Object.keys(packages).sort();
describe('"App" barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(keys).toStrictEqual([
      'GuardArrayOptions',
      'GuardBigIntOptions',
      'GuardBooleanOptions',
      'GuardDateOptions',
      'GuardFloatOptions',
      'GuardFunctionOptions',
      'GuardIntegerOptions',
      'GuardJSONOptions',
      'GuardNumberOptions',
      'GuardObjectOptions',
      'GuardStringOptions',
      'ZeroDepError',
      'ZeroDepErrorGuard',
      'ZeroDepErrorGuardRange',
      'ZeroDepErrorGuardType',
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
      'guardJSON',
      'guardJSONHOF',
      'guardNumber',
      'guardNumberHOF',
      'guardObject',
      'guardObjectHOF',
      'guardString',
      'guardStringHOF',
    ]);
  });

  // contrived test for barrel-file
  test.each(keys)('should have %s', (name) => {
    // @ts-ignore
    expect(['function', 'object', 'undefined']).toContain(typeof packages[name]);
  });
});
