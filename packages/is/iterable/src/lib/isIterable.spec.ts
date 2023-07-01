import { testData } from '../../../../testValues';
import { isIterable } from './isIterable';

// extract the positive test cases, the rest will be negative
const {
  arraysSafe,
  arraysUnsafe,
  sets,
  maps,
  generators,
  typedArrays,
  ...rest
} = testData;
const positiveCases = [
  ...arraysSafe,
  ...arraysUnsafe,
  ...sets,
  ...maps,
  ...generators,
  ...typedArrays,
];
const negativeCases = Object.values(rest).flat();

describe('canIterate', () => {
  // @ts-ignore
  test.each(positiveCases)('should return TRUE for a/an %s', (title, value) => {
    // @ts-ignore
    expect(isIterable(value)).toEqual(true);
  });

  // @ts-ignore
  test.each(negativeCases)(
    'should return FALSE for a/an %s',
    // @ts-ignore
    (title, value) => {
      // @ts-ignore
      expect(isIterable(value)).toEqual(false);
    }
  );
});
