# @zerodep/is-undefined

[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a `undefined`.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/undefined) page.

## Signature

```typescript
declare const isUndefined: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isUndefined } from '@zerodep/is-undefined';

// CJS
const { isUndefined } = require('@zerodep/is-undefined');
```

```javascript
// Arrays
isUndefined([]); // false
isUndefined([1, 2, 3]); // false
isUndefined(['a', 'b', 'c']); // false

// BigInts
isUndefined(42n); // false
isUndefined(0n); // false
isUndefined(-0n); // false
isUndefined(-42n); // false

// Booleans
isUndefined(true); // false
isUndefined(false); // false

// Class
isUndefined(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isUndefined(new Date()); // false
isUndefined(new Date('1970-01-01T12:00:00.000Z')); // false
isUndefined(new Date('2099-12-31')); // false

// Empty
isUndefined(null); // false
isUndefined(undefined); // true

// Errors
isUndefined(new Error('message')); // false
isUndefined(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isUndefined(3.14); // false
isUndefined(0.0); // false
isUndefined(-0.0); // false
isUndefined(-3.14); // false
isUndefined(Math.E); // false
isUndefined(Math.PI); // false
isUndefined(Number.MIN_VALUE); // false

// Functions
isUndefined(() => 'function'); // false
isUndefined(async () => 'function'); // false

// Generators
isUndefined(function* () {
  yield 'a';
}); // false
isUndefined(async function* () {
  yield 'a';
}); // false

// Maps
isUndefined(new Map()); // false
isUndefined(new Map([['key1', 123]])); // false
isUndefined(new Map([['key1', 'value1']])); // false

// Numbers
isUndefined(Number.POSITIVE_INFINITY); // false
isUndefined(Number.MAX_SAFE_INTEGER); // false
isUndefined(3e8); // false
isUndefined(42); // false
isUndefined(1); // false
isUndefined(0); // false
isUndefined(-0); // false
isUndefined(-1); // false
isUndefined(-42); // false
isUndefined(-3e8); // false
isUndefined(Number.MIN_SAFE_INTEGER); // false
isUndefined(Number.NEGATIVE_INFINITY); // false
isUndefined(Number.NaN); // false

// POJOs
isUndefined({}); // false
isUndefined({ key: 'string' }); // false
isUndefined({ key: 123 }); // false

// Promise
isUndefined(new Promise(() => {})); // false
isUndefined(new Promise.all([])); // false
isUndefined(new Promise.allSettled([])); // false
isUndefined(new Promise.race([])); // false
isUndefined(Promise.resolve()); // false

// Regular Expression
isUndefined(/[regex]+/gi); // false
isUndefined(new RegExp('d', 'gi')); // false

// Sets
isUndefined(new Set()); // false
isUndefined(new Set([1, 2, 3])); // false
isUndefined(new Set(['a', 'b', 'c'])); // false

// Strings
isUndefined(''); // false
isUndefined('a longer string'); // false
isUndefined('1000n'); // false
isUndefined('3e8'); // false
isUndefined('42'); // false
isUndefined('3.14'); // false
isUndefined('0'); // false
isUndefined('-0'); // false
isUndefined('-3.14'); // false
isUndefined('-42'); // false
isUndefined('-3e8'); // false
isUndefined('-1000n'); // false

// Symbols
isUndefined(Symbol()); // false
isUndefined(Symbol('name')); // false

// This
isUndefined(this); // false
isUndefined(globalThis); // false

// TypedArrays
isUndefined(new Int8Array(2)); // false
isUndefined(new Int16Array(2)); // false
isUndefined(new Int32Array(2)); // false
isUndefined(new Uint8Array(2)); // false
isUndefined(new Uint16Array(2)); // false
isUndefined(new Uint32Array(2)); // false
isUndefined(new Uint8ClampedArray(2)); // false

isUndefined(new BigInt64Array(2)); // false
isUndefined(new BigUint64Array(2)); // false

isUndefined(new Float32Array(2)); // false
isUndefined(new Float64Array(2)); // false

isUndefined(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isUndefined(new WeakMap()); // false
isUndefined(new WeakSet()); // false
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
