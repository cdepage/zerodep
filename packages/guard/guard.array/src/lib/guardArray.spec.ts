import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { testData } from '../../../../testValues';
import { guardArray, GuardArrayOptions } from './guardArray';

// extract the positive test cases, the rest will be negative
const { arrays, ...rest } = testData;
const positiveCases = [...arrays];
const negativeCases = Object.values(rest).flat();

describe('guardInteger', () => {
  describe('with default options', () => {
    const guard = guardArray();

    it('should throw a ZeroDepErrorGuardType error when invalid', () => {
      // @ts-ignore
      const fn = () => guard('not an array');
      expect(fn).toThrow(ZeroDepErrorGuardType);
    });

    // @ts-ignore
    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      // @ts-ignore
      expect(guard(value)).toEqual(value);
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
    const guard = guardArray(options);

    it('should throw a ZeroDepErrorGuardRange error when array too small', () => {
      const fn = () => guard([1]);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Array has fewer than 2 items');
    });

    it('should allow a bigint at the lower limit', () => {
      const value = ['a', 'b'];
      expect(guard(value)).toEqual(value);
    });

    it('should allow a bigint at the upper limit', () => {
      const value = ['a', 'b', 'c', 'd', 'e'];
      expect(guard(value)).toEqual(value);
    });

    it('should throw a ZeroDepErrorGuardRange error when bigint too large', () => {
      const fn = () => guard([1, 2, 3, 4, 5, 6]);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Array has more than 5 items');
    });
  });
});
