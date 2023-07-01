import { ZeroDepError } from '@zerodep/errors';
import { testData } from '../../../../testValues';
import { guardObject, guardObjectHOF, GuardObjectOptions } from './guardObject';

// extract the positive test cases, the rest will be negative
const { objectLiteralsSafe, objectLiteralsUnsafe, ...rest } = testData;
const positiveCases = [...objectLiteralsSafe, ...objectLiteralsUnsafe];
const negativeCases = Object.values(rest).flat();

describe('guardInteger', () => {
  describe('with default options', () => {
    const guard = guardObject;

    it('should throw a ZeroDepError error when invalid', () => {
      // @ts-ignore
      const fn = () => guard('not an object');
      expect(fn).toThrow(ZeroDepError);
    });

    // @ts-ignore
    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      // @ts-ignore
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      // @ts-ignore
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not an object');
    });
  });

  describe('with custom options', () => {
    const options: GuardObjectOptions = { minQuantity: 2, maxQuantity: 5 };
    const guard = guardObjectHOF(options);

    it('should throw a ZeroDepError error when object too small', () => {
      const fn = () => guard({ a: 1 });
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Object has fewer than 2 items');
    });

    it('should allow a bigint at the lower limit', () => {
      const value = { a: 1, b: 2 };
      expect(guard(value)).toBeUndefined();
    });

    it('should allow a bigint at the upper limit', () => {
      const value = { a: 1, b: 2, c: 3, d: 4, e: 5 };
      expect(guard(value)).toBeUndefined();
    });

    it('should throw a ZeroDepError error when bigint too large', () => {
      const fn = () => guard({ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 });
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Object has more than 5 items');
    });
  });
});
