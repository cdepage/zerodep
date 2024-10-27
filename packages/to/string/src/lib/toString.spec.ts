import {
  testAggregateError,
  testDate1,
  testDate2,
  testError,
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
  it('should NOT convert a generator function', () => {
    // @ts-ignore
    const fn = () => toString(testGenerator);
    expect(fn).toThrow('Cannot convert to string');
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

  const exampleCases = [
    ['array - empty', [], ''],
    ['array - nonempty int', [1, 2, 3], '1, 2, 3'],
    ['array - nonempty str', ['a', 'b', 'c'], 'a, b, c'],
    ['bigint - 42n', 42n, '42'],
    ['bigint - 0n', 0n, '0'],
    ['bigint - -0n', -0n, '0'],
    ['bigint - -42n', -42n, '-42'],
    ['boolean - true', true, 'true'],
    ['boolean - false', false, 'false'],
    ['date - past', testDate1, '1999-12-31T23:59:59.999Z'],
    ['date - future', testDate2, '2022-04-27T18:02:36.634Z'],
    ['float - 3.14', 3.14, '3.14'],
    ['float - 0.0', 0.0, '0'],
    ['float - -0.0', -0.0, '0'],
    ['float - -3.14', -3.14, '-3.14'],
    ['float - Math.E', Math.E, '2.718281828459045'],
    ['float - Math.PI', Math.PI, '3.141592653589793'],
    ['float - min value', Number.MIN_VALUE, '5e-324'],
    ['map - empty', testMapEmpty, '{}'],
    ['map - nonempty number', testMapNumbers, '{"key":123}'],
    ['map - nonempty string', testMapStrings, '{"key":"abc"}'],
    ['nothing - null', null, ''],
    ['nothing - undefined', undefined, ''],
    ['number - infinity - positive', Number.POSITIVE_INFINITY, 'Infinity'],
    ['number - max safe int', Number.MAX_SAFE_INTEGER, '9007199254740991'],
    ['number - max value', Number.MAX_VALUE, '1.7976931348623157e+308'],
    ['number - 3e8', 3e8, '300000000'],
    ['number - 42', 42, '42'],
    ['number - 1', 1, '1'],
    ['number - 0', 0, '0'],
    ['number - -0', -0, '0'],
    ['number - -1', -1, '-1'],
    ['number - -42', -42, '-42'],
    ['number - -3e8', -3e8, '-300000000'],
    ['number - min safe int', Number.MIN_SAFE_INTEGER, '-9007199254740991'],
    ['number - infinity - negative', Number.NEGATIVE_INFINITY, '-Infinity'],
    ['number - NaN', Number.NaN, 'NaN'],
    ['pojo - empty', {}, '{}'],
    ['pojo - nonempty string', { key: 'string' }, '{"key":"string"}'],
    ['pojo - nonempty number', { key: 123 }, '{"key":123}'],
    ['set - empty', testSetEmpty, ''],
    ['set - numbers', testSetNumbers, '1, 2, 3'],
    ['set - strings', testSetStrings, 'a, b, c'],
    ['string - ""', '', ''],
    ['string - "long string"', 'a longer string', 'a longer string'],
    ['string - "1000n"', '1000n', '1000n'],
    ['string - "3e8"', '3e8', '3e8'],
    ['string - "42"', '42', '42'],
    ['string - "3.14"', '3.14', '3.14'],
    ['string - "0"', '0', '0'],
    ['string - "-0"', '-0', '-0'],
    ['string - "-3.14"', '-3.14', '-3.14'],
    ['string - "-42"', '-42', '-42'],
    ['string - "-3e8"', '-3e8', '-3e8'],
    ['string - "-1000n"', '-1000n', '-1000n'],
    ['class', testClassInstance1, '{"a":1}'],
  ];
  // @ts-ignore
  test.each(exampleCases)('should assess %s', async (title, value, result) => {
    // @ts-ignore
    expect(toString(value)).toEqual(result);
  });

  const invalidCases = [
    ['class', TestClass1],
    ['error', testError],
    ['error - aggregate', testAggregateError],
    ['function', testFunction1],
    ['function - async', testFunctionAsync],
    ['generator', testFunctionGenerator],
    ['generator - async', testFunctionGeneratorAsync],
    ['promise', testPromise1],
    ['promise - all', testPromiseAll],
    ['promise - allSettled', testPromiseAllSettled],
    ['promise - race', testPromiseRace],
    ['promise - resolved', testPromiseResolved1],
    ['regex1', testRexExp1],
    ['regex2', testRexExp2],
    ['symbol', testSymbol1],
    ['symbol + description', testSymbol2],
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
      const fn = () => toString(value);
      expect(fn).toThrow('Cannot convert to string');
    }
  );
});
