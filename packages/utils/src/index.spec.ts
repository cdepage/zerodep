import * as utils from './index';

describe('Utils barrel package', () => {
  it('should export specific packages and interfaces', () => {
    // console.log(Object.keys(utils))
    expect(Object.keys(utils)).toEqual([
      'ZeroDepError',
      'ZeroDepErrorGuard',
      'ZeroDepErrorGuardType',
      'ZeroDepErrorGuardRange',
      'guardFloat',
      'guardInteger',
      'guardNumber',
      'guardString',
    ]);
  });
});
