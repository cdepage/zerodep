import * as utils from './index';

describe('Utils barrel package', () => {
  it('should export specific packages and interfaces', () => {
    expect(Object.keys(utils)).toEqual(['canIterate']);
  });
});
