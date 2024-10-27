import { ZeroDepError } from '@zerodep/errors';
import {
  testAggregateError,
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
  testPromiseAll,
  testPromiseAllSettled,
  testPromiseRace,
  testPromiseResolved1,
  testRexExp1,
  testRexExp2,
  testSetEmpty,
  testSetNumbers,
  testSetStrings,
  testSymbol2,
} from '../../../../is/isTestData';
import {
  TestClass1,
  TestClass2,
  testClassInstance1,
  testClassInstance2,
  testFunction1,
  testGenerator,
  testPromise1,
  testRegex1,
  testRegex2,
  testSymbol1,
  testTypedArray1,
  testTypedArray2,
  testTypedArray3,
  testTypedArray4,
  testTypedArray5,
  testTypedArray6,
  testTypedArray7,
  testTypedArray8,
  testTypedArray9,
  testWeakMap,
  testWeakSet,
} from '../../../../testValues';
import { toPojo } from './toPojo';

describe('toPojo', () => {
  describe('with default options', () => {
    it('should throw a ZeroDepError error', () => {
      // @ts-ignore
      const fn = () => toPojo('a string');
      expect(fn).toThrow(ZeroDepError);
    });

    // STRING
    it('should NOT toPojo a string', () => {
      // @ts-ignore
      const fn = () => toPojo('a string');
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // NUMBERS
    it('should NOT toPojo a float', () => {
      // @ts-ignore
      const fn = () => toPojo(3.14);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo an integer', () => {
      // @ts-ignore
      const fn = () => toPojo(42);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a scientific notation', () => {
      // @ts-ignore
      const fn = () => toPojo(100e10);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo NaN', () => {
      // @ts-ignore
      const fn = () => toPojo(NaN);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo an infinite number', () => {
      // @ts-ignore
      const fn = () => toPojo(Number.POSITIVE_INFINITY);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // BIG INT
    it('should NOT toPojo a bigInt', () => {
      // @ts-ignore
      const fn = () => toPojo(8675309n);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // OBJECT LITERALS
    it('should toPojo an object literal', () => {
      expect(toPojo({ a: 'a', b: 'b' })).toEqual({ a: 'a', b: 'b' });
    });

    it('should toPojo an object literal with nested values', () => {
      expect(
        toPojo({
          a: {
            // @ts-ignore
            int: 1,
            str: '3',
            date: new Date('2022-04-29'),
            nll: null,
            arrNum: [1, 2, 3],
            arrLetter: ['a', 'b', 'c'],
            boolT: true,
            boolF: false,
          },
        })
      ).toEqual({
        a: {
          int: 1,
          str: '3',
          date: '2022-04-29T00:00:00.000Z',
          nll: null,
          arrNum: [1, 2, 3],
          arrLetter: ['a', 'b', 'c'],
          boolT: true,
          boolF: false,
        },
      });
    });
    it('should toPojo an object literal with a BigInt', () => {
      expect(toPojo({ bigInt: 8675309n })).toEqual({ bigInt: '8675309' });
    });
    it('should toPojo an instantiated class with a toPojo method', () => {
      // @ts-ignore
      expect(toPojo({ instance: testClassInstance1 })).toEqual({
        instance: { a: 1 },
      });
    });
    it('should NOT toPojo an object literal with a Symbol', () => {
      // @ts-ignore
      const fn = () => toPojo({ symbol: testSymbol1 });
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // ARRAYS
    it('should toPojo a array of Sets', () => {
      const obj = [new Set(['a', 'b']), new Set(['c', 'd'])];
      expect(toPojo(obj)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });

    // SET
    it('should toPojo a Set', () => {
      const obj = new Set(['a', 'b']);
      expect(toPojo(obj)).toEqual(['a', 'b']);
    });
    it('should toPojo a Set of Sets', () => {
      const s1 = new Set(['a', 'b']);
      const s2 = new Set(['c', 'd']);
      const obj = new Set([s1, s2]);
      expect(toPojo(obj)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });

    // MAP
    it('should toPojo a Map', () => {
      const obj = new Map([
        ['a', 1],
        ['b', 2],
      ]);
      expect(toPojo(obj)).toEqual({ a: 1, b: 2 });
    });
    it('should toPojo a Map of Maps', () => {
      const obj = new Map([
        [
          'a',
          new Map([
            ['aa', 11],
            ['bb', 22],
          ]),
        ],
        [
          'c',
          new Map([
            ['dd', 44],
            ['ee', 55],
          ]),
        ],
      ]);
      expect(toPojo(obj)).toEqual({
        a: { aa: 11, bb: 22 },
        c: { dd: 44, ee: 55 },
      });
    });

    // WEAKMAP
    it('should NOT toPojo a WeakMap', () => {
      // @ts-ignore
      const fn = () => toPojo(testWeakMap);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // WEAKSET
    it('should NOT toPojo a WeakSet', () => {
      // @ts-ignore
      const fn = () => toPojo(testWeakSet);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // PROMISE
    it('should NOT toPojo a Promise', () => {
      // @ts-ignore
      const fn = () => toPojo(testPromise1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // SYMBOL
    it('should NOT toPojo a Symbol', () => {
      // @ts-ignore
      const fn = () => toPojo(testSymbol1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // CLASSES
    it('should NOT toPojo a class with a toPojo method', () => {
      // @ts-ignore
      const fn = () => toPojo(TestClass1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a class without a toPojo method', () => {
      // @ts-ignore
      const fn = () => toPojo(TestClass2);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should toPojo an instantiated class with a toPojo method', () => {
      // @ts-ignore
      expect(toPojo(testClassInstance1)).toEqual({ a: 1 });
    });
    it('should toPojo an instantiated class without a toPojo method', () => {
      // @ts-ignore
      expect(toPojo(testClassInstance2)).toEqual({ b: 2 });
    });
    it('should toPojo a generator function', () => {
      // @ts-ignore
      const fn = () => toPojo(testGenerator);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // TYPED ARRAYS
    it('should NOT toPojo a testTypedArray1', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray2', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray2);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray3', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray3);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray4', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray4);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray5', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray5);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray6', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray6);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray7', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray7);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray8', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray8);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a testTypedArray9', () => {
      // @ts-ignore
      const fn = () => toPojo(testTypedArray9);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // FUNCTION
    it('should NOT toPojo a testFunction1', () => {
      // @ts-ignore
      const fn = () => toPojo(testFunction1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // REGEX
    it('should NOT toPojo a regex', () => {
      // @ts-ignore
      const fn = () => toPojo(testRegex1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT toPojo a RegExp', () => {
      // @ts-ignore
      const fn = () => toPojo(testRegex2);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // NOTHINGS
    it('should toPojo a null to null', () => {
      expect(toPojo(null)).toEqual(null);
    });
    it('should toPojo undefined to null', () => {
      // @ts-ignore
      expect(toPojo(undefined)).toEqual(null);
    });

    it('should NOT convert an object with a circular reference', () => {
      const obj = { a: 1, b: 2, c: [3, 4] };
      // @ts-ignore
      obj.c.push(obj);

      const fn = () => toPojo(obj);
      expect(fn).toThrow('Cannot convert to JSON');
    });
  });

  const validCases = [
    ['array - empty', [], []],
    ['array - nonempty int', [1, 2, 3], [1, 2, 3]],
    ['array - nonempty str', ['a', 'b', 'c'], ['a', 'b', 'c']],
    ['class', testClassInstance1, { a: 1 }],
    ['map - empty', testMapEmpty, {}],
    ['map - nonempty number', testMapNumbers, { key: 123 }],
    ['map - nonempty string', testMapStrings, { key: 'abc' }],
    ['nothing - null', null, null],
    ['nothing - undefined', undefined, null],
    ['pojo - empty', {}, {}],
    ['pojo - nonempty string', { key: 'string' }, { key: 'string' }],
    ['pojo - nonempty number', { key: 123 }, { key: 123 }],
    ['set - empty', testSetEmpty, []],
    ['set - numbers', testSetNumbers, [1, 2, 3]],
    ['set - strings', testSetStrings, ['a', 'b', 'c']],
  ];
  // @ts-ignore
  test.each(validCases)('should assess %s', async (title, value, result) => {
    // @ts-ignore
    expect(toPojo(value)).toEqual(result);
  });

  const invalidCases = [
    ['bigint - 42n', 42n, false],
    ['bigint - 0n', 0n, false],
    ['bigint - -0n', -0n, false],
    ['bigint - -42n', -42n, false],
    ['boolean - true', true, false],
    ['boolean - false', false, false],
    ['class', TestClass1, false],
    ['date - now', testDate0, false],
    ['date - past', testDate1, false],
    ['date - future', testDate2, false],
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
    ['promise', testPromise1, false],
    ['promise - all', testPromiseAll, false],
    ['promise - allSettled', testPromiseAllSettled, false],
    ['promise - race', testPromiseRace, false],
    ['promise - resolved', testPromiseResolved1, false],
    ['regex1', testRexExp1, false],
    ['regex2', testRexExp2, false],
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
  test.each(invalidCases)(
    'should throw for %s',
    // @ts-ignore
    async (title, value) => {
      // @ts-ignore
      const fn = () => toPojo(value);
      expect(fn).toThrow('Cannot convert to JSON');
    }
  );
});
