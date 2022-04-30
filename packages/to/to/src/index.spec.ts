import * as converters from './index';

describe('Guards barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(converters).sort()).toEqual(['ZeroDepErrorTo', 'toJson', 'toString']);
  });
});
