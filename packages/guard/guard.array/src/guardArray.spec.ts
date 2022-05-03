import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/errors';
import { testData } from '../../../testValues';
import { guardArray, guardArrayHOF, GuardArrayOptions } from './guardArray';

// extract the positive test cases, the rest will be negative
const { arraysSafe, arraysUnsafe, ...rest } = testData;
const positiveCases = [...arraysSafe, ...arraysUnsafe];
const negativeCases = Object.values(rest).flat();

describe('guardInteger', () => {
  describe('with default options', () => {
    const guard = guardArray;

    it('should throw a ZeroDepErrorGuardType error when invalid', () => {
      // @ts-ignore
      const fn = () => guard('not an array');
      expect(fn).toThrow(ZeroDepErrorGuardType);
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

    it('should throw a ZeroDepErrorGuardRange error when array too small', () => {
      const fn = () => guard([1]);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
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

    it('should throw a ZeroDepErrorGuardRange error when bigint too large', () => {
      const fn = () => guard([1, 2, 3, 4, 5, 6]);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Array has more than 5 items');
    });
  });
});
