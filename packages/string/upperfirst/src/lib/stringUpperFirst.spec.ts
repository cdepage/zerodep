import { testData } from '../../../../testValues';
import { stringUpperFirst } from './stringUpperFirst';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const negativeCases = Object.values(rest).flat();

describe('stringUpperFirst', () => {
  it('should uppercase a series of letters', () => {
    expect(stringUpperFirst('test string')).toEqual('Test string');
  });

  it('should uppercase a series of numbers', () => {
    expect(stringUpperFirst('3.14 pi')).toEqual('3.14 pi');
  });

  it('should keep subsequent capitalization', () => {
    expect(stringUpperFirst('strING')).toEqual('StrING');
  });

  it('should capitalize a single letter', () => {
    expect(stringUpperFirst('a')).toEqual('A');
  });

  it('should handle an empty string', () => {
    expect(stringUpperFirst('')).toEqual('');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringUpperFirst(value);
    expect(fn).toThrow('Value is not a string');
  });
});
