import { testData } from '../../../../testValues';
import { stringTitleCase } from './stringTitleCase';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const negativeCases = Object.values(rest).flat();

describe('stringTitleCase', () => {
  it('should handle a series of words', () => {
    expect(stringTitleCase('the quick brown fox JUMPED')).toEqual(
      'The Quick Brown Fox JUMPED'
    );
  });

  it('should handle words prefixed with numbers', () => {
    expect(stringTitleCase('3.14 pi')).toEqual('3.14 Pi');
  });

  it('should handle a single letter', () => {
    expect(stringTitleCase('a')).toEqual('A');
  });

  it('should handle a hyphenated string', () => {
    expect(stringTitleCase('sanchez-ferrero')).toEqual('Sanchez-Ferrero');
  });

  it('should handle a string with an apostrophe', () => {
    expect(stringTitleCase("o'neill")).toEqual("O'Neill");
  });

  it('should handle a string with a possessive apostrophe', () => {
    expect(stringTitleCase("john's")).toEqual("John's");
  });

  it('should handle a string with a contraction t', () => {
    expect(stringTitleCase("doesn't")).toEqual("Doesn't");
  });

  it('should handle a string with a first letter t', () => {
    expect(stringTitleCase("t'challa")).toEqual("T'Challa");
  });

  it('should handle an empty string', () => {
    expect(stringTitleCase('')).toEqual('');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringTitleCase(value);
    expect(fn).toThrow('Value is not a string');
  });
});
