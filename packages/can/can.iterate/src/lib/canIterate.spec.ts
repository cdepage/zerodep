import { testData } from '../../../../testValues';
import { canIterate } from './canIterate';

// extract the positive test cases, the rest will be negative
const { arrays, sets, maps, generators, typedArrays, ...rest } = testData;
const positiveCases = [...arrays, ...sets, ...maps, ...generators, ...typedArrays];
const negativeCases = Object.values(rest).flat();

describe('canIterate', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(canIterate(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should return FALSE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(canIterate(value)).toEqual(false);
  });
});
