import { testData } from '../../../../testValues';
import { stringWords } from './stringWords';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const positiveCases = [...strings];
const negativeCases = Object.values(rest).flat();

describe('stringWords', () => {
  it('should handle a single word', () => {
    expect(stringWords('California')).toEqual(['California']);
  });

  it('should handle a single word', () => {
    expect(stringWords('3.14 Pi')).toEqual(['3.14', 'Pi']);
  });

  it('should handle a single word', () => {
    expect(stringWords("I'll be there for you. How about you?")).toEqual([
      "I'll",
      'be',
      'there',
      'for',
      'you',
      'How',
      'about',
      'you',
    ]);
  });

  it('should handle an empty string', () => {
    expect(stringWords('')).toEqual([]);
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringWords(value);
    expect(fn).toThrow('Value is not a string');
  });
});
