import * as guards from './index';

describe('Guards barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(guards)).toEqual([
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
