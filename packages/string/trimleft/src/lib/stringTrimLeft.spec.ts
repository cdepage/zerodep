import { testData } from '../../../../testValues';
import { stringTrimLeft } from './stringTrimLeft';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const negativeCases = Object.values(rest).flat();

describe('stringTrimLeft', () => {
  it('should handle a single word with defaults', () => {
    expect(stringTrimLeft('   some term')).toEqual('some term');
  });

  it('should handle a single word with specified char as string', () => {
    expect(stringTrimLeft('xxx some term', 'x')).toEqual(' some term');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringTrimLeft(value);
    expect(fn).toThrow('Value is not a string');
  });
});
