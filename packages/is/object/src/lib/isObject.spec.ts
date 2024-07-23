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
} from '../../../isTestData';
import { isObject } from './isObject';

describe('isObject', () => {
  const exampleCases = [
    ['array - empty', [], false],
    ['array - nonempty int', [1, 2, 3], false],
    ['array - nonempty str', ['a', 'b', 'c'], false],
    ['bigint - 42n', 42n, false],
    ['bigint - 0n', 0n, false],
    ['bigint - -0n', -0n, false],
    ['bigint - -42n', -42n, false],
    ['boolean - true', true, false],
    ['boolean - false', false, false],
    ['class', TestClass1, false],
    ['class', testClassInstance1, false],
    ['date - now', testDate0, false],
    ['date - past', testDate1, false],
    ['date - future', testDate2, false],
    ['empty - null', null, false],
    ['empty - undefined', undefined, false],
    ['error', testError, false],
    ['error - aggregate', testAggregateError, false],
    ['float - 3.14', 3.14, false],
    ['float - 0.0', 0.0, false],
    ['float - -0.0', -0.0, false],
    ['float - -3.14', -3.14, false],
    ['float - Math.E', Math.E, false],
    ['float - Math.PI', Math.PI, false],
    ['float - min value', Number.MIN_VALUE, false],
    ['function', testFunction, false],
    ['function - async', testFunctionAsync, false],
    ['generator', testFunctionGenerator, false],
    ['generator - async', testFunctionGeneratorAsync, false],
    ['map - empty', testMapEmpty, false],
    ['map - nonempty number', testMapNumbers, false],
    ['map - nonempty string', testMapStrings, false],
    ['number - infinity - positive', Number.POSITIVE_INFINITY, false],
    ['number - max safe int', Number.MAX_SAFE_INTEGER, false],
    ['number - max value', Number.MAX_VALUE, false],
    ['number - 3e8', 3e8, false],
    ['number - 42', 42, false],
    ['number - 1', 1, false],
    ['number - 0', 0, false],
    ['number - -0', -0, false],
    ['number - -1', -1, false],
    ['number - -42', -42, false],
    ['number - -3e8', -3e8, false],
    ['number - min safe int', Number.MIN_SAFE_INTEGER, false],
    ['number - infinity - negative', Number.NEGATIVE_INFINITY, false],
    ['number - NaN', Number.NaN, false],
    ['pojo - empty', {}, true],
    ['pojo - nonempty string', { key: 'string' }, true],
    ['pojo - nonempty number', { key: 123 }, true],
    ['promise', testPromise1, false],
    ['promise - all', testPromiseAll, false],
    ['promise - allSettled', testPromiseAllSettled, false],
    ['promise - race', testPromiseRace, false],
    ['promise - resolved', testPromiseResolved1, false],
    ['regex1', testRexExp1, false],
    ['regex2', testRexExp2, false],
    ['set - empty', testSetEmpty, false],
    ['set - numbers', testSetNumbers, false],
    ['set - strings', testSetStrings, false],
    ['string - ""', '', false],
    ['string - "long string"', 'a longer string', false],
    ['string - "1000n"', '1000n', false],
    ['string - "3e8"', '3e8', false],
    ['string - "42"', '42', false],
    ['string - "3.14"', '3.14', false],
    ['string - "0"', '0', false],
    ['string - "-0"', '-0', false],
    ['string - "-3.14"', '-3.14', false],
    ['string - "-42"', '-42', false],
    ['string - "-3e8"', '-3e8', false],
    ['string - "-1000n"', '-1000n', false],
    ['symbol', testSymbol1, false],
    ['symbol + description', testSymbol2, false],
    ['this - globalThis', globalThis, false],
    ['this - this', this, false],
    ['typedArray - int8Array', new Int8Array(2), false],
    ['typedArray - int16Array', new Int16Array(2), false],
    ['typedArray - int32Array', new Int32Array(2), false],
    ['typedArray - uint8Array', new Uint8Array(2), false],
    ['typedArray - uint16Array', new Uint16Array(2), false],
    ['typedArray - uint32Array', new Uint32Array(2), false],
    ['typedArray - uint8ClampedArray', new Uint8ClampedArray(2), false],
    ['typedArray - bigInt64Array', new BigInt64Array(2), false],
    ['typedArray - bigUint64Array', new BigUint64Array(2), false],
    ['typedArray - float32Array', new Float32Array(2), false],
    ['typedArray - float64Array', new Float64Array(2), false],
    ['typedArray - sharedArrayBuffer', new SharedArrayBuffer(512), false],
    ['weakMap - empty', new WeakMap(), false],
    ['weakMap - nonempty', testWeakMap, false],
    ['weakSet - empty', new WeakSet(), false],
    ['weakSet - nonempty', testWeakSet, false],
  ];
  // @ts-ignore
  test.each(exampleCases)('should assess %s', async (title, value, result) => {
    expect(isObject(value)).toEqual(result);
  });
});
