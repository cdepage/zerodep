import { testData } from '../../../testValues';
import { isArray } from './isArray';

// extract the positive test cases, the rest will be negative
const { arraysSafe, arraysUnsafe, ...rest } = testData;
const positiveCases = [...arraysSafe, ...arraysUnsafe];
const negativeCases = Object.values(rest).flat();

describe('isInteger', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isArray(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isArray(value)).toEqual(false);
  });
});
