# @zerodep/is-promise

[![version](https://img.shields.io/npm/v/@zerodep/is-promise?color=blue)](https://www.npmjs.com/package/@zerodep/is-promise)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a Promise and assign a `Promise` Typescript type to the value.

## Signature

```typescript
declare const isPromise: <T>(value: unknown) => boolean;
// value will be of type Promise<T>
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isPromise } from '@zerodep/is-promise';

// CJS
const { isPromise } = require('@zerodep/is-promise');
```

```javascript
// Arrays
isPromise([]); // false
isPromise([1, 2, 3]); // false
isPromise(['a', 'b', 'c']); // false

// BigInts
isPromise(42n); // false
isPromise(0n); // false
isPromise(-0n); // false
isPromise(-42n); // false

// Booleans
isPromise(true); // false
isPromise(false); // false

// Class
isPromise(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isPromise(new Date()); // false
isPromise(new Date('1970-01-01T12:00:00.000Z')); // false
isPromise(new Date('2099-12-31')); // false

// Empty
isPromise(null); // false
isPromise(undefined); // false

// Errors
isPromise(new Error('message')); // false

// Floats
isPromise(3.14); // false
isPromise(0.0); // false
isPromise(-0.0); // false
isPromise(-3.14); // false
isPromise(Math.E); // false
isPromise(Math.PI); // false
isPromise(Number.MIN_VALUE); // false

// Functions
isPromise(() => 'function'); // false
isPromise(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isPromise(gen1); // false
isPromise(gen2); // false

// Maps
isPromise(new Map()); // false
isPromise(new Map([['key1', 123]])); // false
isPromise(new Map([['key1', 'value1']])); // false

// Numbers
isPromise(Number.POSITIVE_INFINITY); // false
isPromise(Number.MAX_SAFE_INTEGER); // false
isPromise(3e8); // false
isPromise(42); // false
isPromise(1); // false
isPromise(0); // false
isPromise(-0); // false
isPromise(-1); // false
isPromise(-42); // false
isPromise(-3e8); // false
isPromise(Number.MIN_SAFE_INTEGER); // false
isPromise(Number.NEGATIVE_INFINITY); // false
isPromise(Number.NaN); // false

// POJOs
isPromise({}); // false
isPromise({ key: 'string' }); // false
isPromise({ key: 123 }); // false

// Promise
isPromise(new Promise(() => 1)); // true
isPromise(Promise.resolve()); // true

// Regular Expression
isPromise(/[regx]+/gi); // false
isPromise(new RegExp('d', 'gi')); // false

// Sets
isPromise(new Set()); // false
isPromise(new Set([1, 2, 3])); // false
isPromise(new Set(['a', 'b', 'c'])); // false

// Strings
isPromise(''); // false
isPromise('a longer string'); // false
isPromise('1000n'); // false
isPromise('3e8'); // false
isPromise('42'); // false
isPromise('3.14'); // false
isPromise('0'); // false
isPromise('-0'); // false
isPromise('-3.14'); // false
isPromise('-42'); // false
isPromise('-3e8'); // false
isPromise('-1000n'); // false

// Symbols
isPromise(Symbol()); // false
isPromise(Symbol('name')); // false

// This
isPromise(this); // false
isPromise(globalThis); // false

// TypedArrays
isPromise(new Int8Array(2)); // false
isPromise(new Int16Array(2)); // false
isPromise(new Int32Array(2)); // false
isPromise(new Uint8Array(2)); // false
isPromise(new Uint16Array(2)); // false
isPromise(new Uint32Array(2)); // false
isPromise(new Uint8ClampedArray(2)); // false

isPromise(new BigInt64Array(2)); // false
isPromise(new BigUint64Array(2)); // false

isPromise(new Float32Array(2)); // false
isPromise(new Float64Array(2)); // false

isPromise(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isPromise(new WeakMap()); // false
isPromise(new WeakSet()); // false
```

### Negative Response

```javascript
isPromise(['a', 'b', 'c']); // false
isPromise(1000n); // false
isPromise(true); // false
isPromise(new Date()); // false
isPromise(''); // false
isPromise(new Error('message')); // false
isPromise(3.14); // false
isPromise(() => 'function'); // false
isPromise(42); // false
isPromise(
  new Map([
    ['a', 1],
    ['b', 2],
  ]),
); // false
isPromise(null); // false
isPromise({ an: 'object' }); // false
isPromise(/[regx]+/gi); // false
isPromise(new Set([1, 2, 3])); // false
isPromise('a string'); // false
isPromise(Symbol()); // false
isPromise(new Int32Array(2)); // false
isPromise(undefined); // false
```

---

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](https://zerodep.app/#/) for more information.

```
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "is" functions
npm i @zerodep/is

# just this package
npm i @zerodep/is-promise
```

---

## Versions

- all notable changes are documented in the [Release Notes](https://github.com/cdepage/zerodep/releases)

### v3.x

- supports Node v20, v22 & v24
- built with Typescript v5.8.x

### v2.x

- supports Node v18, v20, & v22
- built with Typescript v5.5.x

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
