import { toNumber } from './toNumber';

describe('toNumber', () => {
  describe('with default options', () => {
    const convert = toNumber;

    // STRINGS
    it('should convert a simple string', () => {
      expect(convert('42')).toEqual(42);
    });
    it('should convert a simple string', () => {
      expect(convert('98.6')).toEqual(98.6);
    });
    it('should convert a negative simple string', () => {
      expect(convert('-171.3')).toEqual(-171.3);
    });
    it('should convert scientific notation', () => {
      expect(convert('3e8')).toEqual(300000000);
    });
    it('should convert an empty string', () => {
      expect(convert('')).toEqual(0);
    });

    // STRINGS - COMPLICATED
    it('should convert 1 000 000 000 000', () => {
      expect(convert('1 000 000 000 000')).toEqual(1000000000000);
    });
    it('should convert "8,675,309"', () => {
      expect(convert('8,675,309')).toEqual(8675309);
    });
    it('should convert "8,675,309.123"', () => {
      expect(convert('8,675,309.123')).toEqual(8675309.123);
    });
    it('should convert "8.675.309"', () => {
      expect(convert('8.675.309')).toEqual(8675309);
    });
    it('should convert "8.675.309,123"', () => {
      expect(convert('8.675.309,123')).toEqual(8675309.123);
    });
    it('should NOT convert "867,5309"', () => {
      const fn = () => convert('867,5309');
      expect(fn).toThrow('Cannot convert to number');
    });
    it('should NOT convert a non-numeric string', () => {
      const fn = () => convert('asdf');
      expect(fn).toThrow('Cannot convert to number');
    });
    it('should NOT convert a non-numeric string', () => {
      const fn = () => convert('+/- some.');
      expect(fn).toThrow('Cannot convert to number');
    });

    // NUMBERS
    it('should convert a float', () => {
      expect(convert(3.141592653589793)).toEqual(3.141592653589793);
    });
    it('should convert an integer', () => {
      expect(convert(42)).toEqual(42);
    });
    it('should convert a scientific notation', () => {
      expect(convert(100e10)).toEqual(1000000000000);
    });
    it('should NOT convert NaN', () => {
      const fn = () => convert(NaN);
      expect(fn).toThrow('Cannot convert to number');
    });
    it('should NOT convert an infinite number', () => {
      const fn = () => convert(Number.POSITIVE_INFINITY);
      expect(fn).toThrow('Cannot convert to number');
    });

    // BIG INT
    it('should convert a bigInt', () => {
      expect(convert(8675309n)).toEqual(8675309);
    });

    // BOOLEANS
    it('should convert a boolean true', () => {
      expect(convert(true)).toEqual(1);
    });
    it('should convert a boolean false', () => {
      expect(convert(false)).toEqual(0);
    });

    // DATES
    it('should convert a date', () => {
      const date = new Date('2022-04-22T10:30:00.000Z');
      expect(convert(date)).toEqual(1650623400000);
    });

    // NOTHINGS
    it('should NOT convert a null', () => {
      const fn = () => convert(null);
      expect(fn).toThrow('Cannot convert to number');
    });
    it('should NOT convert undefined ', () => {
      const fn = () => convert(undefined);
      expect(fn).toThrow('Cannot convert to number');
    });
  });
});
