import {
  addressListDirectionals,
  getDirectionalNameFromAbbr,
} from './addressListDirectionals';

describe('addressListDirectionals', () => {
  it('should be an object', () => {
    expect(addressListDirectionals).toHaveProperty('NE');
    expect(addressListDirectionals).toHaveProperty('W');
  });

  it('should get the full name of a directional', () => {
    expect(getDirectionalNameFromAbbr('nw')).toEqual('NORTH WEST');
    expect(getDirectionalNameFromAbbr('s')).toEqual('SOUTH');
  });

  it('should return undefined for an unknown directional', () => {
    expect(getDirectionalNameFromAbbr('zz')).toBeUndefined();
  });
});
