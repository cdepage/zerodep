import { toNumber } from './toNumber';

describe('toNumber', () => {
  // NUMBERS
  it('should convert an integer', () => {
    expect(toNumber(42)).toEqual(42);
  });
  it('should convert a float', () => {
    expect(toNumber(3.14159)).toEqual(3.14159);
  });
  it('should convert a scientific notation', () => {
    expect(toNumber(3e8)).toEqual(300000000);
  });

  // STRINGS
  it('should convert a simple string', () => {
    expect(toNumber('42')).toEqual(42);
  });
  it('should convert a simple string', () => {
    expect(toNumber('98.6')).toEqual(98.6);
  });
  it('should convert a negative simple string', () => {
    expect(toNumber('-171.3')).toEqual(-171.3);
  });
  it('should convert scientific notation', () => {
    expect(toNumber('3e8')).toEqual(300000000);
  });
  it('should convert an empty string', () => {
    expect(toNumber('')).toEqual(0);
  });

  // STRINGS - COMPLICATED
  it('should convert 1 000 000 000 000', () => {
    expect(toNumber('1 000 000 000 000')).toEqual(1000000000000);
  });
  it('should convert "8,675,309"', () => {
    expect(toNumber('8,675,309')).toEqual(8675309);
  });
  it('should convert "8,675,309.123"', () => {
    expect(toNumber('8,675,309.123')).toEqual(8675309.123);
  });
  it('should convert "8.675.309"', () => {
    expect(toNumber('8.675.309')).toEqual(8675309);
  });
  it('should convert "8.675.309,123"', () => {
    expect(toNumber('8.675.309,123')).toEqual(8675309.123);
  });
  it('should NOT convert "867,5309"', () => {
    const fn = () => toNumber('867,5309');
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert a non-numeric string', () => {
    const fn = () => toNumber('asdf');
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert a non-numeric string', () => {
    const fn = () => toNumber('+/- some.');
    expect(fn).toThrow('Cannot convert to number');
  });

  // NUMBERS
  it('should convert a float', () => {
    expect(toNumber(3.141592653589793)).toEqual(3.141592653589793);
  });
  it('should convert an integer', () => {
    expect(toNumber(42)).toEqual(42);
  });
  it('should convert a scientific notation', () => {
    expect(toNumber(100e10)).toEqual(1000000000000);
  });
  it('should NOT convert NaN', () => {
    const fn = () => toNumber(NaN);
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert an infinite number', () => {
    const fn = () => toNumber(Number.POSITIVE_INFINITY);
    expect(fn).toThrow('Cannot convert to number');
  });

  // BIG INT
  it('should convert a bigInt', () => {
    expect(toNumber(8675309n)).toEqual(8675309);
  });

  // BOOLEANS
  it('should convert a boolean true', () => {
    expect(toNumber(true)).toEqual(1);
  });
  it('should convert a boolean false', () => {
    expect(toNumber(false)).toEqual(0);
  });

  // DATES
  it('should convert a date', () => {
    const date = new Date('2022-04-22T10:30:00.000Z');
    expect(toNumber(date)).toEqual(1650623400000);
  });

  // NOTHINGS
  it('should NOT convert a null', () => {
    // @ts-ignore
    const fn = () => toNumber(null);
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert undefined ', () => {
    // @ts-ignore
    const fn = () => toNumber(undefined);
    expect(fn).toThrow('Cannot convert to number');
  });
});
