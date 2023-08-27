import {
  secondariesWithoutUnits,
  secondariesWithUnits,
} from './addressListSecondaries';

describe('addressListSecondaries', () => {
  it('should be an object', () => {
    expect(secondariesWithUnits).toHaveProperty('APT');
    expect(secondariesWithoutUnits).toHaveProperty('BSMT');
  });
});
