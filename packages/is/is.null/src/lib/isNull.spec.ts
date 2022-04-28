import { testData } from '../../../../testValues';
import { isNull } from './isNull';

// extract the positive test cases, the rest will be negative
const { nulls, ...rest } = testData;
const positiveCases = [...nulls];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isNull(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isNull(value)).toEqual(false);
  });
});
