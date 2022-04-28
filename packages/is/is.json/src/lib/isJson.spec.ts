import { testData } from '../../../../testValues';
import { isJson } from './isJson';

// extract the positive test cases, the rest will be negative
const { arrays, objectLiterals, ...rest } = testData;
const positiveCases = [...arrays, ...objectLiterals];
const negativeCases = Object.values(rest).flat();

describe('isJson', () => {
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    expect(isJson(value)).toEqual(true);
  });

  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    expect(isJson(value)).toEqual(false);
  });
});
