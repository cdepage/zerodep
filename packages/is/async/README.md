# @zerodep/is-async

[![version](https://img.shields.io/npm/v/@zerodep/is-async?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-async)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is asynchronous. This includes Promises, async functions, and generators.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/async) page.

## Signature

```typescript
declare const isAsync: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isAsync } from '@zerodep/is-async';

// CJS
const { isAsync } = require('@zerodep/is-async');
```

```javascript
// Arrays
isAsync([]); // false
isAsync([1, 2, 3]); // false
isAsync(['a', 'b', 'c']); // false

// BigInts
isAsync(42n); // false
isAsync(0n); // false
isAsync(-0n); // false
isAsync(-42n); // false

// Booleans
isAsync(true); // false
isAsync(false); // false

// Class
isAsync(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isAsync(new Date()); // false
isAsync(new Date('1970-01-01T12:00:00.000Z')); // false
isAsync(new Date('2099-12-31')); // false

// Empty
isAsync(null); // false
isAsync(undefined); // false

// Errors
isAsync(new Error('message')); // false
isAsync(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isAsync(3.14); // false
isAsync(0.0); // false
isAsync(-0.0); // false
isAsync(-3.14); // false
isAsync(Math.E); // false
isAsync(Math.PI); // false
isAsync(Number.MIN_VALUE); // false

// Functions
isAsync(() => 'function'); // false
isAsync(async () => 'function'); // true

// Generators
isAsync(function* () {
  yield 'a';
}); // true
isAsync(async function* () {
  yield 'a';
}); // true

// Maps
isAsync(new Map()); // false
isAsync(new Map([['key1', 123]])); // false
isAsync(new Map([['key1', 'value1']])); // false

// Numbers
isAsync(Number.POSITIVE_INFINITY); // false
isAsync(Number.MAX_SAFE_INTEGER); // false
isAsync(3e8); // false
isAsync(42); // false
isAsync(1); // false
isAsync(0); // false
isAsync(-0); // false
isAsync(-1); // false
isAsync(-42); // false
isAsync(-3e8); // false
isAsync(Number.MIN_SAFE_INTEGER); // false
isAsync(Number.NEGATIVE_INFINITY); // false
isAsync(Number.NaN); // false

// POJOs
isAsync({}); // false
isAsync({ key: 'string' }); // false
isAsync({ key: 123 }); // false

// Promise
isAsync(new Promise(() => {})); // true
isAsync(new Promise.all([])); // true
isAsync(new Promise.allSettled([])); // true
isAsync(new Promise.race([])); // true
isAsync(Promise.resolve()); // true

// Regular Expression
isAsync(/[regex]+/gi); // false
isAsync(new RegExp('d', 'gi')); // false

// Sets
isAsync(new Set()); // false
isAsync(new Set([1, 2, 3])); // false
isAsync(new Set(['a', 'b', 'c'])); // false

// Strings
isAsync(''); // false
isAsync('a longer string'); // false
isAsync('1000n'); // false
isAsync('3e8'); // false
isAsync('42'); // false
isAsync('3.14'); // false
isAsync('0'); // false
isAsync('-0'); // false
isAsync('-3.14'); // false
isAsync('-42'); // false
isAsync('-3e8'); // false
isAsync('-1000n'); // false

// Symbols
isAsync(Symbol()); // false
isAsync(Symbol('name')); // false

// This
isAsync(this); // false
isAsync(globalThis); // false

// TypedArrays
isAsync(new Int8Array(2)); // false
isAsync(new Int16Array(2)); // false
isAsync(new Int32Array(2)); // false
isAsync(new Uint8Array(2)); // false
isAsync(new Uint16Array(2)); // false
isAsync(new Uint32Array(2)); // false
isAsync(new Uint8ClampedArray(2)); // false

isAsync(new BigInt64Array(2)); // false
isAsync(new BigUint64Array(2)); // false

isAsync(new Float32Array(2)); // false
isAsync(new Float64Array(2)); // false

isAsync(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isAsync(new WeakMap()); // false
isAsync(new WeakSet()); // false
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
