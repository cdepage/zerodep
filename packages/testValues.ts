export const testDate1 = new Date('1999-12-31T23:59:59.999Z');
export const testDate2 = new Date('2022-04-27T18:02:36.634Z');

export const testSymbol1 = Symbol();
export const testSymbol2 = Symbol();

export const testPromise1 = new Promise(() => {});
export const testPromise2 = new Promise(() => {});

export const testPromiseResolved1 = Promise.resolve('a');
export const testPromiseResolved2 = Promise.resolve(2);

const p1 = new Promise(() => {});
const p2 = new Promise(() => {});
const testPromiseAllUnresolved = Promise.all([p1, p2]);
const testPromiseAllResolved = Promise.all([
  testPromiseResolved1,
  testPromiseResolved2,
]);

export class TestClass1 {
  public a: any;
  constructor(prop1: any) {
    this.a = prop1;
  }
  toString() {
    return this.a;
  }
  toJSON() {
    return { a: this.a };
  }
}
export class TestClass2 {
  public b: any;
  constructor(prop2: any) {
    this.b = prop2;
  }
}
export const testClassInstance1 = new TestClass1(1);
export const testClassInstance2 = new TestClass2(2);

export const testWeakMap = new WeakMap();
const wmObj1 = {};
const wmObj2 = () => {};
testWeakMap.set(wmObj1, 37);
testWeakMap.set(wmObj2, 'qwerty');

export const testWeakSet = new WeakSet();
const wsObj1 = {};
const wsObj2 = {};
testWeakSet.add(wsObj1);
testWeakSet.add(wsObj2);

export const testTypedArray1 = new Int8Array(2);
export const testTypedArray2 = new Uint8Array(2);
export const testTypedArray3 = new Uint8ClampedArray(2);
export const testTypedArray4 = new Int16Array(2);
export const testTypedArray5 = new Uint16Array(2);
export const testTypedArray6 = new Int32Array(2);
export const testTypedArray7 = new Uint32Array(2);
export const testTypedArray8 = new Float32Array(2);
export const testTypedArray9 = new Float64Array(2);

export const testGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
export const testGenerator2 = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
export const testGenerator3 = (function* () {
  yield 4;
  yield 5;
})();

export const testFunction1 = () => {};

export const testRegex1 = /[a-f\d]/gi;
export const testRegex2 = new RegExp('$[a-c]{2}]', 'g');

export const testData = {
  strings: [
    ['string of all-lowercase letters', 'password'],
    ['string of all-uppercase letters', 'SECRET'],
    ['string of lowercase letters and spaces', 'my secret password'],
    ['string of uppercase letters and spaces', 'MY SECRET PASSWORD'],
    ['string of mixed-case letters and spaces', 'Love Secret Sex God'],
    ['string of mixed-case letters, spaces and numbers', 'L0v3 S3cre7 S3x G0d'],
    ['string of seemingly strong password characters', 'L()v3-$Ecr3T_$3x 6*d!'],
    ['empty string', ''],
    [
      'string of great length',
      'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.',
    ],
    ['string from new String()', new String('a string')],
  ],

  integers: [
    ['positive integer', 42],
    ['negative integer', -273],
    ['positive zero', 0],
    ['negative zero', -0],
    ['positive largest 32-bit integer', Number.MAX_VALUE],
    ['negative largest 32-bit integer', -Number.MAX_VALUE],
    ['integer from new Number()', new Number(42)],
  ],

  integersENotation: [
    ['positive e-notation integer', 100e10],
    ['negative e-notation integer', -100e10],
  ],

  floats: [
    ['positive float', 3.14],
    ['negative float', -6.66],
    ['infinite positive float', 2 / 3],
    ['infinite negative float', -1 / 3],
    ['positive smallest 32-bit integer', Number.MIN_VALUE],
    ['negative smallest 32-bit integer', -Number.MIN_VALUE],
    ['float from new Number()', new Number(3.14)],
  ],

  floatENotation: [
    ['positive e-notation float', 100e-10],
    ['negative e-notation float', -100e-10],
  ],

  numberIsh: [
    ['positive infinity', Number.POSITIVE_INFINITY],
    ['negative infinity', Number.NEGATIVE_INFINITY],
    ['positive NaN', NaN],
    ['negative NaN', -NaN],
  ],

  bigInts: [
    // @ts-ignore
    ['positive BigInt', 10n],
    // @ts-ignore
    ['negative BigInt', 20n],
    ['positive large BigInt', BigInt(Number.MAX_VALUE + 1)],
    ['negative large BigInt', BigInt(-Number.MAX_VALUE - 1)],
  ],

  objectLiteralsSafe: [
    ['empty object literal', {}],
    ['object literal of strings', { a: 'a', b: 'b' }],
    ['object literal of empty strings', { a: '', b: '' }],
    ['object literal of positive integers', { a: 1, b: 2 }],
    ['object literal of negative integers', { a: -1, b: -2 }],
    ['object literal of positive floats', { a: 3.14, b: 0.08 }],
    ['object literal of negative floats', { a: -3.14, b: -0.08 }],
    ['object literal of booleans ', { a: true, b: false }],
    ['object literal of arrays ', { a: [], b: [] }],
    ['object literal of objects ', { a: {}, b: {} }],
    ['object literal of nulls ', { a: null, b: null }],
  ],

  objectLiteralsUnsafe: [
    ['object literal of undefined ', { a: undefined, b: undefined }],
    ['object literal of dates ', { a: testDate1, b: testDate2 }],
    ['object literal of symbols ', { a: testSymbol1, b: testSymbol2 }],
    ['object literal of promises ', { a: testPromise1, b: testPromise2 }],
  ],

  arraysSafe: [
    ['empty array', []],
    ['array of positive integers', [1, 2]],
    ['array of negative integers', [-1, -2]],
    ['array of positive floats', [3.14, 0.08]],
    ['array of negative floats', [-3.14, -0.08]],
    ['array of strings', ['a', 'b']],
    ['array of booleans', [true, false]],
    ['array of arrays', [[], []]],
    ['array of objects', [{}, {}]],
    ['array of nulls', [null, null]],
  ],

  arraysUnsafe: [
    ['array of undefined', [undefined, undefined]],
    ['array of dates', [testDate1, testDate2]],
    ['array of symbols', [testSymbol1, testSymbol2]],
    ['array of promises', [testPromise1, testPromise2]],
    ['array of classes', [TestClass1, TestClass2]],
    ['array of instantiated classes', [testClassInstance1, testClassInstance2]],
    ['array from new Array()', new Array(1)],
  ],

  // arrayFroms: [],

  booleans: [
    ['boolean true', true],
    ['boolean false', false],
    ['boolean from new Boolean()', new Boolean(true)],
  ],

  dates: [['date object', testDate1]],

  sets: [
    ['empty set', new Set()],
    ['set of numbers', new Set([1, 2, 3])],
    ['set of floats', new Set([1.1, 2.2, 3.3])],
    // @ts-ignore
    ['set of bigints', new Set([1n, 2n, 3n])],
    ['set of letters', new Set(['a', 'b', 'c'])],
    ['set of booleans', new Set([true, false])],
    ['set of dates', new Set([testDate1, testDate2])],
    ['set of sets', new Set([new Set([1.1, 2.2]), new Set([3.3, 4.4])])],
    [
      'set of maps',
      new Set([
        new Map([
          ['a', 1],
          ['b', 2],
        ]),
        new Map([
          ['c', 3],
          ['d', 4],
        ]),
      ]),
    ],
    ['set of classes', new Set([TestClass1, TestClass2])],
    [
      'set of instantiated classes',
      new Set([testClassInstance1, testClassInstance2]),
    ],
    ['set of promises', new Set([testPromise1, testPromise2])],
    ['set of symbols', new Set([testSymbol1, testSymbol2])],
  ],

  maps: [
    ['empty map', new Map()],
    [
      'map of numbers',
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
    ],
    [
      'map of floats',
      new Map([
        ['a', 1.1],
        ['b', 2.2],
      ]),
    ],
    [
      'map of bigints',
      new Map([
        // @ts-ignore
        ['a', 1n],
        // @ts-ignore
        ['b', 2n],
      ]),
    ],
    [
      'map of letters',
      new Map([
        ['a', 'a'],
        ['b', 'b'],
      ]),
    ],
    [
      'map of booleans',
      new Map([
        ['a', true],
        ['b', false],
      ]),
    ],
    [
      'map of dates',
      new Map([
        ['a', testDate1],
        ['b', testDate2],
      ]),
    ],
    [
      'map of sets',
      new Map([
        ['a', new Set([1.1, 2.2])],
        ['b', new Set([3.3, 4.4])],
      ]),
    ],
    [
      'map of maps',
      new Map([
        [
          'a',
          new Map([
            ['a', 1],
            ['b', 2],
          ]),
        ],
        [
          'b',
          new Map([
            ['c', 3],
            ['d', 4],
          ]),
        ],
      ]),
    ],
    [
      'map of promises',
      new Map([
        ['a', testPromise1],
        ['b', testPromise2],
      ]),
    ],
    [
      'map of symbols',
      new Map([
        ['a', testSymbol1],
        ['b', testSymbol2],
      ]),
    ],
  ],

  weakmaps: [
    ['empty weakmap', new WeakMap()],
    ['weakmap', testWeakMap],
  ],

  weaksets: [
    ['empty weakset', new WeakSet()],
    ['weakset', testWeakSet],
  ],

  promises: [
    ['promise pending', testPromise1],
    ['promise resolved', testPromiseResolved1],
    // ['promise rejected', testPromiseRejected1],
  ],

  promiseAlls: [
    ['promise all unresolved', testPromiseAllUnresolved],
    ['promise all resolved', testPromiseAllResolved],
  ],

  symbols: [['symbol', testSymbol1]],

  generators: [['generator', testGenerator]],

  classes: [['class', TestClass1]],

  instantiatedClasses: [['instantiated class', testClassInstance1]],

  nulls: [['null', null]],

  undefineds: [['undefined', undefined]],

  typedArrays: [
    ['typed array int8', testTypedArray1],
    ['typed array uint8', testTypedArray2],
    ['typed array uint8clamped', testTypedArray3],
    ['typed array int16', testTypedArray4],
    ['typed array uint16', testTypedArray5],
    ['typed array int32', testTypedArray6],
    ['typed array uint32', testTypedArray7],
    ['typed array float32', testTypedArray8],
    ['typed array float64', testTypedArray9],
  ],

  functions: [
    ['empty function', testFunction1],
    ['function from new Function()', new Function('return true')],
  ],

  regexes: [
    ['regex literal', testRegex1],
    ['regex object', testRegex2],
  ],
};
