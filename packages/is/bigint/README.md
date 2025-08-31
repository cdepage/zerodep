# @zerodep/is-bigint

[![version](https://img.shields.io/npm/v/@zerodep/is-bigint?color=blue)](https://www.npmjs.com/package/@zerodep/is-bigint)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a BigInt and assign a `bigint` Typescript type to the value.

## Signature

```typescript
declare const isBigInt: (value: unknown) => boolean;
// value will be of type bigint
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isBigInt } from '@zerodep/is-bigint';

// CJS
const { isBigInt } = require('@zerodep/is-bigint');
```

```javascript
// Arrays
isBigInt([]); // false
isBigInt([1, 2, 3]); // false
isBigInt(['a', 'b', 'c']); // false

// BigInts
isBigInt(42n); // true
isBigInt(0n); // true
isBigInt(-0n); // true
isBigInt(-42n); // true

// Booleans
isBigInt(true); // false
isBigInt(false); // false

// Class
isBigInt(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isBigInt(new Date()); // false
isBigInt(new Date('1970-01-01T12:00:00.000Z')); // false
isBigInt(new Date('2099-12-31')); // false

// Empty
isBigInt(null); // false
isBigInt(undefined); // false

// Errors
isBigInt(new Error('message')); // false

// Floats
isBigInt(3.14); // false
isBigInt(0.0); // false
isBigInt(-0.0); // false
isBigInt(-3.14); // false
isBigInt(Math.E); // false
isBigInt(Math.PI); // false
isBigInt(Number.MIN_VALUE); // false

// Functions
isBigInt(() => 'function'); // false
isBigInt(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isBigInt(gen1); // false
isBigInt(gen2); // false

// Maps
isBigInt(new Map()); // false
isBigInt(new Map([['key1', 123]])); // false
isBigInt(new Map([['key1', 'value1']])); // false

// Numbers
isBigInt(Number.POSITIVE_INFINITY); // false
isBigInt(Number.MAX_SAFE_INTEGER); // false
isBigInt(Number.MAX_VALUE); // false
isBigInt(3e8); // false
isBigInt(42); // false
isBigInt(1); // false
isBigInt(0); // false
isBigInt(-0); // false
isBigInt(-1); // false
isBigInt(-42); // false
isBigInt(-3e8); // false
isBigInt(Number.MIN_SAFE_INTEGER); // false
isBigInt(Number.NEGATIVE_INFINITY); // false
isBigInt(Number.NaN); // false

// POJOs
isBigInt({}); // false
isBigInt({ key: 'string' }); // false
isBigInt({ key: 123 }); // false

// Promise
isBigInt(new Promise(() => 1)); // false
isBigInt(Promise.resolve()); // false

// Regular Expression
isBigInt(/[regx]+/gi); // false
isBigInt(new RegExp('d', 'gi')); // false

// Sets
isBigInt(new Set()); // false
isBigInt(new Set([1, 2, 3])); // false
isBigInt(new Set(['a', 'b', 'c'])); // false

// Strings
isBigInt(''); // false
isBigInt('a longer string'); // false
isBigInt('1000n'); // false
isBigInt('3e8'); // false
isBigInt('42'); // false
isBigInt('3.14'); // false
isBigInt('0'); // false
isBigInt('-0'); // false
isBigInt('-3.14'); // false
isBigInt('-42'); // false
isBigInt('-3e8'); // false
isBigInt('-1000n'); // false

// Symbols
isBigInt(Symbol()); // false
isBigInt(Symbol('name')); // false

// This
isBigInt(this); // false
isBigInt(globalThis); // false

// TypedArrays
isBigInt(new Int8Array(2)); // false
isBigInt(new Int16Array(2)); // false
isBigInt(new Int32Array(2)); // false
isBigInt(new Uint8Array(2)); // false
isBigInt(new Uint16Array(2)); // false
isBigInt(new Uint32Array(2)); // false
isBigInt(new Uint8ClampedArray(2)); // false

isBigInt(new BigInt64Array(2)); // false
isBigInt(new BigUint64Array(2)); // false

isBigInt(new Float32Array(2)); // false
isBigInt(new Float64Array(2)); // false

isBigInt(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isBigInt(new WeakMap()); // false
isBigInt(new WeakSet()); // false
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
npm i @zerodep/is-bigint
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
