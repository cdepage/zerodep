# @zerodep/is-regex

[![version](https://img.shields.io/npm/v/@zerodep/is-regex?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-regex)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a regular expression.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/regex) page.

## Signature

```typescript
declare const isRegex: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isRegex } from '@zerodep/is-regex';

// CJS
const { isRegex } = require('@zerodep/is-regex');
```

```javascript
// Arrays
isRegex([]); // false
isRegex([1, 2, 3]); // false
isRegex(['a', 'b', 'c']); // false

// BigInts
isRegex(42n); // false
isRegex(0n); // false
isRegex(-0n); // false
isRegex(-42n); // false

// Booleans
isRegex(true); // false
isRegex(false); // false

// Class
isRegex(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isRegex(new Date()); // false
isRegex(new Date('1970-01-01T12:00:00.000Z')); // false
isRegex(new Date('2099-12-31')); // false

// Empty
isRegex(null); // false
isRegex(undefined); // false

// Errors
isRegex(new Error('message')); // false
isRegex(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isRegex(3.14); // false
isRegex(0.0); // false
isRegex(-0.0); // false
isRegex(-3.14); // false
isRegex(Math.E); // false
isRegex(Math.PI); // false
isRegex(Number.MIN_VALUE); // false

// Functions
isRegex(() => 'function'); // false
isRegex(async () => 'function'); // false

// Generators
isRegex(function* () {
  yield 'a';
}); // false
isRegex(async function* () {
  yield 'a';
}); // false

// Maps
isRegex(new Map()); // false
isRegex(new Map([['key1', 123]])); // false
isRegex(new Map([['key1', 'value1']])); // false

// Numbers
isRegex(Number.POSITIVE_INFINITY); // false
isRegex(Number.MAX_SAFE_INTEGER); // false
isRegex(3e8); // false
isRegex(42); // false
isRegex(1); // false
isRegex(0); // false
isRegex(-0); // false
isRegex(-1); // false
isRegex(-42); // false
isRegex(-3e8); // false
isRegex(Number.MIN_SAFE_INTEGER); // false
isRegex(Number.NEGATIVE_INFINITY); // false
isRegex(Number.NaN); // false

// POJOs
isRegex({}); // false
isRegex({ key: 'string' }); // false
isRegex({ key: 123 }); // false

// Promise
isRegex(new Promise(() => {})); // false
isRegex(new Promise.all([])); // false
isRegex(new Promise.allSettled([])); // false
isRegex(new Promise.race([])); // false
isRegex(Promise.resolve()); // false

// Regular Expression
isRegex(/[regex]+/gi); // true
isRegex(new RegExp('d', 'gi')); // true

// Sets
isRegex(new Set()); // false
isRegex(new Set([1, 2, 3])); // false
isRegex(new Set(['a', 'b', 'c'])); // false

// Strings
isRegex(''); // false
isRegex('a longer string'); // false
isRegex('1000n'); // false
isRegex('3e8'); // false
isRegex('42'); // false
isRegex('3.14'); // false
isRegex('0'); // false
isRegex('-0'); // false
isRegex('-3.14'); // false
isRegex('-42'); // false
isRegex('-3e8'); // false
isRegex('-1000n'); // false

// Symbols
isRegex(Symbol()); // false
isRegex(Symbol('name')); // false

// This
isRegex(this); // false
isRegex(globalThis); // false

// TypedArrays
isRegex(new Int8Array(2)); // false
isRegex(new Int16Array(2)); // false
isRegex(new Int32Array(2)); // false
isRegex(new Uint8Array(2)); // false
isRegex(new Uint16Array(2)); // false
isRegex(new Uint32Array(2)); // false
isRegex(new Uint8ClampedArray(2)); // false

isRegex(new BigInt64Array(2)); // false
isRegex(new BigUint64Array(2)); // false

isRegex(new Float32Array(2)); // false
isRegex(new Float64Array(2)); // false

isRegex(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isRegex(new WeakMap()); // false
isRegex(new WeakSet()); // false
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
