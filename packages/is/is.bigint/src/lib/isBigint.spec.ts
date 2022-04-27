import { testData } from '../../../testValues';
import { isBigInt } from './isBigInt';

// extract the positive test cases, the rest will be negative
const { bigInts, ...rest } = testData;
const positiveCases = [...bigInts];
const negativeCases = Object.values(rest).flat();

describe('isBigInt', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isBigInt(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isBigInt(value)).toEqual(false);
  });
});
