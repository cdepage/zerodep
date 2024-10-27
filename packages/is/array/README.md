# @zerodep/is-array

[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is an array.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/array) page.

## Signature

```typescript
declare const isArray: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isArray } from '@zerodep/is-array';

// CJS
const { isArray } = require('@zerodep/is-array');
```

```javascript
// Arrays
isArray([]); // true
isArray([1, 2, 3]); // true
isArray(['a', 'b', 'c']); // true

// BigInts
isArray(42n); // false
isArray(0n); // false
isArray(-0n); // false
isArray(-42n); // false

// Booleans
isArray(true); // false
isArray(false); // false

// Class
isArray(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isArray(new Date()); // false
isArray(new Date('1970-01-01T12:00:00.000Z')); // true
isArray(new Date('2099-12-31')); // true

// Empty
isArray(null); // false
isArray(undefined); // false

// Errors
isArray(new Error('message')); // false
isArray(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isArray(3.14); // false
isArray(0.0); // false
isArray(-0.0); // false
isArray(-3.14); // false
isArray(Math.E); // false
isArray(Math.PI); // false
isArray(Number.MIN_VALUE); // false

// Functions
isArray(() => 'function'); // false
isArray(async () => 'function'); // false

// Generators
isArray(function* () {
  yield 'a';
}); // false
isArray(async function* () {
  yield 'a';
}); // false

// Maps
isArray(new Map()); // false
isArray(new Map([['key1', 123]])); // false
isArray(new Map([['key1', 'value1']])); // false

// Numbers
isArray(Number.POSITIVE_INFINITY); // false
isArray(Number.MAX_SAFE_INTEGER); // false
isArray(Number.MAX_VALUE); // false
isArray(3e8); // false
isArray(42); // false
isArray(1); // false
isArray(0); // false
isArray(-0); // false
isArray(-1); // false
isArray(-42); // false
isArray(-3e8); // false
isArray(Number.MIN_SAFE_INTEGER); // false
isArray(Number.NEGATIVE_INFINITY); // false
isArray(Number.NaN); // false

// POJOs
isArray({}); // false
isArray({ key: 'string' }); // false
isArray({ key: 123 }); // false

// Promise
isArray(new Promise(() => {})); // false
isArray(new Promise.all([])); // false
isArray(new Promise.allSettled([])); // false
isArray(new Promise.race([])); // false
isArray(Promise.resolve()); // false

// Regular Expression
isArray(/[regex]+/gi); // false
isArray(new RegExp('d', 'gi')); // false

// Sets
isArray(new Set()); // false
isArray(new Set([1, 2, 3])); // false
isArray(new Set(['a', 'b', 'c'])); // false

// Strings
isArray(''); // false
isArray('a longer string'); // false
isArray('1000n'); // false
isArray('3e8'); // false
isArray('42'); // false
isArray('3.14'); // false
isArray('0'); // false
isArray('-0'); // false
isArray('-3.14'); // false
isArray('-42'); // false
isArray('-3e8'); // false
isArray('-1000n'); // false

// Symbols
isArray(Symbol()); // false
isArray(Symbol('name')); // false

// This
isArray(this); // false
isArray(globalThis); // false

// TypedArrays
isArray(new Int8Array(2)); // false
isArray(new Int16Array(2)); // false
isArray(new Int32Array(2)); // false
isArray(new Uint8Array(2)); // false
isArray(new Uint16Array(2)); // false
isArray(new Uint32Array(2)); // false
isArray(new Uint8ClampedArray(2)); // false

isArray(new BigInt64Array(2)); // false
isArray(new BigUint64Array(2)); // false

isArray(new Float32Array(2)); // false
isArray(new Float64Array(2)); // false

isArray(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isArray(new WeakMap()); // false
isArray(new WeakSet()); // false
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
