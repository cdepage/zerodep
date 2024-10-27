import { ZeroDepError } from '@zerodep/errors';
import { testData } from '../../../../testValues';
import { guardFloat, guardFloatHOF, GuardFloatOptions } from './guardFloat';

// extract the positive test cases, the rest will be negative
const { floats, floatENotation, ...rest } = testData;
const positiveCases = [...floats, ...floatENotation];
const negativeCases = Object.values(rest).flat();

describe('guardFloat', () => {
  describe('with default options', () => {
    const guard = guardFloat;

    it('should throw a ZeroDepError error when invalid', () => {
      const fn = () => guard('not an integer');
      expect(fn).toThrow(ZeroDepError);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      // @ts-ignore
      if (['positive zero', 'negative zero'].includes(title)) {
        expect(guard(value)).toBeUndefined();
      } else {
        const fn = () => guard(value);
        expect(fn).toThrow('Value is not a float');
      }
    });
  });

  describe('with custom options', () => {
    const options: GuardFloatOptions = { min: 50, max: 100 };
    const guard = guardFloatHOF(options);

    it('should throw a ZeroDepError error when float too small', () => {
      const fn = () => guard(49.9);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Float is less than 50');
    });

    it('should allow an float at the lower limit', () => {
      expect(guard(50.1)).toBeUndefined();
    });

    it('should allow an float at the upper limit', () => {
      expect(guard(99.999)).toBeUndefined();
    });

    it('should throw a ZeroDepError error when float too large', () => {
      const fn = () => guard(100.1);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Float is greater than 100');
    });
  });
});
