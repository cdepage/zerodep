import { addressListStreets } from './addressListStreets';

describe('addressListStreets', () => {
  it('should be an object', () => {
    expect(addressListStreets).toHaveProperty('RD');
    expect(addressListStreets).toHaveProperty('CLL');
  });
});
