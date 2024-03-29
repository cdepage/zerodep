import { testData } from '../../../../testValues';
import { isMap } from './isMap';

// extract the positive test cases, the rest will be negative
const { maps, ...rest } = testData;
const positiveCases = [...maps];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isMap(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isMap(value)).toEqual(false);
    }
  );
});
