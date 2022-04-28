import { testData } from '../../../../testValues';
import { isNumber } from './isNumber';

// extract the positive test cases, the rest will be negative
const { integers, integersENotation, floats, floatENotation, ...rest } = testData;
const positiveCases = [...integers, ...integersENotation, ...floats, ...floatENotation];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isNumber(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isNumber(value)).toEqual(false);
  });
});
