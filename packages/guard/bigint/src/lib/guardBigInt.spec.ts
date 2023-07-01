import { ZeroDepError } from '@zerodep/errors';
import { testData } from '../../../../testValues';
import { guardBigInt, guardBigIntHOF, GuardBigIntOptions } from './guardBigInt';

// extract the positive test cases, the rest will be negative
const { bigInts, ...rest } = testData;
const positiveCases = [...bigInts];
const negativeCases = Object.values(rest).flat();

describe('guardBigInt', () => {
  describe('with default options', () => {
    const guard = guardBigInt;

    it('should throw a ZeroDepError error when invalid', () => {
      const fn = () => guard('not a BigInt');
      expect(fn).toThrow(ZeroDepError);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a BigInt');
    });
  });

  describe('with custom options', () => {
    const options: GuardBigIntOptions = { min: 50n, max: 100n };
    const guard = guardBigIntHOF(options);

    it('should throw a ZeroDepError error when BigInt too small', () => {
      const fn = () => guard(49n);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('BigInt is less than 50');
    });

    it('should allow a BigInt at the lower limit', () => {
      expect(guard(50n)).toBeUndefined();
    });

    it('should allow a BigInt at the upper limit', () => {
      expect(guard(100n)).toBeUndefined();
    });

    it('should throw a ZeroDepError error when BigInt too large', () => {
      const fn = () => guard(101n);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('BigInt is greater than 100');
    });
  });
});
