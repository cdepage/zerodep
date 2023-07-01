import { testData } from '../../../../testValues';
import { isInteger } from './isInteger';

// extract the positive test cases, the rest will be negative
const { integers, integersENotation, ...rest } = testData;
const positiveCases = [...integers, ...integersENotation];
const negativeCases = Object.values(rest).flat();

describe('isInteger', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isInteger(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isInteger(value)).toEqual(false);
    }
  );
});
