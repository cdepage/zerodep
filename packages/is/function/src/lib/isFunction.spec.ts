import { testData } from '../../../../testValues';
import { isFunction } from './isFunction';

// extract the positive test cases, the rest will be negative
const { classes, functions, ...rest } = testData;
const positiveCases = [...classes, ...functions];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isFunction(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isFunction(value)).toEqual(false);
    }
  );
});
