# @zerodep/is-function

[![version](https://img.shields.io/npm/v/@zerodep/is-function?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-function)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a function.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/function) page.

## Signature

```typescript
declare const isFunction: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isFunction } from '@zerodep/is-function';

// CJS
const { isFunction } = require('@zerodep/is-function');
```

```javascript
// Arrays
isFunction([]); // false
isFunction([1, 2, 3]); // false
isFunction(['a', 'b', 'c']); // false

// BigInts
isFunction(42n); // false
isFunction(0n); // false
isFunction(-0n); // false
isFunction(-42n); // false

// Booleans
isFunction(true); // false
isFunction(false); // false

// Class
isFunction(
  class SomeClass {
    constructor() {}
  }
); // true  <-- classes are functions

// Dates
isFunction(new Date()); // false
isFunction(new Date('1970-01-01T12:00:00.000Z')); // false
isFunction(new Date('2099-12-31')); // false

// Empty
isFunction(null); // false
isFunction(undefined); // false

// Errors
isFunction(new Error('message')); // false
isFunction(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isFunction(3.14); // false
isFunction(0.0); // false
isFunction(-0.0); // false
isFunction(-3.14); // false
isFunction(Math.E); // false
isFunction(Math.PI); // false
isFunction(Number.MIN_VALUE); // false

// Functions
isFunction(() => 'function'); // true
isFunction(async () => 'function'); // true

// Generators
isFunction(function* () {
  yield 'a';
}); // false
isFunction(async function* () {
  yield 'a';
}); // false

// Maps
isFunction(new Map()); // false
isFunction(new Map([['key1', 123]])); // false
isFunction(new Map([['key1', 'value1']])); // false

// Numbers
isFunction(Number.POSITIVE_INFINITY); // false
isFunction(Number.MAX_SAFE_INTEGER); // false
isFunction(3e8); // false
isFunction(42); // false
isFunction(1); // false
isFunction(0); // false
isFunction(-0); // false
isFunction(-1); // false
isFunction(-42); // false
isFunction(-3e8); // false
isFunction(Number.MIN_SAFE_INTEGER); // false
isFunction(Number.NEGATIVE_INFINITY); // false
isFunction(Number.NaN); // false

// POJOs
isFunction({}); // false
isFunction({ key: 'string' }); // false
isFunction({ key: 123 }); // false

// Promise
isFunction(new Promise(() => {})); // false
isFunction(new Promise.all([])); // false
isFunction(new Promise.allSettled([])); // false
isFunction(new Promise.race([])); // false
isFunction(Promise.resolve()); // false

// Regular Expression
isFunction(/[regex]+/gi); // false
isFunction(new RegExp('d', 'gi')); // false

// Sets
isFunction(new Set()); // false
isFunction(new Set([1, 2, 3])); // false
isFunction(new Set(['a', 'b', 'c'])); // false

// Strings
isFunction(''); // false
isFunction('a longer string'); // false
isFunction('1000n'); // false
isFunction('3e8'); // false
isFunction('42'); // false
isFunction('3.14'); // false
isFunction('0'); // false
isFunction('-0'); // false
isFunction('-3.14'); // false
isFunction('-42'); // false
isFunction('-3e8'); // false
isFunction('-1000n'); // false

// Symbols
isFunction(Symbol()); // false
isFunction(Symbol('name')); // false

// This
isFunction(this); // false
isFunction(globalThis); // false

// TypedArrays
isFunction(new Int8Array(2)); // false
isFunction(new Int16Array(2)); // false
isFunction(new Int32Array(2)); // false
isFunction(new Uint8Array(2)); // false
isFunction(new Uint16Array(2)); // false
isFunction(new Uint32Array(2)); // false
isFunction(new Uint8ClampedArray(2)); // false

isFunction(new BigInt64Array(2)); // false
isFunction(new BigUint64Array(2)); // false

isFunction(new Float32Array(2)); // false
isFunction(new Float64Array(2)); // false

isFunction(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isFunction(new WeakMap()); // false
isFunction(new WeakSet()); // false
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
