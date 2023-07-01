import { stringPadLeft } from './stringPadLeft';

describe('stringPadLeft', () => {
  it('should pad a number', () => {
    expect(stringPadLeft(1, 3, '0')).toEqual('001');
  });

  it('should pad a string', () => {
    expect(stringPadLeft('bc', 3, 'a')).toEqual('abc');
  });

  it('should pad a float', () => {
    expect(stringPadLeft(3.14, 6, '0')).toEqual('003.14');
  });

  it('should throw when the value is not a string or number', () => {
    // @ts-ignore
    const fn = () => stringPadLeft({}, 5, '0');
    expect(fn).toThrow('Value is not a string');
  });
});
