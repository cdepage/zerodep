# @zerodep/is-undefined

[![version](https://img.shields.io/npm/v/@zerodep/is-array?color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is undefined and assign an `undefined` Typescript type to the value.

## Signature

```typescript
declare const isUndefined: (value: unknown) => boolean;
// value will be of type undefined
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
  },
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
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isUndefined(gen1); // false
isUndefined(gen2); // false

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
isUndefined(new Promise(() => 1)); // false
isUndefined(Promise.resolve()); // false

// Regular Expression
isUndefined(/[regx]+/gi); // false
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
npm i @zerodep/is-undefined
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
