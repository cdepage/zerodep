import { ZeroDepErrorTo } from '@zerodep/to.errors';
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
} from '../../../testValues';
import { toJSON, toJSONHOF } from './toJSON';

describe('toJSON', () => {
  describe('with default options', () => {
    const convert = toJSON;

    it('should throw a ZeroDepErrorTo error', () => {
      const fn = () => convert('a string');
      expect(fn).toThrow(ZeroDepErrorTo);
    });

    // STRING
    it('should NOT convert a string', () => {
      const fn = () => convert('a string');
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // NUMBERS
    it('should NOT convert a float', () => {
      const fn = () => convert(3.14);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert an integer', () => {
      const fn = () => convert(42);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a scientific notation', () => {
      const fn = () => convert(100e10);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert NaN', () => {
      const fn = () => convert(NaN);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert an infinite number', () => {
      const fn = () => convert(Number.POSITIVE_INFINITY);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // BIG INT
    it('should NOT convert a bigInt', () => {
      const fn = () => convert(8675309n);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // OBJECT LITERALS
    it('should convert an object literal', () => {
      expect(convert({ a: 'a', b: 'b' })).toEqual({ a: 'a', b: 'b' });
    });
    it('should convert an object literal with nested values', () => {
      expect(
        convert({
          a: {
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
    it('should convert an object literal with a BigInt', () => {
      expect(convert({ bigInt: 8675309n })).toEqual({ bigInt: '8675309' });
    });
    it('should convert an intantiated class with a toJSON method', () => {
      expect(convert({ instance: testClassInstance1 })).toEqual({ instance: { a: 1 } });
    });
    it('should NOT convert an object literal with a Symbol', () => {
      const fn = () => convert({ symbol: testSymbol1 });
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // ARRAYS
    it('should convert a array of Sets', () => {
      const obj = [new Set(['a', 'b']), new Set(['c', 'd'])];
      expect(convert(obj)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });

    // SET
    it('should convert a Set', () => {
      const obj = new Set(['a', 'b']);
      expect(convert(obj)).toEqual(['a', 'b']);
    });
    it('should convert a Set of Sets', () => {
      const s1 = new Set(['a', 'b']);
      const s2 = new Set(['c', 'd']);
      const obj = new Set([s1, s2]);
      expect(convert(obj)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });

    // MAP
    it('should convert a Map', () => {
      const obj = new Map([
        ['a', 1],
        ['b', 2],
      ]);
      expect(convert(obj)).toEqual({ a: 1, b: 2 });
    });
    it('should convert a Map of Maps', () => {
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
      expect(convert(obj)).toEqual({ a: { aa: 11, bb: 22 }, c: { dd: 44, ee: 55 } });
    });

    // WEAKMAP
    it('should NOT convert a WeakMap', () => {
      const fn = () => convert(testWeakMap);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // WEAKSET
    it('should NOT convert a WeakSet', () => {
      const fn = () => convert(testWeakSet);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // PROMISE
    it('should NOT convert a Promise', () => {
      const fn = () => convert(testPromise1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // SYMBOL
    it('should NOT convert a Symbol', () => {
      const fn = () => convert(testSymbol1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // CLASSES
    it('should NOT convert a class with a toJSON method', () => {
      const fn = () => convert(TestClass1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a class without a toJSON method', () => {
      const fn = () => convert(TestClass2);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should convert an instantiated class with a toJSON method', () => {
      expect(convert(testClassInstance1)).toEqual({ a: 1 });
    });
    it('should convert an instantiated class without a toJSON method', () => {
      expect(convert(testClassInstance2)).toEqual({ b: 2 });
    });
    it('should convert a generator function', () => {
      expect(convert(testGenerator)).toEqual({});
    });

    // TYPED ARRAYS
    it('should NOT convert a testTypedArray1', () => {
      const fn = () => convert(testTypedArray1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray2', () => {
      const fn = () => convert(testTypedArray2);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray3', () => {
      const fn = () => convert(testTypedArray3);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray4', () => {
      const fn = () => convert(testTypedArray4);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray5', () => {
      const fn = () => convert(testTypedArray5);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray6', () => {
      const fn = () => convert(testTypedArray6);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray7', () => {
      const fn = () => convert(testTypedArray7);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray8', () => {
      const fn = () => convert(testTypedArray8);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray9', () => {
      const fn = () => convert(testTypedArray9);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // FUNCTION
    it('should NOT convert a testFunction1', () => {
      const fn = () => convert(testFunction1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // REGEX
    it('should NOT convert a regex', () => {
      const fn = () => convert(testRegex1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a RegExp', () => {
      const fn = () => convert(testRegex2);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // NOTHINGS
    it('should convert a null to null', () => {
      expect(convert(null)).toEqual(null);
    });
    it('should convert undefined to null', () => {
      expect(convert(undefined)).toEqual(null);
    });
  });

  describe('with custom configs: convertInvalidToNull = true', () => {
    const convert = toJSONHOF({ convertInvalidToNull: true });

    // EXCEPTIONS by this config
    it('should convert a WeakMap property to a null', () => {
      expect(convert({ a: new WeakMap() })).toEqual({ a: null });
    });
    it('should convert a WeakSet property to a null', () => {
      expect(convert({ a: new WeakSet() })).toEqual({ a: null });
    });
    it('should convert a Symbol property to a null', () => {
      expect(convert({ a: Symbol() })).toEqual({ a: null });
    });
    it('should convert a Promise property to a null', () => {
      expect(convert({ a: new Promise(() => {}) })).toEqual({ a: null });
    });

    // STRING
    it('should NOT convert a string', () => {
      const fn = () => convert('a string');
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // NUMBERS
    it('should NOT convert a float', () => {
      const fn = () => convert(3.14);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert an integer', () => {
      const fn = () => convert(42);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a scientific notation', () => {
      const fn = () => convert(100e10);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert NaN', () => {
      const fn = () => convert(NaN);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert an infinite number', () => {
      const fn = () => convert(Number.POSITIVE_INFINITY);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // BIG INT
    it('should NOT convert a bigInt', () => {
      const fn = () => convert(8675309n);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // OBJECT LITERALS
    it('should convert an object literal', () => {
      expect(convert({ a: 'a', b: 'b' })).toEqual({ a: 'a', b: 'b' });
    });
    it('should convert an object literal with nested values', () => {
      expect(
        convert({
          a: {
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
    it('should convert an object literal with a BigInt', () => {
      expect(convert({ bigInt: 8675309n })).toEqual({ bigInt: '8675309' });
    });

    // ARRAYS
    it('should convert a array of Sets', () => {
      const obj = [new Set(['a', 'b']), new Set(['c', 'd'])];
      expect(convert(obj)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });

    // SET
    it('should convert a Set', () => {
      const obj = new Set(['a', 'b']);
      expect(convert(obj)).toEqual(['a', 'b']);
    });
    it('should convert a Set of Sets', () => {
      const s1 = new Set(['a', 'b']);
      const s2 = new Set(['c', 'd']);
      const obj = new Set([s1, s2]);
      expect(convert(obj)).toEqual([
        ['a', 'b'],
        ['c', 'd'],
      ]);
    });

    // MAP
    it('should convert a Map', () => {
      const obj = new Map([
        ['a', 1],
        ['b', 2],
      ]);
      expect(convert(obj)).toEqual({ a: 1, b: 2 });
    });
    it('should convert a Map of Maps', () => {
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
      expect(convert(obj)).toEqual({ a: { aa: 11, bb: 22 }, c: { dd: 44, ee: 55 } });
    });

    // WEAKMAP
    it('should NOT convert a WeakMap', () => {
      const fn = () => convert(testWeakMap);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // WEAKSET
    it('should NOT convert a WeakSet', () => {
      const fn = () => convert(testWeakSet);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // PROMISE
    it('should NOT convert a Promise', () => {
      const fn = () => convert(testPromise1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // SYMBOL
    it('should NOT convert a Symbol', () => {
      const fn = () => convert(testSymbol1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // CLASSES
    it('should NOT convert a class with a toJSON method', () => {
      const fn = () => convert(TestClass1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a class without a toJSON method', () => {
      const fn = () => convert(TestClass2);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should convert an instantiated class with a toJSON method', () => {
      expect(convert(testClassInstance1)).toEqual({ a: 1 });
    });
    it('should convert an instantiated class without a toJSON method', () => {
      expect(convert(testClassInstance2)).toEqual({ b: 2 });
    });
    it('should convert a generator function', () => {
      expect(convert(testGenerator)).toEqual({});
    });

    // TYPED ARRAYS
    it('should NOT convert a testTypedArray1', () => {
      const fn = () => convert(testTypedArray1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray2', () => {
      const fn = () => convert(testTypedArray2);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray3', () => {
      const fn = () => convert(testTypedArray3);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray4', () => {
      const fn = () => convert(testTypedArray4);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray5', () => {
      const fn = () => convert(testTypedArray5);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray6', () => {
      const fn = () => convert(testTypedArray6);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray7', () => {
      const fn = () => convert(testTypedArray7);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray8', () => {
      const fn = () => convert(testTypedArray8);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a testTypedArray9', () => {
      const fn = () => convert(testTypedArray9);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // FUNCTION
    it('should NOT convert a testFunction1', () => {
      const fn = () => convert(testFunction1);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // REGEX
    it('should NOT convert a regex', () => {
      const fn = () => convert(testRegex1);
      expect(fn).toThrow('Cannot convert to JSON');
    });
    it('should NOT convert a RegExp', () => {
      const fn = () => convert(testRegex2);
      expect(fn).toThrow('Cannot convert to JSON');
    });

    // NOTHINGS
    it('should convert a null to null', () => {
      expect(convert(null)).toEqual(null);
    });
    it('should convert undefined to null', () => {
      expect(convert(undefined)).toEqual(null);
    });
  });
});
