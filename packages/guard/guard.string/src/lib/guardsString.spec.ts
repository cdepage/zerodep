import { ZeroDepErrorGuardRange, ZeroDepErrorGuardType } from '@zerodep/guard.errors';
import { guardString, GuardStringOptions } from './guardString';

const positiveCases = [
  // integers
  ['positive integer as a string', '8675309'],
  ['negative integer as a string', '-15'],
  ['positive zero as a string', '0'],
  ['negative zero as a string', '-0'],

  // exponent notation (integer)
  ['positive e-notation integer a string', '100e10'],
  ['negative e-notation integer a string', '-100e10'],

  // bigInt
  ['positive BigInt as a string', '100n'],
  ['negative BigInt as a string', '-100n'],

  // floats
  ['positive float as a string', '0.08'],
  ['negative float as a string', '-17.777'],

  // exponent notation (float)
  ['positive e-notation float as a string', '100e-10'],
  ['negative e-notation float as a string', '-100e-10'],

  // number-ish
  ['positive infinity a string', 'Infinity'],
  ['negative infinity a string', 'Infinity'],
  ['positive NaN a string', 'NaN'],
  ['negative NaN a string', 'NaN'],

  // strings
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

  // booleans
  ['boolean true as a string', 'true'],
  ['boolean false as a string', 'false'],
];

const negativeCases = [
  // integers
  ['positive integer', 42],
  ['negative integer', -273],
  ['positive zero', 0],
  ['negative zero', -0],
  ['positive largest 32-bit integer', Number.MAX_VALUE],
  ['negative largest 32-bit integer', -Number.MAX_VALUE],
  ['positive smallest 32-bit integer', Number.MIN_VALUE],
  ['negative smallest 32-bit integer', -Number.MIN_VALUE],

  // exponent notation (integer)
  ['positive e-notation integer', 100e10],
  ['negative e-notation integer', -100e10],

  // bigInt
  ['positive BigInt', 10n],
  ['negative BigInt', 20n],
  ['positive large BigInt', BigInt(Number.MAX_VALUE + 1)],
  ['negative large BigInt', BigInt(-Number.MAX_VALUE - 1)],

  // floats
  ['positive float', 3.14],
  ['negative float', -6.66],
  ['positive e-notation float', 100e-10],
  ['negative e-notation float', -100e-10],

  // exponent notation (float)

  // number-ish
  ['positive infinity', Number.POSITIVE_INFINITY],
  ['negative infinity', Number.NEGATIVE_INFINITY],
  ['positive NaN', NaN],
  ['negative NaN', -NaN],

  // strings

  // booleans
  ['boolean true', true],
  ['boolean false', false],

  // dates
  ['date objects', new Date()],

  // arrays
  ['empty array', []],
  ['array of positive integers', [1, 2]],
  ['array of negative integers', [-1, -2]],
  ['array of positive bigints', [1n, 2n]],
  ['array of negative bigints', [-1n, -2n]],
  ['array of positive floats', [3.14, 0.08]],
  ['array of negative floats', [-3.14, -0.08]],
  ['array of strings', ['a', 'b']],
  ['array of booleans', [true, false]],
  ['array of dates', [new Date(), new Date()]],
  ['array of arrays', [[], []]],
  ['array of objects', [{}, {}]],
  ['array of symbols', [Symbol(), Symbol()]],
  ['array of nulls', [null, null]],
  ['array of undefined', [undefined, undefined]],

  // object literals
  ['empty object', {}],
  ['object with strings', { a: 'a', b: 'b' }],
  ['object with empty strings', { a: '', b: '' }],
  ['object with positive integers', { a: 1, b: 2 }],
  ['object with negative integers', { a: -1, b: -2 }],
  ['object with positive bigints', { a: 1n, b: 2n }],
  ['object with negative bigints', { a: -1n, b: -2n }],
  ['object with positive floats', { a: 3.14, b: 0.08 }],
  ['object with negative floats', { a: -3.14, b: -0.08 }],
  ['object with booleans ', { a: true, b: false }],
  ['object with dates ', { a: new Date(), b: new Date() }],
  ['object with arrays ', { a: [], b: [] }],
  ['object with objects ', { a: {}, b: {} }],
  ['object with symbols ', { a: Symbol(), b: Symbol() }],
  ['object with nulls ', { a: null, b: null }],
  ['object with undefined ', { a: undefined, b: undefined }],

  // symbols
  ['symbol', Symbol()],
  ['symbol iterator', Symbol.iterator],

  // empty
  ['null', null],
  ['undefined', undefined],
];

describe('guardString', () => {
  describe('with default options', () => {
    const guard = guardString();

    it('should throw a ZeroDepErrorGuard error when invalid', () => {
      const fn = () => guard(0);
      expect(fn).toThrow(ZeroDepErrorGuardType);
    });

    test.each(positiveCases)('should allow a/an %s', (title, value) => {
      expect(guard(value)).toEqual(value);
    });

    // @ts-ignore
    test.each(negativeCases)('should NOT allow a/an %s', (title, value) => {
      const fn = () => guard(value);
      expect(fn).toThrow('Value is not a string');
    });
  });

  describe('with custom options', () => {
    const options: GuardStringOptions = { minLength: 1, maxLength: 10 };
    const guard = guardString(options);

    it('should throw a ZeroDepErrorGuardRange error when string too short', () => {
      const fn = () => guard('');
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('String is shorter than 1 character(s)');
    });

    it('should allow a string at the lower limit', () => {
      expect(guard('a')).toEqual('a');
    });

    it('should allow an integer at the upper limit', () => {
      expect(guard('abcdefghij')).toEqual('abcdefghij');
    });

    it('should throw a ZeroDepErrorGuardRange error when integer too large', () => {
      const fn = () => guard('abcdefghijk');
      expect(fn).toThrow(ZeroDepErrorGuardRange);
      expect(fn).toThrow('String is longer than 10 character(s)');
    });
  });
});