# @zerodep/is-float

[![version](https://img.shields.io/npm/v/@zerodep/is-float?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-float)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a finite float.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/float) page.

## Signature

```typescript
declare const isFloat: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isFloat } from '@zerodep/is-float';

// CJS
const { isFloat } = require('@zerodep/is-float');
```

```javascript
// Arrays
isFloat([]); // false
isFloat([1, 2, 3]); // false
isFloat(['a', 'b', 'c']); // false

// BigInts
isFloat(42n); // false
isFloat(0n); // false
isFloat(-0n); // false
isFloat(-42n); // false

// Booleans
isFloat(true); // false
isFloat(false); // false

// Class
isFloat(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isFloat(new Date()); // false
isFloat(new Date('1970-01-01T12:00:00.000Z')); // false
isFloat(new Date('2099-12-31')); // false

// Empty
isFloat(null); // false
isFloat(undefined); // false

// Errors
isFloat(new Error('message')); // false
isFloat(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isFloat(3.14); // true
isFloat(0.0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-0.0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-3.14); // true
isFloat(Math.E); // true
isFloat(Math.PI); // true
isFloat(Number.MIN_VALUE); // true

// Functions
isFloat(() => 'function'); // false
isFloat(async () => 'function'); // false

// Generators
isFloat(function* () {
  yield 'a';
}); // false
isFloat(async function* () {
  yield 'a';
}); // false

// Maps
isFloat(new Map()); // false
isFloat(new Map([['key1', 123]])); // false
isFloat(new Map([['key1', 'value1']])); // false

// Numbers
isFloat(Number.POSITIVE_INFINITY); // false
isFloat(Number.MAX_SAFE_INTEGER); // false
isFloat(3e8); // false
isFloat(42); // false
isFloat(1); // false
isFloat(0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-0); // true  <-- CAUTION: zero is allowed as a float
isFloat(-1); // false
isFloat(-42); // false
isFloat(-3e8); // false
isFloat(Number.MIN_SAFE_INTEGER); // false
isFloat(Number.NEGATIVE_INFINITY); // false
isFloat(Number.NaN); // false

// POJOs
isFloat({}); // false
isFloat({ key: 'string' }); // false
isFloat({ key: 123 }); // false

// Promise
isFloat(new Promise(() => {})); // false
isFloat(new Promise.all([])); // false
isFloat(new Promise.allSettled([])); // false
isFloat(new Promise.race([])); // false
isFloat(Promise.resolve()); // false

// Regular Expression
isFloat(/[regex]+/gi); // false
isFloat(new RegExp('d', 'gi')); // false

// Sets
isFloat(new Set()); // false
isFloat(new Set([1, 2, 3])); // false
isFloat(new Set(['a', 'b', 'c'])); // false

// Strings
isFloat(''); // false
isFloat('a longer string'); // false
isFloat('1000n'); // false
isFloat('3e8'); // false
isFloat('42'); // false
isFloat('3.14'); // false
isFloat('0'); // false
isFloat('-0'); // false
isFloat('-3.14'); // false
isFloat('-42'); // false
isFloat('-3e8'); // false
isFloat('-1000n'); // false

// Symbols
isFloat(Symbol()); // false
isFloat(Symbol('name')); // false

// This
isFloat(this); // false
isFloat(globalThis); // false

// TypedArrays
isFloat(new Int8Array(2)); // false
isFloat(new Int16Array(2)); // false
isFloat(new Int32Array(2)); // false
isFloat(new Uint8Array(2)); // false
isFloat(new Uint16Array(2)); // false
isFloat(new Uint32Array(2)); // false
isFloat(new Uint8ClampedArray(2)); // false

isFloat(new BigInt64Array(2)); // false
isFloat(new BigUint64Array(2)); // false

isFloat(new Float32Array(2)); // false
isFloat(new Float64Array(2)); // false

isFloat(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isFloat(new WeakMap()); // false
isFloat(new WeakSet()); // false
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
