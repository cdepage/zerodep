import { testData } from '../../../../testValues';
import { isWeakMap } from './isWeakMap';

// extract the positive test cases, the rest will be negative
const { weakmaps, ...rest } = testData;
const positiveCases = [...weakmaps];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isWeakMap(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isWeakMap(value)).toEqual(false);
    }
  );
});
