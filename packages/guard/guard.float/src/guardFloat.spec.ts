import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/errors';
import { testData } from '../../../testValues';
import { guardFloat, guardFloatHOF, GuardFloatOptions } from './guardFloat';

// extract the positive test cases, the rest will be negative
const { floats, floatENotation, ...rest } = testData;
const positiveCases = [...floats, ...floatENotation];
const negativeCases = Object.values(rest).flat();

describe('guardInteger', () => {
  describe('with default options', () => {
    const guard = guardFloat;

    it('should throw a ZeroDepErrorGuardType error when invalid', () => {
      const fn = () => guard('not an integer');
      expect(fn).toThrow(ZeroDepErrorGuardType);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a float');
    });
  });

  describe('with custom options', () => {
    const options: GuardFloatOptions = { min: 50, max: 100 };
    const guard = guardFloatHOF(options);

    it('should throw a ZeroDepErrorGuardRange error when float too small', () => {
      const fn = () => guard(49.9);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Float is less than 50');
    });

    it('should allow an float at the lower limit', () => {
      expect(guard(50.1)).toBeUndefined();
    });

    it('should allow an float at the upper limit', () => {
      expect(guard(99.999)).toBeUndefined();
    });

    it('should throw a ZeroDepErrorGuardRange error when float too large', () => {
      const fn = () => guard(100.1);
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Float is greater than 100');
    });
  });
});
