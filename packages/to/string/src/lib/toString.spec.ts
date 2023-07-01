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
import { toString } from './toString';

describe('toString', () => {
  // NUMBERS
  it('should convert a float', () => {
    expect(toString(3.141592653589793)).toEqual('3.141592653589793');
  });
  it('should convert an integer', () => {
    expect(toString(42)).toEqual('42');
  });
  it('should convert a scientific notation', () => {
    expect(toString(100e10)).toEqual('1000000000000');
  });
  it('should convert NaN', () => {
    expect(toString(NaN)).toEqual('NaN');
  });
  it('should convert an infinite number', () => {
    expect(toString(Number.POSITIVE_INFINITY)).toEqual('Infinity');
  });

  // BIG INT
  it('should NOT convert a bigInt', () => {
    expect(toString(8675309n)).toEqual('8675309');
  });

  // OBJECT LITERALS
  it('should convert an object literal', () => {
    expect(toString({ a: 'a', b: 'b' })).toEqual('{"a":"a","b":"b"}');
  });
  it('should convert an object literal with nested values', () => {
    expect(
      toString({
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
    expect(toString({ bigInt: 8675309n })).toEqual('{"bigInt":"8675309"}');
  });
  it('should convert an instantiated class with a toString method', () => {
    // @ts-ignore
    expect(toString({ instance: testClassInstance1 })).toEqual(
      '{"instance":{"a":1}}'
    );
  });
  it('should NOT convert an object literal with a Symbol', () => {
    // @ts-ignore
    const fn = () => toString({ symbol: testSymbol1 });
    expect(fn).toThrow('Cannot convert to string');
  });

  // ARRAYS
  it('should convert a array of Sets', () => {
    const obj = [new Set(['a', 'b']), new Set(['c', 'd'])];
    expect(toString(obj)).toEqual('a, b, c, d');
  });

  // BOOLEANS
  it('should convert a boolean true', () => {
    expect(toString(true)).toEqual('true');
  });
  it('should convert a boolean false', () => {
    expect(toString(false)).toEqual('false');
  });

  // DATES
  it('should convert a date', () => {
    const date = new Date('2022-04-22T10:30:00.000Z');
    expect(toString(date)).toEqual('2022-04-22T10:30:00.000Z');
  });

  // SET
  it('should convert a Set', () => {
    const obj = new Set(['a', 'b']);
    expect(toString(obj)).toEqual('a, b');
  });
  it('should convert a Set of Sets', () => {
    const s1 = new Set(['a', 'b']);
    const s2 = new Set(['c', 'd']);
    const obj = new Set([s1, s2]);
    expect(toString(obj)).toEqual('a, b, c, d');
  });

  // MAP
  it('should convert a Map', () => {
    const obj = new Map([
      ['a', 1],
      ['b', 2],
    ]);
    expect(toString(obj)).toEqual('{"a":1,"b":2}');
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
    expect(toString(obj)).toEqual(
      '{"a":{"aa":11,"bb":22},"c":{"dd":44,"ee":55}}'
    );
  });

  // WEAKMAP
  it('should NOT convert a WeakMap', () => {
    // @ts-ignore
    const fn = () => toString(testWeakMap);
    expect(fn).toThrow('Cannot convert to string');
  });

  // WEAKSET
  it('should NOT convert a WeakSet', () => {
    // @ts-ignore
    const fn = () => toString(testWeakSet);
    expect(fn).toThrow('Cannot convert to string');
  });

  // PROMISE
  it('should NOT convert a Promise', () => {
    // @ts-ignore
    const fn = () => toString(testPromise1);
    expect(fn).toThrow('Cannot convert to string');
  });

  // SYMBOL
  it('should NOT convert a Symbol', () => {
    // @ts-ignore
    const fn = () => toString(testSymbol1);
    expect(fn).toThrow('Cannot convert to string');
  });

  // CLASSES
  it('should NOT convert a class with a toJSON method', () => {
    const fn = () => toString(TestClass1);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a class without a toJSON method', () => {
    const fn = () => toString(TestClass2);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should convert an instantiated class with a toString method', () => {
    expect(toString(testClassInstance1)).toEqual('{"a":1}');
  });
  it('should convert an instantiated class without a toString method', () => {
    expect(toString(testClassInstance2)).toEqual('{"b":2}');
  });
  it('should convert a generator function', () => {
    // @ts-ignore
    expect(toString(testGenerator)).toEqual('{}');
  });

  // TYPED ARRAYS
  it('should NOT convert a testTypedArray1', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray1);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray2', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray2);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray3', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray3);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray4', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray4);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray5', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray5);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray6', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray6);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray7', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray7);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray8', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray8);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a testTypedArray9', () => {
    // @ts-ignore
    const fn = () => toString(testTypedArray9);
    expect(fn).toThrow('Cannot convert to string');
  });

  // FUNCTION
  it('should NOT convert a testFunction1', () => {
    // @ts-ignore
    const fn = () => toString(testFunction1);
    expect(fn).toThrow('Cannot convert to string');
  });

  // REGEX
  it('should NOT convert a regex', () => {
    // @ts-ignore
    const fn = () => toString(testRegex1);
    expect(fn).toThrow('Cannot convert to string');
  });
  it('should NOT convert a RegExp', () => {
    // @ts-ignore
    const fn = () => toString(testRegex2);
    expect(fn).toThrow('Cannot convert to string');
  });

  // NOTHINGS
  it('should convert a null to null', () => {
    expect(toString(null)).toEqual('');
  });
  it('should convert undefined to null', () => {
    expect(toString(undefined)).toEqual('');
  });
});
