import { testData } from '../../../../testValues';
import { isString } from './isString';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const positiveCases = [...strings];
const negativeCases = Object.values(rest).flat();

describe('isString', () => {
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    expect(isString(value)).toEqual(true);
  });

  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      expect(isString(value)).toEqual(false);
    }
  );
});
