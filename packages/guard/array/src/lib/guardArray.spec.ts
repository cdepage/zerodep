import { ZeroDepError } from '@zerodep/errors';
import { isInteger } from '@zerodep/is-integer';
import { testData } from '../../../../testValues';
import { guardArray, guardArrayHOF, GuardArrayOptions } from './guardArray';

// extract the positive test cases, the rest will be negative
const { arraysSafe, arraysUnsafe, ...rest } = testData;
const positiveCases = [...arraysSafe, ...arraysUnsafe];
const negativeCases = Object.values(rest).flat();

describe('guardInteger', () => {
  describe('with default options', () => {
    const guard = guardArray;

    it('should throw a ZeroDepError error when invalid', () => {
      // @ts-ignore
      const fn = () => guard('not an array');
      expect(fn).toThrow(ZeroDepError);
    });

    // @ts-ignore
    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      // @ts-ignore
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not an array');
    });
  });

  describe('with custom options', () => {
    const options: GuardArrayOptions = { minQuantity: 2, maxQuantity: 5 };
    const guard = guardArrayHOF(options);

    it('should throw a ZeroDepError error when array too small', () => {
      const fn = () => guard([1]);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Array has fewer than 2 items');
    });

    it('should allow an array with the fewest allowed number of items', () => {
      const value = ['a', 'b'];
      expect(guard(value)).toBeUndefined();
    });

    it('should allow an array with the maximum allowed number of items', () => {
      const value = ['a', 'b', 'c', 'd', 'e'];
      expect(guard(value)).toBeUndefined();
    });

    it('should throw a ZeroDepError error when bigint too large', () => {
      const fn = () => guard([1, 2, 3, 4, 5, 6]);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Array has more than 5 items');
    });

    const options2: GuardArrayOptions = { typeFn: isInteger };
    const guard2 = guardArrayHOF(options2);

    it('should allow an array of integers when restricted to integers', () => {
      const value = [1, 2, 3, 4];
      expect(guard2(value)).toBeUndefined();
    });

    it('should throw a ZeroDepError error when a non-int is added', () => {
      const fn = () => guard2([1, 2, 3, 4, 5, 'f']);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('An array item is of the incorrect type');
    });
  });
});
