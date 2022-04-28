import { testData } from '../../../../testValues';
import { isString } from './isString';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const positiveCases = [...strings];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isString(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isString(value)).toEqual(false);
  });
});
