import { testData } from '../../../../testValues';
import { isSymbol } from './isSymbol';

// extract the positive test cases, the rest will be negative
const { symbols, ...rest } = testData;
const positiveCases = [...symbols];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isSymbol(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isSymbol(value)).toEqual(false);
  });
});
