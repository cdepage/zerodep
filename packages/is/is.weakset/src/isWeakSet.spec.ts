import { testData } from '../../../testValues';
import { isWeakSet } from './isWeakSet';

// extract the positive test cases, the rest will be negative
const { weaksets, ...rest } = testData;
const positiveCases = [...weaksets];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isWeakSet(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isWeakSet(value)).toEqual(false);
  });
});
