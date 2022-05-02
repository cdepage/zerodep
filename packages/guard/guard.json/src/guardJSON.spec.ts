import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { testData } from '../../../testValues';
import { guardJSON, guardJSONHOF, GuardJSONOptions } from './guardJSON';

// extract the positive test cases, the rest will be negative
const { objectLiteralsSafe, arraysSafe, ...rest } = testData;
const positiveCases = [...objectLiteralsSafe, ...arraysSafe];
const negativeCases = Object.values(rest).flat();

describe('guardJSON', () => {
  describe('with default options', () => {
    const guard = guardJSON;

    it('should throw a ZeroDepErrorGuardType error when invalid', () => {
      const fn = () => guard('not an integer');
      expect(fn).toThrow(ZeroDepErrorGuardType);
    });

    // @ts-ignore
    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a JSON object');
    });
  });

  describe('with custom options', () => {
    const options: GuardJSONOptions = { minQuantity: 2, maxQuantity: 5 };
    const guard = guardJSONHOF(options);

    it('should throw a ZeroDepErrorGuardRange error when float too small', () => {
      const fn = () => guard({ just: 'one' });
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('JSON object has fewer than 2 items');
    });

    it('should allow an float at the lower limit', () => {
      expect(guard({ one: 'arg', two: 'args' })).toBeUndefined();
    });

    it('should allow an float at the upper limit', () => {
      expect(guard({ a: 1, b: 2, c: 3, d: 4, e: 5 })).toBeUndefined();
    });

    it('should throw a ZeroDepErrorGuardRange error when float too large', () => {
      const fn = () => guard({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9 });
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('JSON object has more than 5 items');
    });
  });
});
