# @zerodep/is-array

[![version](https://img.shields.io/npm/v/@zerodep/is-array?color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is an array and assign an `T[]` Typescript type to the value.

## Signature

```typescript
declare const isArray: <T>(value: unknown) => boolean;
// value will be of type T[]
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
  },
); // false

// Dates
isArray(new Date()); // false
isArray(new Date('1970-01-01T12:00:00.000Z')); // false
isArray(new Date('2099-12-31')); // false

// Empty
isArray(null); // false
isArray(undefined); // false

// Errors
isArray(new Error('message')); // false

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
isArray(new Promise(() => 1)); // false
isArray(Promise.resolve()); // false

// Regular Expression
isArray(/[regx]+/gi); // false
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
npm i @zerodep/is-array
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
