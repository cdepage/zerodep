import { colorHex2Hsl } from './colorHex2Hsl';

describe('colorHex2hsl', () => {
  it('should return a 6-digit hex code with prefix', () => {
    expect(colorHex2Hsl('#c0c0c0')).toEqual('0 0% 75%');
  });

  it('should return a 6-digit hex code without prefix', () => {
    expect(colorHex2Hsl('c0c0c0')).toEqual('0 0% 75%');
  });

  it('should return a 3-digit hex code with prefix', () => {
    expect(colorHex2Hsl('#2a9')).toEqual('173 67% 2%');
  });

  it('should return a 3-digit hex code without prefix', () => {
    expect(colorHex2Hsl('2a9')).toEqual('173 67% 2%');
  });
});
