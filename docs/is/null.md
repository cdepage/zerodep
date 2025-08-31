# @zerodep/is-null

[![version](https://img.shields.io/npm/v/@zerodep/is-null?color=blue)](https://www.npmjs.com/package/@zerodep/is-null)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is null and assign a `null`` Typescript type to the value.

## Signature

```typescript
declare const isNull: (value: unknown) => boolean;
// value will be of type null
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isNull } from '@zerodep/is-null';

// CJS
const { isNull } = require('@zerodep/is-null');
```

```javascript
// Arrays
isNull([]); // false
isNull([1, 2, 3]); // false
isNull(['a', 'b', 'c']); // false

// BigInts
isNull(42n); // false
isNull(0n); // false
isNull(-0n); // false
isNull(-42n); // false

// Booleans
isNull(true); // false
isNull(false); // false

// Class
isNull(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isNull(new Date()); // false
isNull(new Date('1970-01-01T12:00:00.000Z')); // false
isNull(new Date('2099-12-31')); // false

// Empty
isNull(null); // true
isNull(undefined); // false

// Errors
isNull(new Error('message')); // false

// Floats
isNull(3.14); // false
isNull(0.0); // false
isNull(-0.0); // false
isNull(-3.14); // false
isNull(Math.E); // false
isNull(Math.PI); // false
isNull(Number.MIN_VALUE); // false

// Functions
isNull(() => 'function'); // false
isNull(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isNull(gen1); // false
isNull(gen2); // false

// Maps
isNull(new Map()); // false
isNull(new Map([['key1', 123]])); // false
isNull(new Map([['key1', 'value1']])); // false

// Numbers
isNull(Number.POSITIVE_INFINITY); // false
isNull(Number.MAX_SAFE_INTEGER); // false
isNull(3e8); // false
isNull(42); // false
isNull(1); // false
isNull(0); // false
isNull(-0); // false
isNull(-1); // false
isNull(-42); // false
isNull(-3e8); // false
isNull(Number.MIN_SAFE_INTEGER); // false
isNull(Number.NEGATIVE_INFINITY); // false
isNull(Number.NaN); // false

// POJOs
isNull({}); // false
isNull({ key: 'string' }); // false
isNull({ key: 123 }); // false

// Promise
isNull(new Promise(() => 1)); // false
isNull(Promise.resolve()); // false

// Regular Expression
isNull(/[regx]+/gi); // false
isNull(new RegExp('d', 'gi')); // false

// Sets
isNull(new Set()); // false
isNull(new Set([1, 2, 3])); // false
isNull(new Set(['a', 'b', 'c'])); // false

// Strings
isNull(''); // false
isNull('a longer string'); // false
isNull('1000n'); // false
isNull('3e8'); // false
isNull('42'); // false
isNull('3.14'); // false
isNull('0'); // false
isNull('-0'); // false
isNull('-3.14'); // false
isNull('-42'); // false
isNull('-3e8'); // false
isNull('-1000n'); // false

// Symbols
isNull(Symbol()); // false
isNull(Symbol('name')); // false

// This
isNull(this); // false
isNull(globalThis); // false

// TypedArrays
isNull(new Int8Array(2)); // false
isNull(new Int16Array(2)); // false
isNull(new Int32Array(2)); // false
isNull(new Uint8Array(2)); // false
isNull(new Uint16Array(2)); // false
isNull(new Uint32Array(2)); // false
isNull(new Uint8ClampedArray(2)); // false

isNull(new BigInt64Array(2)); // false
isNull(new BigUint64Array(2)); // false

isNull(new Float32Array(2)); // false
isNull(new Float64Array(2)); // false

isNull(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isNull(new WeakMap()); // false
isNull(new WeakSet()); // false
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
npm i @zerodep/is-null
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
