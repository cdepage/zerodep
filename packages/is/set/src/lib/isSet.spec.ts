import { testData } from '../../../../testValues';
import { isSet } from './isSet';

// extract the positive test cases, the rest will be negative
const { sets, ...rest } = testData;
const positiveCases = [...sets];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isSet(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isSet(value)).toEqual(false);
    }
  );
});
