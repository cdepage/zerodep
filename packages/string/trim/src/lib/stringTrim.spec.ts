import { testData } from '../../../../testValues';
import { stringTrim } from './stringTrim';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const negativeCases = Object.values(rest).flat();

describe('stringTrim', () => {
  it('should handle a single word with defaults', () => {
    expect(stringTrim('some term   ')).toEqual('some term');
  });

  it('should handle a single word with specified char as string', () => {
    expect(stringTrim('xxx some term xxx', 'x')).toEqual(' some term ');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringTrim(value);
    expect(fn).toThrow('Value is not a string');
  });
});
