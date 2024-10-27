# @zerodep/to-pojo

[![version](https://img.shields.io/npm/v/@zerodep/to-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert serializable objects or arrays of serializable values or objects to a Plain Old Javascript Object (POJO); this will use native `toJSON()` capabilities, if available. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/pojo) page.

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { toPojo } from '@zerodep/to-pojo';

// CJS
const { toPojo } = require('@zerodep/to-pojo');
```

```javascript
toPojo({
  string: 'a string',
  date: new Date('2022-02-24'),
  int: 42,
  float: 3.14,
  bigInt: 8675309n,
  boolT: true,
  boolF: false,
});
// {
//   "string": "a string",
//   "date": "2022-02-24T00:00:00.000Z", <-- CAUTION: Dates are converted to ISO-8601 format
//   "int": 42,
//   "float": 3.14,
//   "bigInt": "8675309", <-- CAUTION: BigInts are converted to strings
//   "boolT": true,
//   "boolF": false,
// }

// Arrays
toPojo([]); // []]
toPojo([1, 2, 3]); // [1, 2, 3]
toPojo(['a', 'b', 'c']); // [ "a", "b", "c" ]

// BigInts
toPojo(42n); // throws ZeroDepError: Cannot convert to JSON
toPojo(0n); // throws ZeroDepError: Cannot convert to JSON
toPojo(-0n); // throws ZeroDepError: Cannot convert to JSON
toPojo(-42n); // throws ZeroDepError: Cannot convert to JSON

// Booleans
toPojo(true); // throws ZeroDepError: Cannot convert to JSON
toPojo(false); // throws ZeroDepError: Cannot convert to JSON

// Class
toPojo(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Cannot convert to JSON

// Dates
toPojo(new Date()); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Date('2099-12-31')); // throws ZeroDepError: Cannot convert to JSON

// Empty
toPojo(null); // null
toPojo(undefined); // null

// Errors
toPojo(new Error('message')); // throws ZeroDepError: Cannot convert to JSON
toPojo(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Cannot convert to JSON

// Floats
toPojo(3.14); // throws ZeroDepError: Cannot convert to JSON
toPojo(0.0); // throws ZeroDepError: Cannot convert to JSON
toPojo(-0.0); // throws ZeroDepError: Cannot convert to JSON
toPojo(-3.14); // throws ZeroDepError: Cannot convert to JSON
toPojo(Math.E); // throws ZeroDepError: Cannot convert to JSON
toPojo(Math.PI); // throws ZeroDepError: Cannot convert to JSON
toPojo(Number.MIN_VALUE); // throws ZeroDepError: Cannot convert to JSON

// Functions
toPojo(() => 'function'); // throws ZeroDepError: Cannot convert to JSON
toPojo(async () => 'function'); // throws ZeroDepError: Cannot convert to JSON

// Generators
toPojo(function* () {
  yield 'a';
}); // throws ZeroDepError: Cannot convert to JSON
toPojo(async function* () {
  yield 'a';
}); // throws ZeroDepError: Cannot convert to JSON

// Maps
toPojo(new Map()); // {}
toPojo(new Map([['key1', 123]])); // { "key1": 123 }
toPojo(new Map([['key1', 'value1']])); // { "key1": "value1" }

// Numbers
toPojo(Number.POSITIVE_INFINITY); // throws ZeroDepError: Cannot convert to JSON
toPojo(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Cannot convert to JSON
toPojo(Number.MAX_VALUE); // throws ZeroDepError: Cannot convert to JSON
toPojo(3e8); // throws ZeroDepError: Cannot convert to JSON
toPojo(42); // throws ZeroDepError: Cannot convert to JSON
toPojo(1); // throws ZeroDepError: Cannot convert to JSON
toPojo(0); // throws ZeroDepError: Cannot convert to JSON
toPojo(-0); // throws ZeroDepError: Cannot convert to JSON
toPojo(-1); // throws ZeroDepError: Cannot convert to JSON
toPojo(-42); // throws ZeroDepError: Cannot convert to JSON
toPojo(-3e8); // throws ZeroDepError: Cannot convert to JSON
toPojo(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Cannot convert to JSON
toPojo(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Cannot convert to JSON
toPojo(Number.NaN); // throws ZeroDepError: Cannot convert to JSON

// POJOs
toPojo({}); // {}
toPojo({ key: 'string' }); // { "key1": 123 }
toPojo({ key: 123 }); //  { "key1": "value1" }

// Promise
toPojo(new Promise(() => {})); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Promise.all([])); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Promise.allSettled([])); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Promise.race([])); // throws ZeroDepError: Cannot convert to JSON
toPojo(Promise.resolve()); // throws ZeroDepError: Cannot convert to JSON

// Regular Expression
toPojo(/[regex]+/gi); // throws ZeroDepError: Cannot convert to JSON
toPojo(new RegExp('d', 'gi')); // throws ZeroDepError: Cannot convert to JSON

// Sets
toPojo(new Set()); // []
toPojo(new Set([1, 2, 3])); // [1, 2, 3]
toPojo(new Set(['a', 'b', 'c'])); // ["a", "b", "c"]

// Strings
toPojo(''); // throws ZeroDepError: Cannot convert to JSON
toPojo('a longer string'); // throws ZeroDepError: Cannot convert to JSON
toPojo('1000n'); // throws ZeroDepError: Cannot convert to JSON
toPojo('3e8'); // throws ZeroDepError: Cannot convert to JSON
toPojo('42'); // throws ZeroDepError: Cannot convert to JSON
toPojo('3.14'); // throws ZeroDepError: Cannot convert to JSON
toPojo('0'); // throws ZeroDepError: Cannot convert to JSON
toPojo('-0'); // throws ZeroDepError: Cannot convert to JSON
toPojo('-3.14'); // throws ZeroDepError: Cannot convert to JSON
toPojo('-42'); // throws ZeroDepError: Cannot convert to JSON
toPojo('-3e8'); // throws ZeroDepError: Cannot convert to JSON
toPojo('-1000n'); // throws ZeroDepError: Cannot convert to JSON

// Symbols
toPojo(Symbol()); // throws ZeroDepError: Cannot convert to JSON
toPojo(Symbol('name')); // throws ZeroDepError: Cannot convert to JSON

// This
toPojo(this); // {}
toPojo(globalThis); // throws ZeroDepError: Cannot convert to JSON

// TypedArrays
toPojo(new Int8Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Int16Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Int32Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Uint8Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Uint16Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Uint32Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Uint8ClampedArray(2)); // throws ZeroDepError: Cannot convert to JSON

toPojo(new BigInt64Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new BigUint64Array(2)); // throws ZeroDepError: Cannot convert to JSON

toPojo(new Float32Array(2)); // throws ZeroDepError: Cannot convert to JSON
toPojo(new Float64Array(2)); // throws ZeroDepError: Cannot convert to JSON

toPojo(new SharedArrayBuffer(512)); // throws ZeroDepError: Cannot convert to JSON

// WeakMap and WeakSet
toPojo(new WeakMap()); // throws ZeroDepError: Cannot convert to JSON
toPojo(new WeakSet()); // throws ZeroDepError: Cannot convert to JSON
```

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
