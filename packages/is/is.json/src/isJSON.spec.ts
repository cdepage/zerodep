import { testData } from '../../../testValues';
import { isJSON } from './isJSON';

// extract the positive test cases, the rest will be negative
const { arraysSafe, objectLiteralsSafe, ...rest } = testData;
const positiveCases = [...arraysSafe, ...objectLiteralsSafe];
const negativeCases = Object.values(rest).flat();

describe('isJSON', () => {
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    expect(isJSON(value)).toEqual(true);
  });

  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    expect(isJSON(value)).toEqual(false);
  });
});
