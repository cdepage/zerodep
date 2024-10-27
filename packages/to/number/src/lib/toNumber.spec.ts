import {
  testAggregateError,
  TestClass1,
  testClassInstance1,
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

  const validCases = [
    ['bigint - 42n', 42n, 42],
    ['bigint - 0n', 0n, 0],
    ['bigint - -0n', -0n, 0],
    ['bigint - -42n', -42n, -42],
    ['boolean - true', true, 1],
    ['boolean - false', false, 0],
    ['date - past', testDate1, 946684799999],
    ['date - future', testDate2, 1651082556634],
    ['float - 3.14', 3.14, 3.14],
    ['float - 0.0', 0.0, 0],
    ['float - -0.0', -0.0, -0],
    ['float - -3.14', -3.14, -3.14],
    ['float - Math.E', Math.E, 2.718281828459045],
    ['float - Math.PI', Math.PI, 3.141592653589793],
    ['float - min value', Number.MIN_VALUE, 5e-324],
    ['number - max safe int', Number.MAX_SAFE_INTEGER, 9007199254740991],
    ['number - max value', Number.MAX_VALUE, 1.7976931348623157e308],
    ['number - 3e8', 3e8, 300000000],
    ['number - 42', 42, 42],
    ['number - 1', 1, 1],
    ['number - 0', 0, 0],
    ['number - -0', -0, -0],
    ['number - -1', -1, -1],
    ['number - -42', -42, -42],
    ['number - -3e8', -3e8, -300000000],
    ['number - min safe int', Number.MIN_SAFE_INTEGER, -9007199254740991],
    ['string - ""', '', 0],
    ['string - "1000n"', '1000n', 1000],
    ['string - "3e8"', '3e8', 300000000],
    ['string - "42"', '42', 42],
    ['string - "3.14"', '3.14', 3.14],
    ['string - "0"', '0', 0],
    ['string - "-0"', '-0', -0],
    ['string - "-3.14"', '-3.14', -3.14],
    ['string - "-42"', '-42', -42],
    ['string - "-3e8"', '-3e8', -300000000],
    ['string - "-1000n"', '-1000n', -1000],
  ];
  // @ts-ignore
  test.each(validCases)('should assess %s', async (title, value, result) => {
    // @ts-ignore
    expect(toNumber(value)).toEqual(result);
  });

  const invalidCases = [
    ['array - empty', []],
    ['array - nonempty int', [1, 2, 3]],
    ['array - nonempty str', ['a', 'b', 'c']],
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
    ['string - "long string"', 'a longer string'],
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
  test.each(invalidCases)(
    'should throw for %s',
    // @ts-ignore
    async (title, value) => {
      // @ts-ignore
      const fn = () => toNumber(value);
      expect(fn).toThrow('Cannot convert to number');
    }
  );
});
