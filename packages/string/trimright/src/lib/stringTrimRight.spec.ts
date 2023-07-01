import { testData } from '../../../../testValues';
import { stringTrimRight } from './stringTrimRight';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const negativeCases = Object.values(rest).flat();

describe('stringTrimRight', () => {
  it('should handle a single word with defaults', () => {
    expect(stringTrimRight('some term   ')).toEqual('some term');
  });

  it('should handle a single word with specified char as string', () => {
    expect(stringTrimRight('some term xxx', 'x')).toEqual('some term ');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringTrimRight(value);
    expect(fn).toThrow('Value is not a string');
  });
});
