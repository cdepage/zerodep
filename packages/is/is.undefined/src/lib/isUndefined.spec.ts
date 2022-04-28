import { testData } from '../../../../testValues';
import { isUndefined } from './isUndefined';

// extract the positive test cases, the rest will be negative
const { undefineds, ...rest } = testData;
const positiveCases = [...undefineds];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isUndefined(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isUndefined(value)).toEqual(false);
  });
});
