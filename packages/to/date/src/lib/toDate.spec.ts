import { stringLowerFirst } from '@zerodep/string-lowerfirst';
import {
  testAggregateError,
  TestClass1,
  testClassInstance1,
  testDate0,
  testDate1,
  testDate2,
  testError,
  testFunction,
  testFunctionAsync,
  testFunctionGenerator,
  testFunctionGeneratorAsync,
  testMapEmpty,
  testMapNumbers,
  testMapStrings,
  testPromise1,
  testPromiseAll,
  testPromiseAllSettled,
  testPromiseRace,
  testPromiseResolved1,
  testRexExp1,
  testRexExp2,
  testSetEmpty,
  testSetNumbers,
  testSetStrings,
  testSymbol1,
  testSymbol2,
  testWeakMap,
  testWeakSet,
} from '../../../../is/isTestData';
import { testData } from '../../../../testValues';
import { toDate } from './toDate'; // extract the positive test cases, the rest will be negative

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

  const validCases = [
    ['bigint - 42n', 42n, new Date('1970-01-01T00:00:42.000Z')],
    ['bigint - 0n', 0n, new Date('1970-01-01T00:00:00.000Z')],
    ['bigint - -0n', -0n, new Date('1970-01-01T00:00:00.000Z')],
    ['bigint - -42n', -42n, new Date('1969-12-31T23:59:18.000Z')],
    ['date - now', testDate0, new Date(testDate0)],
    ['date - past', testDate1, new Date(testDate1)],
    ['date - future', testDate2, new Date(testDate2)],
    ['float - 3.14', 3.14, new Date('1970-01-01T00:00:00.003Z')],
    ['float - 0.0', 0.0, new Date('1970-01-01T00:00:00.000Z')],
    ['float - -0.0', -0.0, new Date('1970-01-01T00:00:00.000Z')],
    ['float - -3.14', -3.14, new Date('1969-12-31T23:59:59.997Z')],
    ['float - Math.E', Math.E, new Date('1970-01-01T00:00:00.002Z')],
    ['float - Math.PI', Math.PI, new Date('1970-01-01T00:00:00.003Z')],
    [
      'float - min value',
      Number.MIN_VALUE,
      new Date('1970-01-01T00:00:00.000Z'),
    ],
    ['number - 3e8', 3e8, new Date('1979-07-05T05:20:00.000Z')],
    ['number - 42', 42, new Date('1970-01-01T00:00:42.000Z')],
    ['number - 1', 1, new Date('1970-01-01T00:00:01.000Z')],
    ['number - 0', 0, new Date('1970-01-01T00:00:00.000Z')],
    ['number - -0', -0, new Date('1970-01-01T00:00:00.000Z')],
    ['number - -1', -1, new Date('1969-12-31T23:59:59.000Z')],
    ['number - -42', -42, new Date('1969-12-31T23:59:18.000Z')],
    ['number - -3e8', -3e8, new Date('1960-06-29T18:40:00.000Z')],
    [
      'string - "2022-02-24"',
      '2022-02-24',
      new Date('2022-02-24T00:00:00.000Z'),
    ],
    [
      'string - "12/25/2021"',
      '12/25/2021',
      new Date('2021-12-25T00:00:00.000Z'),
    ],
    [
      'string - "09-Aug-2016"',
      '09-Aug-2016',
      new Date('2016-08-09T00:00:00.000Z'),
    ],
    ['string - "11/12/13"', '11/12/13', new Date('2013-11-12T00:00:00.000Z')],
  ];
  // @ts-ignore
  test.each(validCases)('should assess %s', async (title, value, result) => {
    // @ts-ignore
    console.log(title, toDate(value));
    // @ts-ignore
    expect(toDate(value)).toEqual(result);
  });

  const invalidCases = [
    ['boolean - true', true],
    ['boolean - false', false],
    ['class', TestClass1],
    ['class', testClassInstance1],
    ['error', testError],
    ['error - aggregate', testAggregateError],
    ['function', testFunction],
    ['function - async', testFunctionAsync],
    ['generator', testFunctionGenerator],
    ['generator - async', testFunctionGeneratorAsync],
    ['map - empty', testMapEmpty],
    ['map - nonempty number', testMapNumbers],
    ['map - nonempty string', testMapStrings],
    ['nothing - null', null],
    ['nothing - undefined', undefined],
    ['number - infinity - positive', Number.POSITIVE_INFINITY],
    ['number - max safe int', Number.MAX_SAFE_INTEGER],
    ['number - max value', Number.MAX_VALUE],
    ['number - min safe int', Number.MIN_SAFE_INTEGER],
    ['number - infinity - negative', Number.NEGATIVE_INFINITY],
    ['number - NaN', Number.NaN],
    ['pojo - empty', {}],
    ['pojo - nonempty string', { key: 'string' }],
    ['pojo - nonempty number', { key: 123 }],
    ['promise', testPromise1],
    ['promise - all', testPromiseAll],
    ['promise - allSettled', testPromiseAllSettled],
    ['promise - race', testPromiseRace],
    ['promise - resolved', testPromiseResolved1],
    ['regex1', testRexExp1],
    ['regex2', testRexExp2],
    ['set - empty', testSetEmpty],
    ['set - numbers', testSetNumbers],
    ['set - strings', testSetStrings],
    ['string - ""', ''],
    ['string - "long string"', 'a longer string'],
    ['string - "1000n"', '1000n'],
    ['string - "3e8"', '3e8'],
    ['string - "42"', '42'],
    ['string - "3.14"', '3.14'],
    ['string - "0"', '0'],
    ['string - "-0"', '-0'],
    ['string - "-3.14"', '-3.14'],
    ['string - "-42"', '-42'],
    ['string - "-3e8"', '-3e8'],
    ['string - "-1000n"', '-1000n'],
    ['symbol', testSymbol1],
    ['symbol + description', testSymbol2],
    ['this - globalThis', globalThis],
    ['this - this', this],
    ['typedArray - int8Array', new Int8Array(2)],
    ['typedArray - int16Array', new Int16Array(2)],
    ['typedArray - int32Array', new Int32Array(2)],
    ['typedArray - uint8Array', new Uint8Array(2)],
    ['typedArray - uint16Array', new Uint16Array(2)],
    ['typedArray - uint32Array', new Uint32Array(2)],
    ['typedArray - uint8ClampedArray', new Uint8ClampedArray(2)],
    ['typedArray - bigInt64Array', new BigInt64Array(2)],
    ['typedArray - bigUint64Array', new BigUint64Array(2)],
    ['typedArray - float32Array', new Float32Array(2)],
    ['typedArray - float64Array', new Float64Array(2)],
    ['typedArray - sharedArrayBuffer', new SharedArrayBuffer(512)],
    ['weakMap - empty', new WeakMap()],
    ['weakMap - nonempty', testWeakMap],
    ['weakSet - empty', new WeakSet()],
    ['weakSet - nonempty', testWeakSet],
  ];
  // @ts-ignore
  test.each(invalidCases)('should assess %s', async (title, value) => {
    // @ts-ignore
    const fn = () => toDate(value);
    expect(fn).toThrow('Invalid Date');
  });
});
