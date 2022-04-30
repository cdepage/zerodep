import { testData } from '../../../testValues';
import { isJson } from './isJson';

// extract the positive test cases, the rest will be negative
const { arraysSafe, objectLiteralsSafe, ...rest } = testData;
const positiveCases = [...arraysSafe, ...objectLiteralsSafe];
const negativeCases = Object.values(rest).flat();

describe('isJson', () => {
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    expect(isJson(value)).toEqual(true);
  });

  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    expect(isJson(value)).toEqual(false);
  });
});
