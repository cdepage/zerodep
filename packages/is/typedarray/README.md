# @zerodep/is-typedarray

[![version](https://img.shields.io/npm/v/@zerodep/is-typedarray?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-typedarray)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is any kind of Typed Array.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/typedarray) page.

## Signature

```typescript
declare const isTypedArray: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isTypedArray } from '@zerodep/is-typedarray';

// CJS
const { isTypedArray } = require('@zerodep/is-typedarray');
```

```javascript
// Arrays
isTypedArray([]); // false
isTypedArray([1, 2, 3]); // false
isTypedArray(['a', 'b', 'c']); // false

// BigInts
isTypedArray(42n); // false
isTypedArray(0n); // false
isTypedArray(-0n); // false
isTypedArray(-42n); // false

// Booleans
isTypedArray(true); // false
isTypedArray(false); // false

// Class
isTypedArray(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isTypedArray(new Date()); // false
isTypedArray(new Date('1970-01-01T12:00:00.000Z')); // false
isTypedArray(new Date('2099-12-31')); // false

// Empty
isTypedArray(null); // false
isTypedArray(undefined); // false

// Errors
isTypedArray(new Error('message')); // false
isTypedArray(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isTypedArray(3.14); // false
isTypedArray(0.0); // false
isTypedArray(-0.0); // false
isTypedArray(-3.14); // false
isTypedArray(Math.E); // false
isTypedArray(Math.PI); // false
isTypedArray(Number.MIN_VALUE); // false

// Functions
isTypedArray(() => 'function'); // false
isTypedArray(async () => 'function'); // false

// Generators
isTypedArray(function* () {
  yield 'a';
}); // false
isTypedArray(async function* () {
  yield 'a';
}); // false

// Maps
isTypedArray(new Map()); // false
isTypedArray(new Map([['key1', 123]])); // false
isTypedArray(new Map([['key1', 'value1']])); // false

// Numbers
isTypedArray(Number.POSITIVE_INFINITY); // false
isTypedArray(Number.MAX_SAFE_INTEGER); // false
isTypedArray(3e8); // false
isTypedArray(42); // false
isTypedArray(1); // false
isTypedArray(0); // false
isTypedArray(-0); // false
isTypedArray(-1); // false
isTypedArray(-42); // false
isTypedArray(-3e8); // false
isTypedArray(Number.MIN_SAFE_INTEGER); // false
isTypedArray(Number.NEGATIVE_INFINITY); // false
isTypedArray(Number.NaN); // false

// POJOs
isTypedArray({}); // false
isTypedArray({ key: 'string' }); // false
isTypedArray({ key: 123 }); // false

// Promise
isTypedArray(new Promise(() => {})); // false
isTypedArray(new Promise.all([])); // false
isTypedArray(new Promise.allSettled([])); // false
isTypedArray(new Promise.race([])); // false
isTypedArray(Promise.resolve()); // false

// Regular Expression
isTypedArray(/[regex]+/gi); // false
isTypedArray(new RegExp('d', 'gi')); // false

// Sets
isTypedArray(new Set()); // false
isTypedArray(new Set([1, 2, 3])); // false
isTypedArray(new Set(['a', 'b', 'c'])); // false

// Strings
isTypedArray(''); // false
isTypedArray('a longer string'); // false
isTypedArray('1000n'); // false
isTypedArray('3e8'); // false
isTypedArray('42'); // false
isTypedArray('3.14'); // false
isTypedArray('0'); // false
isTypedArray('-0'); // false
isTypedArray('-3.14'); // false
isTypedArray('-42'); // false
isTypedArray('-3e8'); // false
isTypedArray('-1000n'); // false

// Symbols
isTypedArray(Symbol()); // false
isTypedArray(Symbol('name')); // false

// This
isTypedArray(this); // false
isTypedArray(globalThis); // false

// TypedArrays
isTypedArray(new Int8Array(2)); // true
isTypedArray(new Int16Array(2)); // true
isTypedArray(new Int32Array(2)); // true
isTypedArray(new Uint8Array(2)); // true
isTypedArray(new Uint16Array(2)); // true
isTypedArray(new Uint32Array(2)); // true
isTypedArray(new Uint8ClampedArray(2)); // true

isTypedArray(new BigInt64Array(2)); // true
isTypedArray(new BigUint64Array(2)); // true

isTypedArray(new Float32Array(2)); // true
isTypedArray(new Float64Array(2)); // true

isTypedArray(new SharedArrayBuffer(512)); // true

// WeakMap and WeakSet
isTypedArray(new WeakMap()); // false
isTypedArray(new WeakSet()); // false
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
