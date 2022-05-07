import * as errors from './index';

describe('Errors barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(errors).sort()).toStrictEqual([
      'ZeroDepError',
      'ZeroDepErrorFormat',
      'ZeroDepErrorGuard',
      'ZeroDepErrorGuardRange',
      'ZeroDepErrorGuardType',
      'ZeroDepErrorIs',
      'ZeroDepErrorTo',
    ]);
  });
});
