import { testData } from '../../../../testValues';
import { isIterable } from './isIterable';

// extract the positive test cases, the rest will be negative
const { arrays, sets, maps, generators, typedArrays, ...rest } = testData;
const positiveCases = [...arrays, ...sets, ...maps, ...generators, ...typedArrays];
const negativeCases = Object.values(rest).flat();

describe('isIterable', () => {
  // @ts-ignore
  test.each(positiveCases)('should allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isIterable(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
    // @ts-ignore
    expect(isIterable(value)).toEqual(false);
  });
});
