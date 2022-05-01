import * as converters from './index';

describe('To barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(converters).sort()).toEqual([
      'ZeroDepErrorTo',
      'toJSON',
      'toJSONHOF',
      'toString',
      'toStringHOF',
    ]);
  });
});
