import { testData } from '../../../testValues';
import { isObject } from './isObject';

// extract the positive test cases, the rest will be negative
const { objectLiterals, ...rest } = testData;
const positiveCases = [...objectLiterals];
const negativeCases = Object.values(rest).flat();

describe('isObject', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isObject(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isObject(value)).toEqual(false);
  });
});
