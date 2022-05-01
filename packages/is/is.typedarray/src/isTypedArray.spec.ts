import { testData } from '../../../testValues';
import { isTypedArray } from './isTypedArray';

// extract the positive test cases, the rest will be negative
const { typedArrays, ...rest } = testData;
const positiveCases = [...typedArrays];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isTypedArray(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isTypedArray(value)).toEqual(false);
  });
});
