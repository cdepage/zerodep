/* eslint-disable sonarjs/no-primitive-wrappers, sonarjs/no-empty-function, sonarjs/duplicates-in-character-class, sonarjs/concise-regex, sonarjs/prefer-promise-shorthand, sonarjs/single-char-in-character-classes */
import {
  testGenerator,
  testGenerator2,
  testGenerator3,
} from '../../../../testValues';
import { isEqual } from './isEqual';

const stringObj = new String('c');
const intObj = new Number(2161);
const floatObj = new Number(-273.15);
const boolObj = new Boolean(true);
const bigIntObjPos = BigInt(8675309);
const bigIntObjNeg = BigInt(-8675309);
const arrayObj = ['a', 42, 3.14, null];
const objectObj = { a: 1, b: 2 };
const dateObj = new Date('2000-01-01T00:00:00.000Z');
const errorObj = new Error('some error');
const functionObj = () => {
  return 42;
};
export const generatorObj = (function* () {
  yield 1;
  yield 'a';
  yield true;
})();
const mapObj = new Map([
  ['a', 1],
  ['b', 2],
]);
const promiseObj = new Promise(() => {});
const regexObj = new RegExp('[a-fd]', 'gi');
const setObj = new Set(['a', 'b']);
const symbolObj = Symbol('a symbol');

export const weakMapObj = new WeakMap();
export const weakMapObj2 = new WeakMap();
const wmObj1 = {};
const wmObj2 = () => {};
weakMapObj.set(wmObj1, 37);
weakMapObj.set(wmObj2, 'qwerty');
weakMapObj2.set(wmObj1, 37);
weakMapObj2.set(wmObj2, 'qwerty');

export const weakSetObj = new WeakSet();
export const weakSetObj2 = new WeakSet();
const wsObj1 = {};
const wsObj2 = {};
weakSetObj.add(wsObj1);
weakSetObj.add(wsObj2);
weakSetObj2.add(wsObj1);
weakSetObj2.add(wsObj2);

const arrayBuffer1 = new ArrayBuffer(16);
const arrayBuffer2 = new ArrayBuffer(32);
const dataView1 = new DataView(arrayBuffer1);
const dataView2 = new DataView(arrayBuffer2);
dataView1.setInt8(0, 66);
dataView2.setInt8(0, 67);

const int16ArrayObj1 = new Int16Array(21);
const int16ArrayObj2 = new Int16Array(31);
int16ArrayObj1.set([67, 68], 0);
int16ArrayObj2.set([68, 69, 70], 0);

const sameTypesData: any[] = [
  // strings
  [true, 'String', stringObj, stringObj],
  [false, 'String', new String('b'), stringObj],
  [true, 'String', 'c', 'c'],
  [false, 'String', 'd', 'e'],
  [true, 'String', '', ''],

  // integers
  [true, 'Integer', intObj, intObj],
  [true, 'Integer', 42, 42],
  [false, 'Integer', 43, 42],
  [true, 'Integer', -18, -18],
  [false, 'Integer', -19, -18],
  [true, 'Integer', 0, 0],
  [false, 'Integer', -0, 0],

  // floats
  [true, 'Float', floatObj, floatObj],
  [true, 'Float', 98.6, 98.6],
  [false, 'Float', 3.141592653589793, 3.141592653589794], // more precise floats are equal

  // booleans
  [true, 'Boolean', boolObj, boolObj],
  [true, 'Boolean', false, false],

  // bigints
  [true, 'BigInt', bigIntObjPos, bigIntObjPos],
  [true, 'BigInt', 10n, 10n],
  [true, 'BigInt', bigIntObjNeg, bigIntObjNeg],
  [true, 'BigInt', -20n, -20n],

  // number-like
  [true, 'Number', NaN, NaN],
  [true, 'Number', Number.MAX_VALUE, Number.MAX_VALUE],
  [true, 'Number', Number.MIN_VALUE, Number.MIN_VALUE],
  [true, 'Number', Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  [true, 'Number', Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],

  //

  // null
  [true, 'null', null, null],

  // arrays
  [true, 'Array', arrayObj, arrayObj], // identical memory references
  [true, 'Array', [], []], // empty
  [false, 'Array', [1, 2, 3], [1, 2, 3, 4]], // lengths different, left side shorter
  [false, 'Array', [1, 2, 3, 4, 5], [1, 2, 3, 4]], // lengths different, left side longer
  [false, 'Array', ['d', 'e'], ['e', 'd']], // identical values, out-of-order
  [false, 'Array', ['b', 42, 3.14, null], ['a', 42, 3.14, null]], // only the first item is different
  [false, 'Array', ['b', [2, 4, ['c', 'd', 6]]], [[4, ['c', 'd', 6], 2], 'b']], // nested, identical values, out-of-order
  [false, 'Array', [['c', ['d', ['e', ['f']]]]], [['d', [['g'], 'e']], 'c']], // nested, different values, out of order

  // objects
  [true, 'Object', objectObj, objectObj], // identical memory references
  [true, 'Object', {}, {}], // empty
  [false, 'Object', { c: 3, d: 4 }, { c: 3, d: 4, e: 5 }], // different lengths, left side shorter
  [false, 'Object', { c: 3, d: 4, e: 5, f: 6 }, { c: 3, d: 4, e: 5 }], // different lengths, left side longer
  [false, 'Object', { e: 5, f: 6 }, { e: 5, f: 7 }], // same keys, different values
  [
    true,
    'Object',
    { g: 5, h: { i: [1, 2, 3], j: ['a', 'b', 'c'] } },
    { h: { j: ['a', 'b', 'c'], i: [1, 2, 3] }, g: 5 },
  ], // nested, identical values, object keys out-of-order
  [
    false,
    'Object',
    { k: { l: { m: [1, 2, { o: 'p' }] } } },
    { k: { l: { m: [1, 2, { o: 'q' }] } } },
  ], // nested, unequal

  // dates
  [true, 'Date', dateObj, dateObj], // identical memory references
  [true, 'Date', new Date(), new Date()], // identical values, different constructors

  // errors
  [true, 'Error', errorObj, errorObj], // identical memory references
  [true, 'Error', new Error('error 2'), new Error('error 2')], // same name and message
  [false, 'Error', new TypeError('error'), new RangeError('error')], // different types

  // functions
  [true, 'Function', functionObj, functionObj], // identical memory references
  [true, 'Function', generatorObj, generatorObj], // identical memory references
  [true, 'Function', () => {}, () => {}], // identical, different constructors
  [false, 'Function', () => 'a', () => 'b'],

  // maps
  [true, 'Map', mapObj, mapObj], // identical memory references
  [true, 'Map', new Map([]), new Map()], // empty
  [false, 'Map', new Map([['d', 4]]), new Map([['e', 5]])],

  // promises
  [true, 'Promise', promiseObj, promiseObj], // identical memory references
  [
    false,
    'Promise',
    new Promise((resolve) => {
      resolve(true);
    }),
    new Promise((resolve) => {
      resolve(true);
    }),
  ], // no two promises are the same

  // regular expressions
  [true, 'RegularExpression', regexObj, regexObj], // identical memory references
  [true, 'RegularExpression', /\d+/g, /\d+/g], // identical, different constructors
  [false, 'RegularExpression', /[0-9]+/g, /[\d]+/g], // identical test, different ways to expres it

  // sets
  [true, 'Set', setObj, setObj], // identical memory references
  [true, 'Set', new Set(), new Set()], // empty
  [true, 'Set', new Set([1, 2, 3]), new Set([1, 2, 3])], // identical, different constructors

  // undefined
  [true, 'undefined', undefined, undefined],

  // Array Buffers
  [true, 'ArrayBuffer', arrayBuffer1, arrayBuffer1],
  [false, 'ArrayBuffer', arrayBuffer2, arrayBuffer1],
  [true, 'ArrayBuffer', new ArrayBuffer(12), new ArrayBuffer(12)],
  [false, 'ArrayBuffer', new ArrayBuffer(32), new ArrayBuffer(16)],

  // Data Views
  [true, 'DavaView', dataView1, dataView1],
  [false, 'DavaView', dataView2, dataView1],
  [
    true,
    'DavaView',
    new DataView(new ArrayBuffer(8)),
    new DataView(new ArrayBuffer(8)),
  ],
  [
    false,
    'DavaView',
    new DataView(new ArrayBuffer(16)),
    new DataView(new ArrayBuffer(32)),
  ],

  // TypedArray
  // [true, textEncoderObj, textEncoderObj],
  [false, 'TypedArray', int16ArrayObj1, int16ArrayObj2],
  [true, 'TypedArray', Int8Array.from([0]), Int8Array.from([0])],
  [false, 'TypedArray', Int8Array.from([1]), Int8Array.from([2])],
  [true, 'TypedArray', Uint8Array.from([2]), Uint8Array.from([2])],
  [false, 'TypedArray', Uint8Array.from([3]), Uint8Array.from([4])],
  [
    true,
    'TypedArray',
    Uint8ClampedArray.from([4]),
    Uint8ClampedArray.from([4]),
  ],
  [
    false,
    'TypedArray',
    Uint8ClampedArray.from([5]),
    Uint8ClampedArray.from([6]),
  ],
  [true, 'TypedArray', Int16Array.from([6]), Int16Array.from([6])],
  [false, 'TypedArray', Int16Array.from([7]), Int16Array.from([8])],
  [true, 'TypedArray', Uint16Array.from([8]), Uint16Array.from([8])],
  [false, 'TypedArray', Uint16Array.from([9]), Uint16Array.from([10])],
  [true, 'TypedArray', Int32Array.from([10]), Int32Array.from([10])],
  [false, 'TypedArray', Int32Array.from([11]), Int32Array.from([12])],
  [true, 'TypedArray', Uint32Array.from([12]), Uint32Array.from([12])],
  [false, 'TypedArray', Uint32Array.from([13]), Uint32Array.from([14])],
  [true, 'TypedArray', Float32Array.from([14]), Float32Array.from([14])],
  [false, 'TypedArray', Float32Array.from([15]), Float32Array.from([16])],
  [true, 'TypedArray', Float64Array.from([16]), Float64Array.from([16])],
  [false, 'TypedArray', Float64Array.from([17]), Float64Array.from([18])],
];

// comparing the first value of each of the above to all the other first values (quadratic operation)
const diffTypesData: any[] = [];
for (const ndxOuter in sameTypesData) {
  for (const ndxInner in sameTypesData) {
    if (ndxOuter !== ndxInner) {
      const type = `${sameTypesData[ndxOuter][1]} vs ${sameTypesData[ndxInner][1]}`;
      const a = sameTypesData[ndxOuter][2];
      const b = sameTypesData[ndxInner][2];
      diffTypesData.push([false, type, a, b]);
    }
  }
}
sameTypesData.push(...diffTypesData);

describe('isEqual', () => {
  // @ts-ignore
  test.each(sameTypesData)(
    'should return %s for "%s" %p and %p',
    (expected, type, a, b) => {
      expect(isEqual(a, b)).toEqual(expected);
    }
  );

  it('should compare two instances of the same Symbol', () => {
    expect(isEqual(symbolObj, symbolObj)).toEqual(true);
  });
  it('should throw an error for two Symbols', () => {
    const fn = () => isEqual(Symbol('one'), Symbol('one'));
    expect(fn).toThrow('Cannot compare Symbol values');
  });

  it('should compare two instances of the same WeakMap', () => {
    expect(isEqual(weakMapObj, weakMapObj)).toEqual(true);
  });
  it('should throw an error for two empty WeakMaps', () => {
    const fn = () => isEqual(new WeakMap(), new WeakMap());
    expect(fn).toThrow('Cannot compare WeakMap values');
  });
  it('should throw an error for two populated WeakMaps', () => {
    const fn = () => isEqual(weakMapObj, weakMapObj2);
    expect(fn).toThrow('Cannot compare WeakMap values');
  });

  it('should compare two instances of the same WeakSet', () => {
    expect(isEqual(weakSetObj, weakSetObj)).toEqual(true);
  });
  it('should throw an error for two empty WeakSets', () => {
    const fn = () => isEqual(new WeakSet(), new WeakSet());
    expect(fn).toThrow('Cannot compare WeakSet values');
  });
  it('should throw an error for two populated WeakSets', () => {
    const fn = () => isEqual(weakSetObj, weakSetObj2);
    expect(fn).toThrow('Cannot compare WeakSet values');
  });

  const exampleCases = [
    ['array - empty', [], [], true],
    ['array - ints - equal', [1, 2], [1, 2], true],
    ['array - ints - unequal', [1, 2], [2, 1], false],
    [
      'array - ints nested - equal',
      ['b', [2, 4, ['c', 'd', 6]]],
      ['b', [2, 4, ['c', 'd', 6]]],
      true,
    ],
    [
      'array - ints nested - unequal',
      ['b', [2, 4, ['c', 'd', 6]]],
      [[4, ['c', 'd', 6], 2], 'b'],
      false,
    ],

    ['bigints - equal', 42n, 42n, true],
    ['bigints - equal', 0n, 0, false],
    ['bigints - equal+', 8675309n, BigInt(8675309), true],

    [
      'dates - equal',
      new Date('2000-01-01T00:00:00.000Z'),
      new Date('2000-01-01T00:00:00.000Z'),
      true,
    ],
    [
      'dates - unequal',
      new Date('2000-01-01T00:00:00.000Z'),
      new Date('1999-12-31T23:59:59.999Z'),
      false,
    ],

    ['empty - null', null, null, true],
    ['empty - undefined', undefined, undefined, true],
    ['empty - null+undefined', null, undefined, false],

    ['errors - equal', new Error('message'), new Error('message'), true],
    ['errors - unequal', new Error('xxxx'), new Error('yyyy'), false],
    ['errors - unequal', new TypeError('err'), new RangeError('err'), false],

    ['floats - equal', 0.08, 0.08, true],
    ['floats - equal Pi', Math.PI, Math.PI, true],
    ['floats - equal+', -273.15, new Number(-273.15), false],
    ['floats - unequal', 173.5, 42, false],

    ['functions - equal', () => 'function', () => 'function', true],
    ['functions - unequal', () => 'xxxx', () => 'yyyy', false],

    ['generators - equal', testGenerator, testGenerator2, false],
    ['generators - unequal', testGenerator, testGenerator3, false],

    ['maps - equal', new Map(), new Map(), true],
    [
      'maps - equal items',
      new Map([['key1', 123]]),
      new Map([['key1', 123]]),
      true,
    ],
    [
      'maps - unequal keys',
      new Map([['key1', 123]]),
      new Map([['2key', 123]]),
      false,
    ],
    [
      'maps - unequal items',
      new Map([['key1', 123]]),
      new Map([['key1', 456]]),
      false,
    ],
    [
      'maps - unordered keys',
      new Map([
        ['key1', 123],
        ['key2', 456],
      ]),
      new Map([
        ['key2', 456],
        ['key1', 456],
      ]),
      false,
    ],
    [
      'maps - missing keys',
      new Map([
        ['key1', 123],
        ['key2', 456],
      ]),
      new Map([['key1', 456]]),
      false,
    ],

    ['numbers - equal', 0, 0, true],
    ['numbers - unequal 0', 0, -0, false],
    ['numbers - equal sci', 3e8, 3e8, true],
    ['numbers - infinity', Infinity, Infinity, true],
    [
      'numbers - max int',
      Number.MAX_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER,
      true,
    ],
    [
      'numbers - min & max int',
      Number.MAX_SAFE_INTEGER,
      Number.MIN_SAFE_INTEGER,
      false,
    ],
    ['numbers - NaN', Number.NaN, Number.NaN, true],
    ['numbers - equal+', 2161, new Number(2161), false],

    ['pojo - equal empty', {}, {}, true],
    ['pojo - equal populated', { key: 'string' }, { key: 'string' }, true],
    ['pojo - equal array', { key: [1, 2, 3] }, { key: [1, 2, 3] }, true],
    ['pojo - unequal array', { key: [1, 2, 3] }, { key: [3, 2, 1] }, false],
    [
      'pojo - equal obj',
      { a: 1, b: { c: [1, 2] } },
      { a: 1, b: { c: [1, 2] } },
      true,
    ],
    [
      'pojo - equal obj unordered',
      { a: 1, b: { c: [1, 2] } },
      { b: { c: [1, 2] }, a: 1 },
      true,
    ],
    [
      'pojo - equal obj+array',
      { a: 1, b: { c: [1, 2] } },
      { a: 1, b: { c: [1, 2] } },
      true,
    ],
    [
      'pojo - unequal obj+array',
      { a: 1, b: { c: [1, 2] } },
      { a: 1, b: { c: [2, 1] } },
      false,
    ],

    [
      'promises - equal empty',
      new Promise(() => {}),
      new Promise(() => {}),
      false,
    ],
    ['promises - equal all', Promise.all([]), Promise.all([]), false],
    ['promises - equal race', Promise.race([]), Promise.race([]), false],
    ['promises - equal resolved', Promise.resolve(), Promise.resolve(), false],

    ['regex - equal literal', /[aeiou]+/gi, /[aeiou]+/gi, true],
    ['regex - equal+', new RegExp('d', 'gi'), new RegExp('d', 'gi'), true],
    ['regex - equal mixed', /[aeiou]+/gi, new RegExp('[aeiou]+', 'gi'), true],
    ['regex - equal+', new RegExp('abc'), new RegExp('def'), false],

    ['set - equal', new Set(), new Set(), true],
    ['set - equal populated', new Set([1, 2, 3]), new Set([1, 2, 3]), true],
    ['set - unequal populated', new Set([1, 2, 3]), new Set([3, 2, 1]), true],
    ['set - unequal populated', new Set([1, 2, 3]), new Set([1, 2]), false],

    ['string - equal empty', '', '', true],
    ['string - equal empty', 'asdf', 'asdf', true],
    ['string - equal empty', 'asdf', 'qerty', false],
    ['string - equal empty', '0', new String('G'), false],

    [
      'typedArray - BigInt64Array',
      new BigInt64Array(2),
      new BigInt64Array(2),
      true,
    ],
    [
      'typedArray - BigUint64Array',
      new BigUint64Array(2),
      new BigUint64Array(2),
      true,
    ],
    [
      'typedArray - Float32Array',
      new Float32Array(2),
      new Float32Array(2),
      true,
    ],
    [
      'typedArray - Float64Array',
      new Float64Array(2),
      new Float64Array(2),
      true,
    ],
    ['typedArray - Int16Array', new Int16Array(2), new Int16Array(2), true],
    ['typedArray - Int32Array', new Int32Array(2), new Int32Array(2), true],
    ['typedArray - Int8Array', new Int8Array(2), new Int8Array(2), true],
    ['typedArray - Uint16Array', new Uint16Array(2), new Uint16Array(2), true],
    ['typedArray - Uint32Array', new Uint32Array(2), new Uint32Array(2), true],
    ['typedArray - Uint8Array', new Uint8Array(2), new Uint8Array(2), true],
    [
      'typedArray - Uint8ClampedArray',
      new Uint8ClampedArray(2),
      new Uint8ClampedArray(2),
      true,
    ],
  ];
  test.each(exampleCases)(
    'should assess %s',
    // @ts-ignore
    async (title, value1, value2, result) => {
      expect(isEqual(value1, value2)).toEqual(result);
    }
  );

  const examplesThatThrow = [
    ['symbol - identical', Symbol(), Symbol()],
    ['symbol - identical+', Symbol('val'), Symbol('val')],

    [
      'typedArray - SharedArrayBuffer',
      new SharedArrayBuffer(2),
      new SharedArrayBuffer(2),
    ],
  ];
  // @ts-ignore
  test.each(examplesThatThrow)(
    'should throw for %s',
    // @ts-ignore
    async (title, value1, value2) => {
      const fn = () => isEqual(value1, value2);
      expect(fn).toThrow();
    }
  );
});
