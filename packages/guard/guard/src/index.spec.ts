import * as guards from './index';

describe('Guards barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(guards).sort()).toStrictEqual([
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
});
