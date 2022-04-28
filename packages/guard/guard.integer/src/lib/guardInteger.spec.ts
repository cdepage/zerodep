import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { testData } from '../../../../testValues';
import { guardInteger, GuardIntegerOptions } from './guardInteger';

// extract the positive test cases, the rest will be negative
const { integers, integersENotation, ...rest } = testData;
const positiveCases = [...integers, ...integersENotation];
const negativeCases = Object.values(rest).flat();

describe('guardInteger', () => {
  describe('with default options', () => {
    const guard = guardInteger();

    it('should throw a ZeroDepErrorGuardType error when invalid', () => {
      const fn = () => guard('not an integer');
      expect(fn).toThrow(ZeroDepErrorGuardType);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toEqual(value);
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not an integer');
    });
  });

  describe('with custom options', () => {
    const options: GuardIntegerOptions = { min: 50, max: 100 };
    const guard = guardInteger(options);

    it('should throw a ZeroDepErrorGuardRange error when integer too small', () => {
      const fn = () => guard(49);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Integer is less than 50');
    });

    it('should allow an integer at the lower limit', () => {
      expect(guard(50)).toEqual(50);
    });

    it('should allow an integer at the upper limit', () => {
      expect(guard(100)).toEqual(100);
    });

    it('should throw a ZeroDepErrorGuardRange error when integer too large', () => {
      const fn = () => guard(101);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Integer is greater than 100');
    });
  });
});
