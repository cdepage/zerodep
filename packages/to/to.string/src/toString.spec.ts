import {
  TestClass1,
  TestClass2,
  testClassInstance1,
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
import { toString, toStringHOF } from './toString';

describe('toString', () => {
  describe('with default options', () => {
    const convert = toString;

    // NUMBERS
    it('should convert a float', () => {
      expect(convert(3.141592653589793)).toEqual('3.141593');
    });
    it('should convert an integer', () => {
      expect(convert(42)).toEqual('42');
    });
    it('should convert a scientific notation', () => {
      expect(convert(100e10)).toEqual('1,000,000,000,000');
    });
    it('should convert NaN', () => {
      expect(convert(NaN)).toEqual('NaN');
    });
    it('should NOT convert an infinite number', () => {
      expect(convert(Number.POSITIVE_INFINITY)).toEqual('Infinity');
    });

    // BIG INT
    it('should NOT convert a bigInt', () => {
      expect(convert(8675309n)).toEqual('8,675,309');
    });

    // OBJECT LITERALS
    it('should convert an object literal', () => {
      expect(convert({ a: 'a', b: 'b' })).toEqual('{"a":"a","b":"b"}');
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
      ).toEqual(
        '{"a":{"int":1,"str":"3","date":"2022-04-29T00:00:00.000Z","nll":null,"arrNum":[1,2,3],"arrLetter":["a","b","c"],"boolT":true,"boolF":false}}'
      );
    });
    it('should convert an object literal with a BigInt', () => {
      expect(convert({ bigInt: 8675309n })).toEqual('{"bigInt":"8675309"}');
    });
    it('should convert an instantiated class with a toString method', () => {
      expect(convert({ instance: testClassInstance1 })).toEqual('{"instance":{"a":1}}');
    });
    it('should NOT convert an object literal with a Symbol', () => {
      const fn = () => convert({ symbol: testSymbol1 });
      expect(fn).toThrow('Cannot convert to string');
    });

    // ARRAYS
    it('should convert a array of Sets', () => {
      const obj = [new Set(['a', 'b']), new Set(['c', 'd'])];
      expect(convert(obj)).toEqual('a, b, c, d');
    });

    // BOOLEANS
    it('should convert a boolean true', () => {
      expect(convert(true)).toEqual('true');
    });
    it('should convert a boolean false', () => {
      expect(convert(false)).toEqual('false');
    });

    // DATES
    it('should convert a date', () => {
      const date = new Date('2022-04-22T10:30:00.000Z');
      expect(convert(date)).toEqual('2022-04-22T10:30:00.000Z');
    });

    // SET
    it('should convert a Set', () => {
      const obj = new Set(['a', 'b']);
      expect(convert(obj)).toEqual('a, b');
    });
    it('should convert a Set of Sets', () => {
      const s1 = new Set(['a', 'b']);
      const s2 = new Set(['c', 'd']);
      const obj = new Set([s1, s2]);
      expect(convert(obj)).toEqual('a, b, c, d');
    });

    // MAP
    it('should convert a Map', () => {
      const obj = new Map([
        ['a', 1],
        ['b', 2],
      ]);
      expect(convert(obj)).toEqual('{"a":1,"b":2}');
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
      expect(convert(obj)).toEqual('{"a":{"aa":11,"bb":22},"c":{"dd":44,"ee":55}}');
    });

    // WEAKMAP
    it('should NOT convert a WeakMap', () => {
      const fn = () => convert(testWeakMap);
      expect(fn).toThrow('Cannot convert to string');
    });

    // WEAKSET
    it('should NOT convert a WeakSet', () => {
      const fn = () => convert(testWeakSet);
      expect(fn).toThrow('Cannot convert to string');
    });

    // PROMISE
    it('should NOT convert a Promise', () => {
      const fn = () => convert(testPromise1);
      expect(fn).toThrow('Cannot convert to string');
    });

    // SYMBOL
    it('should NOT convert a Symbol', () => {
      const fn = () => convert(testSymbol1);
      expect(fn).toThrow('Cannot convert to string');
    });

    // CLASSES
    it('should NOT convert a class with a toJSON method', () => {
      const fn = () => convert(TestClass1);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a class without a toJSON method', () => {
      const fn = () => convert(TestClass2);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should convert an instantiated class with a toString method', () => {
      expect(convert(testClassInstance1)).toEqual('{"a":1}');
    });
    it('should convert an instantiated class without a toString method', () => {
      expect(convert(testClassInstance1)).toEqual('{"a":1}');
    });
    it('should convert a generator function', () => {
      expect(convert(testGenerator)).toEqual('{}');
    });

    // TYPED ARRAYS
    it('should NOT convert a testTypedArray1', () => {
      const fn = () => convert(testTypedArray1);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray2', () => {
      const fn = () => convert(testTypedArray2);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray3', () => {
      const fn = () => convert(testTypedArray3);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray4', () => {
      const fn = () => convert(testTypedArray4);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray5', () => {
      const fn = () => convert(testTypedArray5);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray6', () => {
      const fn = () => convert(testTypedArray6);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray7', () => {
      const fn = () => convert(testTypedArray7);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray8', () => {
      const fn = () => convert(testTypedArray8);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray9', () => {
      const fn = () => convert(testTypedArray9);
      expect(fn).toThrow('Cannot convert to string');
    });

    // FUNCTION
    it('should NOT convert a testFunction1', () => {
      const fn = () => convert(testFunction1);
      expect(fn).toThrow('Cannot convert to string');
    });

    // REGEX
    it('should NOT convert a regex', () => {
      const fn = () => convert(testRegex1);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a RegExp', () => {
      const fn = () => convert(testRegex2);
      expect(fn).toThrow('Cannot convert to string');
    });

    // NOTHINGS
    it('should convert a null to null', () => {
      expect(convert(null)).toEqual('');
    });
    it('should convert undefined to null', () => {
      expect(convert(undefined)).toEqual('');
    });
  });

  describe('with custom locale', () => {
    const convert = toStringHOF({
      locale: 'fr-FR',
      booleanValues: ['oui', 'non'],
      maximumFractionDigits: 4,
    });

    // STRING
    it('should NOT convert a string', () => {
      expect(convert('a string')).toEqual('a string');
    });

    // NUMBERS
    it('should convert a float', () => {
      expect(convert(3.141593653589793)).toEqual('3,1416');
    });
    it('should convert an integer', () => {
      expect(convert(42)).toEqual('42');
    });
    it('should convert a scientific notation', () => {
      expect(convert(100e10)).toEqual('1 000 000 000 000');
    });
    it('should convert NaN', () => {
      expect(convert(NaN)).toEqual('NaN');
    });
    it('should NOT convert an infinite number', () => {
      expect(convert(Number.POSITIVE_INFINITY)).toEqual('Infinity');
    });

    // BIG INT
    it('should NOT convert a bigInt', () => {
      expect(convert(8675309n)).toEqual('8 675 309');
    });

    // OBJECT LITERALS
    it('should convert an object literal', () => {
      expect(convert({ a: 'a', b: 'b' })).toEqual('{"a":"a","b":"b"}');
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
      ).toEqual(
        '{"a":{"int":1,"str":"3","date":"2022-04-29T00:00:00.000Z","nll":null,"arrNum":[1,2,3],"arrLetter":["a","b","c"],"boolT":true,"boolF":false}}'
      );
    });
    it('should convert an object literal with a BigInt', () => {
      expect(convert({ bigInt: 8675309n })).toEqual('{"bigInt":"8675309"}');
    });
    it('should convert an instantiated class with a toString method', () => {
      expect(convert({ instance: testClassInstance1 })).toEqual('{"instance":{"a":1}}');
    });
    it('should NOT convert an object literal with a Symbol', () => {
      const fn = () => convert({ symbol: testSymbol1 });
      expect(fn).toThrow('Cannot convert to string');
    });

    // ARRAYS
    it('should convert a array of Sets', () => {
      const obj = [new Set(['a', 'b']), new Set(['c', 'd'])];
      expect(convert(obj)).toEqual('a, b, c, d');
    });

    // BOOLEANS
    it('should convert a boolean true', () => {
      expect(convert(true)).toEqual('oui');
    });
    it('should convert a boolean false', () => {
      expect(convert(false)).toEqual('non');
    });

    // SET
    it('should convert a Set', () => {
      const obj = new Set(['a', 'b']);
      expect(convert(obj)).toEqual('a, b');
    });
    it('should convert a Set of Sets', () => {
      const s1 = new Set(['a', 'b']);
      const s2 = new Set(['c', 'd']);
      const obj = new Set([s1, s2]);
      expect(convert(obj)).toEqual('a, b, c, d');
    });

    // MAP
    it('should convert a Map', () => {
      const obj = new Map([
        ['a', 1],
        ['b', 2],
      ]);
      expect(convert(obj)).toEqual('{"a":1,"b":2}');
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
      expect(convert(obj)).toEqual('{"a":{"aa":11,"bb":22},"c":{"dd":44,"ee":55}}');
    });

    // WEAKMAP
    it('should NOT convert a WeakMap', () => {
      const fn = () => convert(testWeakMap);
      expect(fn).toThrow('Cannot convert to string');
    });

    // WEAKSET
    it('should NOT convert a WeakSet', () => {
      const fn = () => convert(testWeakSet);
      expect(fn).toThrow('Cannot convert to string');
    });

    // PROMISE
    it('should NOT convert a Promise', () => {
      const fn = () => convert(testPromise1);
      expect(fn).toThrow('Cannot convert to string');
    });

    // SYMBOL
    it('should NOT convert a Symbol', () => {
      const fn = () => convert(testSymbol1);
      expect(fn).toThrow('Cannot convert to string');
    });

    // CLASSES
    it('should NOT convert a class with a toJSON method', () => {
      const fn = () => convert(TestClass1);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a class without a toJSON method', () => {
      const fn = () => convert(TestClass2);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should convert an instantiated class with a toString method', () => {
      expect(convert(testClassInstance1)).toEqual('{"a":1}');
    });
    it('should convert an instantiated class without a toString method', () => {
      expect(convert(testClassInstance1)).toEqual('{"a":1}');
    });
    it('should convert a generator function', () => {
      expect(convert(testGenerator)).toEqual('{}');
    });

    // TYPED ARRAYS
    it('should NOT convert a testTypedArray1', () => {
      const fn = () => convert(testTypedArray1);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray2', () => {
      const fn = () => convert(testTypedArray2);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray3', () => {
      const fn = () => convert(testTypedArray3);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray4', () => {
      const fn = () => convert(testTypedArray4);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray5', () => {
      const fn = () => convert(testTypedArray5);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray6', () => {
      const fn = () => convert(testTypedArray6);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray7', () => {
      const fn = () => convert(testTypedArray7);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray8', () => {
      const fn = () => convert(testTypedArray8);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a testTypedArray9', () => {
      const fn = () => convert(testTypedArray9);
      expect(fn).toThrow('Cannot convert to string');
    });

    // FUNCTION
    it('should NOT convert a testFunction1', () => {
      const fn = () => convert(testFunction1);
      expect(fn).toThrow('Cannot convert to string');
    });

    // REGEX
    it('should NOT convert a regex', () => {
      const fn = () => convert(testRegex1);
      expect(fn).toThrow('Cannot convert to string');
    });
    it('should NOT convert a RegExp', () => {
      const fn = () => convert(testRegex2);
      expect(fn).toThrow('Cannot convert to string');
    });

    // NOTHINGS
    it('should convert a null to null', () => {
      expect(convert(null)).toEqual('');
    });
    it('should convert undefined to null', () => {
      expect(convert(undefined)).toEqual('');
    });
  });

  describe('with custom time styles', () => {
    const convert1 = toStringHOF({
      locale: 'en-US',
      timeStyle: 'short',
      timeZone: 'America/New_York',
    });
    const convert2 = toStringHOF({
      locale: 'en-GB',
      timeStyle: 'short',
      timeZone: 'Europe/London',
    });
    const convert3 = toStringHOF({ locale: 'fr-FR', timeStyle: 'short', timeZone: 'Europe/Paris' });

    const date = new Date('2022-04-22T10:30:00.000Z');

    it('should convert a date us', () => {
      expect(convert1(date)).toEqual('6:30 AM');
    });
    it('should convert a date gb', () => {
      expect(convert2(date)).toEqual('11:30');
    });
    it('should convert a date fr', () => {
      expect(convert3(date)).toEqual('12:30');
    });
  });

  describe('with custom date styles', () => {
    const convert1 = toStringHOF({
      locale: 'en-US',
      dateStyle: 'short',
    });
    const convert2 = toStringHOF({
      locale: 'en-GB',
      dateStyle: 'short',
    });
    const convert3 = toStringHOF({ locale: 'fr-FR', dateStyle: 'short' });

    const date = new Date('2022-04-22T10:30:00.000Z');

    it('should convert a date us', () => {
      expect(convert1(date)).toEqual('4/22/22');
    });
    it('should convert a date gb', () => {
      expect(convert2(date)).toEqual('22/04/2022');
    });
    it('should convert a date fr', () => {
      expect(convert3(date)).toEqual('22/04/2022');
    });
  });
});
