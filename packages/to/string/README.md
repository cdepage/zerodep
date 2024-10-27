# @zerodep/to-string

[![version](https://img.shields.io/npm/v/@zerodep/to-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to convert stringifiable values to a string; this will use native `toString()` capabilities, if available. Invalid values will cause a `ZeroDepError` to be thrown.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/to/string) page.

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { toString } from '@zerodep/to-string';

// CJS
const { toString } = require('@zerodep/to-string');
```

```javascript
// Arrays
toString([]); // ""
toString([1, 2, 3]); // "1, 2, 3"
toString(['a', 'b', 'c']); // "a, b, c"

// BigInts
toString(42n); // "42"
toString(0n); // "0"
toString(-0n); // "0"
toString(-42n); // "-42"

// Booleans
toString(true); // "true"
toString(false); // "false"

// Class
toString(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Cannot convert to string

// Dates
toString(new Date('1970-01-01T12:00:00.000Z')); // "1999-12-31T23:59:59.999Z"
toString(new Date('2099-12-31')); // "2022-04-27T18:02:36.634Z"

// Empty
toString(null); // ""
toString(undefined); // ""

// Errors
toString(new Error('message')); // throws ZeroDepError: Cannot convert to string
toString(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Cannot convert to string

// Floats
toString(3.14); // "3.14"
toString(0.0); // "0"
toString(-0.0); // "0"
toString(-3.14); // "-3.14"
toString(Math.E); // "2.718281828459045"
toString(Math.PI); // "3.141592653589793"
toString(Number.MIN_VALUE); // "5e-324"

// Functions
toString(() => 'function'); // throws ZeroDepError: Cannot convert to string
toString(async () => 'function'); // throws ZeroDepError: Cannot convert to string

// Generators
toString(function* () {
  yield 'a';
}); // throws ZeroDepError: Cannot convert to string
toString(async function* () {
  yield 'a';
}); // throws ZeroDepError: Cannot convert to string

// Maps
toString(new Map()); // "{}"
toString(new Map([['key1', 123]])); // "{\"key\":123}"
toString(new Map([['key1', 'value1']])); // "{\"key\":\"abc\"}"

// Numbers
toString(Number.POSITIVE_INFINITY); // "Infinity"
toString(Number.MAX_SAFE_INTEGER); // "9007199254740991"
toString(Number.MAX_VALUE); // "1.7976931348623157e+308"
toString(3e8); // "300000000"
toString(42); // "42"
toString(1); // "1"
toString(0); // "0"
toString(-0); // "0"
toString(-1); // "-1"
toString(-42); // "-42"
toString(-3e8); // "-300000000"
toString(Number.MIN_SAFE_INTEGER); // "-9007199254740991"
toString(Number.NEGATIVE_INFINITY); // "-Infinity"
toString(Number.NaN); // "NaN"

// POJOs
toString({}); // "{}"
toString({ key: 'string' }); // "{\"key\":\"string\"}"
toString({ key: 123 }); // "{\"key\":123}"

// Promise
toString(new Promise(() => {})); // throws ZeroDepError: Cannot convert to string
toString(new Promise.all([])); // throws ZeroDepError: Cannot convert to string
toString(new Promise.allSettled([])); // throws ZeroDepError: Cannot convert to string
toString(new Promise.race([])); // throws ZeroDepError: Cannot convert to string
toString(Promise.resolve()); // throws ZeroDepError: Cannot convert to string

// Regular Expression
toString(/[regex]+/gi); // throws ZeroDepError: Cannot convert to string
toString(new RegExp('d', 'gi')); // throws ZeroDepError: Cannot convert to string

// Sets
toString(new Set()); // ""
toString(new Set([1, 2, 3])); // "1, 2, 3"
toString(new Set(['a', 'b', 'c'])); // "a, b, c"

// Strings
toString(''); // ""
toString('a longer string'); // "a longer string"
toString('1000n'); // "1000n"
toString('3e8'); // "3e8"
toString('42'); // "42"
toString('3.14'); // "3.14"
toString('0'); // "0"
toString('-0'); // "-0"
toString('-3.14'); // "-3.14"
toString('-42'); // "-42"
toString('-3e8'); // "-3e8"
toString('-1000n'); // "-1000n"

// Symbols
toString(Symbol()); // throws ZeroDepError: Cannot convert to string
toString(Symbol('name')); // throws ZeroDepError: Cannot convert to string

// TypedArrays
toString(new Int8Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new Int16Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new Int32Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new Uint8Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new Uint16Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new Uint32Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new Uint8ClampedArray(2)); // throws ZeroDepError: Cannot convert to string

toString(new BigInt64Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new BigUint64Array(2)); // throws ZeroDepError: Cannot convert to string

toString(new Float32Array(2)); // throws ZeroDepError: Cannot convert to string
toString(new Float64Array(2)); // throws ZeroDepError: Cannot convert to string

toString(new SharedArrayBuffer(512)); // throws ZeroDepError: Cannot convert to string

// WeakMap and WeakSet
toString(new WeakMap()); // throws ZeroDepError: Cannot convert to string
toString(new WeakSet()); // throws ZeroDepError: Cannot convert to string
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
