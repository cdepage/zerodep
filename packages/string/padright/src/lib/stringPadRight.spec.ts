import { stringPadRight } from './stringPadRight';

describe('stringPadRight', () => {
  it('should pad a number', () => {
    expect(stringPadRight(1, 3, '0')).toEqual('100');
  });

  it('should pad a string', () => {
    expect(stringPadRight('bc', 3, 'a')).toEqual('bca');
  });

  it('should pad a float', () => {
    expect(stringPadRight(3.14, 6, '0')).toEqual('3.1400');
  });

  it('should throw when the value is not a string or number', () => {
    // @ts-ignore
    const fn = () => stringPadRight({}, 5, '0');
    expect(fn).toThrow('Value is not a string');
  });
});
