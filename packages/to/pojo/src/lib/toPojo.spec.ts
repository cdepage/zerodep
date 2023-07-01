import { ZeroDepError } from '@zerodep/errors';
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
      expect(toPojo(testGenerator)).toEqual({});
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
  });
});
