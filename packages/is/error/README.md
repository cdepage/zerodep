# @zerodep/is-error

[![version](https://img.shields.io/npm/v/@zerodep/is-error?color=blue)](https://www.npmjs.com/package/@zerodep/is-error)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is an Error or specific instance/subclass of an Error type.

## Signature

```typescript
declare const isError: (value: unknown) => boolean;
// value will be of type Error
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isError } from '@zerodep/is-error';

// CJS
const { isError } = require('@zerodep/is-error');
```

```javascript
// Arrays
isError([]); // false
isError([1, 2, 3]); // false
isError(['a', 'b', 'c']); // false

// BigInts
isError(42n); // false
isError(0n); // false
isError(-0n); // false
isError(-42n); // false

// Booleans
isError(true); // false
isError(false); // false

// Class
isError(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isError(new Date()); // false
isError(new Date('1970-01-01T12:00:00.000Z')); // false
isError(new Date('2099-12-31')); // false

// Empty
isError(null); // false
isError(undefined); // false

// Errors
isError(new Error('message')); // true

// Error Subtypes
class CustomError extends Error {}
class OtherError extends Error {}
isError(new CustomError('message')); // true
isError(new CustomError('message'), CustomError); // true
isError(new CustomError('message'), OtherError); // false

// Floats
isError(3.14); // false
isError(0.0); // false
isError(-0.0); // false
isError(-3.14); // false
isError(Math.E); // false
isError(Math.PI); // false
isError(Number.MIN_VALUE); // false

// Functions
isError(() => 'function'); // false
isError(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
expect(isError(gen1)).toBeFalsy();
expect(isError(gen2)).toBeFalsy();

// Maps
isError(new Map()); // false
isError(new Map([['key1', 123]])); // false
isError(new Map([['key1', 'value1']])); // false

// Numbers
isError(Number.POSITIVE_INFINITY); // false
isError(Number.MAX_SAFE_INTEGER); // false
isError(Number.MAX_VALUE); // false
isError(3e8); // false
isError(42); // false
isError(1); // false
isError(0); // false
isError(-0); // false
isError(-1); // false
isError(-42); // false
isError(-3e8); // false
isError(Number.MIN_SAFE_INTEGER); // false
isError(Number.NEGATIVE_INFINITY); // false
isError(Number.NaN); // false

// POJOs
isError({}); // false
isError({ key: 'string' }); // false
isError({ key: 123 }); // false

// Promise
isError(new Promise(() => 1)); // false
isError(Promise.resolve()); // false

// Regular Expression
isError(/[regx]+/gi); // false
isError(new RegExp('d', 'gi')); // false

// Sets
isError(new Set()); // false
isError(new Set([1, 2, 3])); // false
isError(new Set(['a', 'b', 'c'])); // false

// Strings
isError(''); // false
isError('a longer string'); // false
isError('1000n'); // false
isError('3e8'); // false
isError('42'); // false
isError('3.14'); // false
isError('0'); // false
isError('-0'); // false
isError('-3.14'); // false
isError('-42'); // false
isError('-3e8'); // false
isError('-1000n'); // false

// Symbols
isError(Symbol()); // false
isError(Symbol('name')); // false

// This
isError(this); // false
isError(globalThis); // false

// TypedArrays
isError(new Int8Array(2)); // false
isError(new Int16Array(2)); // false
isError(new Int32Array(2)); // false
isError(new Uint8Array(2)); // false
isError(new Uint16Array(2)); // false
isError(new Uint32Array(2)); // false
isError(new Uint8ClampedArray(2)); // false

isError(new BigInt64Array(2)); // false
isError(new BigUint64Array(2)); // false

isError(new Float32Array(2)); // false
isError(new Float64Array(2)); // false

isError(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isError(new WeakMap()); // false
isError(new WeakSet()); // false
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
npm i @zerodep/is-error
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
