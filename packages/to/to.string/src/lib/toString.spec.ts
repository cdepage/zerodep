import { toString } from './toString';

const cases = [
  // integers
  ['positive integer', 42, '42'],
  ['negative integer', -273, '-273'],
  ['positive zero', 0, '0'],
  ['negative zero', -0, '0'],
  ['positive largest 32-bit integer', Number.MAX_VALUE, '1.7976931348623157e+308'],
  ['negative largest 32-bit integer', -Number.MAX_VALUE, '-1.7976931348623157e+308'],
  ['positive smallest 32-bit integer', Number.MIN_VALUE, '5e-324'],
  ['negative smallest 32-bit integer', -Number.MIN_VALUE, '-5e-324'],
  ['positive integer as a string', '8675309', '8675309'],
  ['negative integer as a string', '-15', '-15'],
  ['positive zero as a string', '0', '0'],
  ['negative zero as a string', '-0', '-0'],

  // exponent notation (integer)
  ['positive e-notation integer', 100e10, '1000000000000'],
  ['negative e-notation integer', -100e10, '-1000000000000'],
  ['positive e-notation integer a string', '100e10', '100e10'],
  ['negative e-notation integer a string', '-100e10', '-100e10'],

  // bigInt
  ['positive BigInt', 10n, '10'],
  ['negative BigInt', 20n, '20'],
  [
    'positive large BigInt',
    BigInt(Number.MAX_VALUE + 1),
    '179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368',
  ],
  [
    'negative large BigInt',
    BigInt(-Number.MAX_VALUE - 1),
    '-179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368',
  ],
  ['positive BigInt as a string', '100n', '100n'],
  ['negative BigInt as a string', '-100n', '-100n'],

  // floats
  ['positive float', 3.14, '3.14'],
  ['negative float', -6.66, '-6.66'],
  ['positive e-notation float', 100e-10, '1e-8'],
  ['negative e-notation float', -100e-10, '-1e-8'],
  ['positive float as a string', '0.08', '0.08'],
  ['negative float as a string', '-17.777', '-17.777'],

  // exponent notation (float)
  ['positive e-notation float as a string', '100e-10', '100e-10'],
  ['negative e-notation float as a string', '-100e-10', '-100e-10'],

  // number-ish
  ['positive infinity', Number.POSITIVE_INFINITY, ''],
  ['negative infinity', Number.NEGATIVE_INFINITY, ''],
  ['positive infinity a string', 'Infinity', 'Infinity'],
  ['negative infinity a string', 'Infinity', 'Infinity'],
  ['positive NaN', NaN, ''],
  ['negative NaN', -NaN, ''],
  ['positive NaN a string', 'NaN', 'NaN'],
  ['negative NaN a string', 'NaN', 'NaN'],

  // strings
  ['string of all-lowercase letters', 'password', 'password'],
  ['string of all-uppercase letters', 'SECRET', 'SECRET'],
  ['string of lowercase letters and spaces', 'my secret password', 'my secret password'],
  ['string of uppercase letters and spaces', 'MY SECRET PASSWORD', 'MY SECRET PASSWORD'],
  ['string of mixed-case letters and spaces', 'Love Secret Sex God', 'Love Secret Sex God'],
  [
    'string of mixed-case letters, spaces and numbers',
    'L0v3 S3cre7 S3x G0d',
    'L0v3 S3cre7 S3x G0d',
  ],
  [
    'string of seemingly strong password characters',
    'L()v3-$Ecr3T_$3x 6*d!',
    'L()v3-$Ecr3T_$3x 6*d!',
  ],
  ['empty string', '', ''],
  [
    'string of great length',
    'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.',
    'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.',
  ],

  // booleans
  ['boolean true', true, 'true'],
  ['boolean false', false, 'false'],
  ['boolean true as a string', 'true', 'true'],
  ['boolean false as a string', 'false', 'false'],

  // dates
  ['date objects', new Date('2020-04-26'), '2020-04-26T00:00:00.000Z'],

  // arrays
  ['empty array', [], ''],
  ['array of positive integers', [1, 2], '1,2'],
  ['array of negative integers', [-1, -2], '-1,-2'],
  // ['array of positive bigints', [1n, 2n], '1,2'],
  // ['array of negative bigints', [-1n, -2n], '-1,-2'],
  ['array of positive floats', [3.14, 0.08], '3.14,0.08'],
  ['array of negative floats', [-3.14, -0.08], '-3.14,-0.08'],
  ['array of strings', ['a', 'b'], 'a,b'],
  ['array of booleans', [true, false], 'true,false'],
  // ['array of dates', [new Date(), new Date()]],
  ['array of arrays', [[], []], ','],
  ['array of objects', [{}, {}], '{},{}'],
  ['array of symbols', [Symbol(), Symbol()], 'Symbol(),Symbol()'],
  ['array of nulls', [null, null], ','],
  ['array of undefined', [undefined, undefined], ','],

  // object literals
  ['empty object', {}, '{}'],
  ['object with strings', { a: 'a', b: 'b' }, '{"a":"a","b":"b"}'],
  ['object with empty strings', { a: '', b: '' }, '{"a":"","b":""}'],
  ['object with positive integers', { a: 1, b: 2 }, '{"a":1,"b":2}'],
  ['object with negative integers', { a: -1, b: -2 }, '{"a":-1,"b":-2}'],
  // ['object with positive bigints', { a: 1n, b: 2n }, 'xxxx'],
  // ['object with negative bigints', { a: -1n, b: -2n }, 'xxxx'],
  ['object with positive floats', { a: 3.14, b: 0.08 }, '{"a":3.14,"b":0.08}'],
  ['object with negative floats', { a: -3.14, b: -0.08 }, '{"a":-3.14,"b":-0.08}'],
  // ['object with booleans ', { a: true, b: false }, '{"a":"true","b":"false"}'],
  [
    'object with dates ',
    { a: new Date('1999-12-31'), b: new Date('2000-01-01') },
    '{"a":"1999-12-31T00:00:00.000Z","b":"2000-01-01T00:00:00.000Z"}',
  ],
  ['object with arrays ', { a: [], b: [] }, '{"a":[],"b":[]}'],
  ['object with objects ', { a: {}, b: {} }, '{"a":{},"b":{}}'],
  ['object with symbols ', { a: Symbol(), b: Symbol() }, '{}'],
  ['object with nulls ', { a: null, b: null }, '{"a":null,"b":null}'],
  ['object with undefined ', { a: undefined, b: undefined }, '{}'],

  // regular expression
  ['regex', new RegExp('[aeiouy]', 'gi'), '/[aeiouy]/gi'],
  ['regex literal', /^$\d/gi, '/^$\\d/gi'],

  // symbols
  ['symbol', Symbol(), 'Symbol()'],
  ['symbol iterator', Symbol.iterator, 'Symbol(Symbol.iterator)'],

  // empty
  ['null', null, ''],
  ['undefined', undefined, ''],
];

describe('toString', () => {
  // @ts-ignore
  test.each(cases)('should convert a/an %s', (title, value, expected) => {
    expect(toString(value)).toEqual(expected);
  });
});
