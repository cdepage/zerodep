import { testData } from '../../../../testValues';
import { isRegex } from './isRegex';

// extract the positive test cases, the rest will be negative
const { regexes, ...rest } = testData;
const positiveCases = [...regexes];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isRegex(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isRegex(value)).toEqual(false);
  });
});
