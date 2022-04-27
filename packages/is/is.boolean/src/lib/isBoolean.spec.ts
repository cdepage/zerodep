import { testData } from '../../../testValues';
import { isBoolean } from './isBoolean';

// extract the positive test cases, the rest will be negative
const { booleans, ...rest } = testData;
const positiveCases = [...booleans];
const negativeCases = Object.values(rest).flat();

describe('isInteger', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isBoolean(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isBoolean(value)).toEqual(false);
  });
});
