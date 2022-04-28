import { testData } from '../../../../testValues';
import { isNil } from './isNil';

// extract the positive test cases, the rest will be negative
const { nulls, undefineds, ...rest } = testData;
const positiveCases = [...nulls, ...undefineds];
const negativeCases = Object.values(rest).flat();

describe('isFunction', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isNil(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isNil(value)).toEqual(false);
  });
});
