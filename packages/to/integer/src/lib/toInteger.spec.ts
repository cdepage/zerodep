import { toInteger } from './toInteger';

describe('toInteger', () => {
  // NUMBERS
  it('should convert an integer', () => {
    expect(toInteger(42)).toEqual(42);
  });
  it('should convert a float', () => {
    expect(toInteger(3.14159)).toEqual(3);
  });
  it('should convert a scientific notation', () => {
    expect(toInteger(3e8)).toEqual(300000000);
  });
  it('should NOT convert a NaN', () => {
    const fn = () => toInteger(NaN);
    expect(fn).toThrow('Cannot convert to number');
  });

  // STRINGS
  it('should convert a simple string', () => {
    expect(toInteger('42')).toEqual(42);
  });
  it('should convert a simple string', () => {
    expect(toInteger('98.6')).toEqual(98);
  });
  it('should convert a negative simple string', () => {
    expect(toInteger('-171.3')).toEqual(-171);
  });
  it('should convert scientific notation', () => {
    expect(toInteger('3e8')).toEqual(300000000);
  });
  it('should convert an empty string', () => {
    expect(toInteger('')).toEqual(0);
  });

  // STRINGS - COMPLICATED
  it('should convert 1 000 000 000 000', () => {
    expect(toInteger('1 000 000 000 000')).toEqual(1000000000000);
  });
  it('should convert "8,675,309"', () => {
    expect(toInteger('8,675,309')).toEqual(8675309);
  });
  it('should convert "8,675,309.123"', () => {
    expect(toInteger('8,675,309.123')).toEqual(8675309);
  });
  it('should convert "8.675.309"', () => {
    expect(toInteger('8.675.309')).toEqual(8675309);
  });
  it('should convert "8.675.309,123"', () => {
    expect(toInteger('8.675.309,123')).toEqual(8675309);
  });
  it('should NOT convert "867,5309"', () => {
    const fn = () => toInteger('867,5309');
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert a non-numeric string', () => {
    const fn = () => toInteger('asdf');
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert a non-numeric string', () => {
    const fn = () => toInteger('+/- some.');
    expect(fn).toThrow('Cannot convert to number');
  });

  // NUMBERS
  it('should convert a float', () => {
    expect(toInteger(3.141592653589793)).toEqual(3);
  });
  it('should convert an integer', () => {
    expect(toInteger(42)).toEqual(42);
  });
  it('should convert a scientific notation', () => {
    expect(toInteger(100e10)).toEqual(1000000000000);
  });
  it('should NOT convert NaN', () => {
    const fn = () => toInteger(NaN);
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert an infinite number', () => {
    const fn = () => toInteger(Number.POSITIVE_INFINITY);
    expect(fn).toThrow('Cannot convert to number');
  });

  // BIG INT
  it('should convert a bigInt', () => {
    expect(toInteger(8675309n)).toEqual(8675309);
  });

  // BOOLEANS
  it('should convert a boolean true', () => {
    expect(toInteger(true)).toEqual(1);
  });
  it('should convert a boolean false', () => {
    expect(toInteger(false)).toEqual(0);
  });

  // DATES
  it('should convert a date', () => {
    const date = new Date('2022-04-22T10:30:00.000Z');
    expect(toInteger(date)).toEqual(1650623400000);
  });

  // NOTHINGS
  it('should NOT convert a null', () => {
    // @ts-ignore
    const fn = () => toInteger(null);
    expect(fn).toThrow('Cannot convert to number');
  });
  it('should NOT convert undefined ', () => {
    // @ts-ignore
    const fn = () => toInteger(undefined);
    expect(fn).toThrow('Cannot convert to number');
  });
});
