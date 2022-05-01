import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { testData } from '../../../testValues';
import { guardString, guardStringHOF, GuardStringOptions } from './guardString';

// extract the positive test cases, the rest will be negative
const { strings, ...rest } = testData;
const positiveCases = [...strings];
const negativeCases = Object.values(rest).flat();

describe('guardString', () => {
  describe('with default options', () => {
    const guard = guardString;

    it('should throw a ZeroDepErrorGuard error when invalid', () => {
      const fn = () => guard(0);
      expect(fn).toThrow(ZeroDepErrorGuardType);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a string');
    });
  });

  describe('with custom options', () => {
    const options: GuardStringOptions = { minLength: 1, maxLength: 10 };
    const guard = guardStringHOF(options);

    it('should throw a ZeroDepErrorGuardRange error when string too short', () => {
      const fn = () => guard('');
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('String is shorter than 1 character(s)');
    });

    it('should allow a string at the lower limit', () => {
      expect(guard('a')).toBeUndefined();
    });

    it('should allow an integer at the upper limit', () => {
      expect(guard('abcdefghij')).toBeUndefined();
    });

    it('should throw a ZeroDepErrorGuardRange error when integer too large', () => {
      const fn = () => guard('abcdefghijk');
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('String is longer than 10 character(s)');
    });
  });
});
