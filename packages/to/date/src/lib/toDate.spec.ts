import { stringLowerFirst } from '@zerodep/string-lowerfirst';
import { testData } from '../../../../testValues';
import { toDate } from './toDate';

// extract the positive test cases, the rest will be negative
/* eslint-disable @typescript-eslint/no-unused-vars */
const {
  strings,
  bigInts,
  dates,
  integers,
  floats,
  floatENotation,
  numberIsh,
  ...rest
} = testData;
const negativeCases = Object.values(rest).flat();

/* eslint-enable @typescript-eslint/no-unused-vars */

describe('toDate', () => {
  it('should return a date when a date is provided', () => {
    const date = new Date();
    expect(toDate(date)).toEqual(date);
  });

  it('should convert a unix timestamp (in seconds) to a date', () => {
    const date = toDate(1684693997);
    expect(date.toISOString()).toEqual('2023-05-21T18:33:17.000Z');
  });

  it('should convert a unix timestamp (in milliseconds) to a date', () => {
    const date = toDate(1684693997000);
    expect(date.toISOString()).toEqual('2023-05-21T18:33:17.000Z');
  });

  it('should convert a big int to a date', () => {
    const date = toDate(1384275600n);
    expect(date.toISOString()).toEqual('2013-11-12T17:00:00.000Z');
  });

  it('should return a date', () => {
    expect(toDate(new Date('2022-02-24'))).toEqual(new Date('2022-02-24'));
  });

  it('should convert an obvious date', () => {
    expect(toDate('12/25/2021')).toEqual(new Date('2021-12-25'));
  });

  it('should convert a date with month', () => {
    expect(toDate('09-Aug-2016')).toEqual(new Date('2016-08-09'));
  });

  it('should convert an ambiguous date', () => {
    expect(toDate('11/12/13')).toEqual(new Date('2013-11-12'));
  });

  it('should convert an ISO datetime', () => {
    expect(toDate('2023-05-21T15:21:00.000Z')).toEqual(new Date('2023-05-21'));
  });

  it('should throw an error for an invalid date format', () => {
    // @ts-ignore
    const fn = () => toDate([]);
    expect(fn).toThrow('Invalid Date');
  });

  // @ts-ignore
  test.each(negativeCases)('should throw for a/an %s', (title, value) => {
    // @ts-ignore
    const fn = () => stringLowerFirst(value);
    expect(fn).toThrow('Value is not a string');
  });
});
