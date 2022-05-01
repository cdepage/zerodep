import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { testData } from '../../../testValues';
import { guardDate, guardDateHOF, GuardDateOptions } from './guardDate';

// extract the positive test cases, the rest will be negative
const { dates, ...rest } = testData;
const positiveCases = [...dates];
const negativeCases = Object.values(rest).flat();

describe('guardDate', () => {
  describe('with default options', () => {
    const guard = guardDate;

    it('should throw a ZeroDepErrorGuardType error when invalid', () => {
      const fn = () => guard('not a date');
      expect(fn).toThrow(ZeroDepErrorGuardType);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toBeUndefined();
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a date');
    });
  });

  describe('with custom options', () => {
    const options: GuardDateOptions = {
      earliest: new Date('2000-01-01'),
      latest: new Date('2038-01-19T00:00:00.000Z'),
    };
    const guard = guardDateHOF(options);

    it('should throw a ZeroDepErrorGuardRange error when date too small', () => {
      const fn = () => guard(new Date('1999-12-25'));
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Date is less than 2000-01-01T00:00:00.000Z');
    });

    it('should allow an float at the lower limit', () => {
      const value = new Date('2000-01-01');
      expect(guard(value)).toBeUndefined();
    });

    it('should allow an float at the upper limit', () => {
      const value = new Date('2038-01-19T00:00:00.000Z');
      expect(guard(value)).toBeUndefined();
    });

    it('should throw a ZeroDepErrorGuardRange error when float too large', () => {
      const fn = () => guard(new Date('2050-06-15'));
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('Date is greater than 2038-01-19T00:00:00.000Z');
    });
  });
});
