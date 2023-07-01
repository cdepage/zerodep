import { testData } from '../../../../testValues';
import { stringLowerFirst } from './stringLowerFirst';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const negativeCases = Object.values(rest).flat();

describe('stringLowerFirst', () => {
  it('should handle a series of letters', () => {
    expect(stringLowerFirst('test String')).toEqual('test String');
  });

  it('should handle a series of numbers', () => {
    expect(stringLowerFirst('3.14 pi')).toEqual('3.14 pi');
  });

  it('should keep subsequent capitalization', () => {
    expect(stringLowerFirst('strING')).toEqual('strING');
  });

  it('should handle a single letter', () => {
    expect(stringLowerFirst('a')).toEqual('a');
  });

  it('should handle an empty string', () => {
    expect(stringLowerFirst('')).toEqual('');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringLowerFirst(value);
    expect(fn).toThrow('Value is not a string');
  });
});
