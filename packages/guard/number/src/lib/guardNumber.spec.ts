import { ZeroDepError } from '@zerodep/errors';
import { testData } from '../../../../testValues';
import { guardNumber, guardNumberHOF, GuardNumberOptions } from './guardNumber';

// extract the positive test cases, the rest will be negative
const { floats, floatENotation, integers, integersENotation, ...rest } =
  testData;
const positiveCases = [
  ...floats,
  ...floatENotation,
  ...integers,
  ...integersENotation,
];
const negativeCases = Object.values(rest).flat();

describe('guardNumber', () => {
  describe('with default options', () => {
    const guard = guardNumber;

    it('should throw a ZeroDepError error when invalid', () => {
      const fn = () => guard('not a number');
      expect(fn).toThrow(ZeroDepError);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a number');
    });
  });

  describe('with custom options', () => {
    const options: GuardNumberOptions = { min: 50, max: 100 };
    const guard = guardNumberHOF(options);

    it('should throw a ZeroDepError error when number too small', () => {
      const fn = () => guard(49.9);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Number is less than 50');
    });

    it('should allow an number at the lower limit', () => {
      expect(guard(50.1)).toBeUndefined();
    });

    it('should allow an number at the upper limit', () => {
      expect(guard(100)).toBeUndefined();
    });

    it('should throw a ZeroDepError error when number too large', () => {
      const fn = () => guard(2022);
      expect(fn).toThrow(ZeroDepError);
      expect(fn).toThrow('Number is greater than 100');
    });
  });
});
