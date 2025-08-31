# @zerodep/is-set

[![version](https://img.shields.io/npm/v/@zerodep/is-set?color=blue)](https://www.npmjs.com/package/@zerodep/is-set)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a Set and assign a `Set` Typescript type to the value.

## Signature

```typescript
declare const isSet: <T>(value: unknown) => boolean;
// value will be of type Set<T>
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isSet } from '@zerodep/is-set';

// CJS
const { isSet } = require('@zerodep/is-set');
```

```javascript
// Arrays
isSet([]); // false
isSet([1, 2, 3]); // false
isSet(['a', 'b', 'c']); // false

// BigInts
isSet(42n); // false
isSet(0n); // false
isSet(-0n); // false
isSet(-42n); // false

// Booleans
isSet(true); // false
isSet(false); // false

// Class
isSet(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isSet(new Date()); // false
isSet(new Date('1970-01-01T12:00:00.000Z')); // false
isSet(new Date('2099-12-31')); // false

// Empty
isSet(null); // false
isSet(undefined); // false

// Errors
isSet(new Error('message')); // false

// Floats
isSet(3.14); // false
isSet(0.0); // false
isSet(-0.0); // false
isSet(-3.14); // false
isSet(Math.E); // false
isSet(Math.PI); // false
isSet(Number.MIN_VALUE); // false

// Functions
isSet(() => 'function'); // false
isSet(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isSet(gen1); // false
isSet(gen2); // false

// Maps
isSet(new Map()); // false
isSet(new Map([['key1', 123]])); // false
isSet(new Map([['key1', 'value1']])); // false

// Numbers
isSet(Number.POSITIVE_INFINITY); // false
isSet(Number.MAX_SAFE_INTEGER); // false
isSet(3e8); // false
isSet(42); // false
isSet(1); // false
isSet(0); // false
isSet(-0); // false
isSet(-1); // false
isSet(-42); // false
isSet(-3e8); // false
isSet(Number.MIN_SAFE_INTEGER); // false
isSet(Number.NEGATIVE_INFINITY); // false
isSet(Number.NaN); // false

// POJOs
isSet({}); // false
isSet({ key: 'string' }); // false
isSet({ key: 123 }); // false

// Promise
isSet(new Promise(() => 1)); // false
isSet(Promise.resolve()); // false

// Regular Expression
isSet(/[regx]+/gi); // false
isSet(new RegExp('d', 'gi')); // false

// Sets
isSet(new Set()); // true
isSet(new Set([1, 2, 3])); // true
isSet(new Set(['a', 'b', 'c'])); // true

// Strings
isSet(''); // false
isSet('a longer string'); // false
isSet('1000n'); // false
isSet('3e8'); // false
isSet('42'); // false
isSet('3.14'); // false
isSet('0'); // false
isSet('-0'); // false
isSet('-3.14'); // false
isSet('-42'); // false
isSet('-3e8'); // false
isSet('-1000n'); // false

// Symbols
isSet(Symbol()); // false
isSet(Symbol('name')); // false

// This
isSet(this); // false
isSet(globalThis); // false

// TypedArrays
isSet(new Int8Array(2)); // false
isSet(new Int16Array(2)); // false
isSet(new Int32Array(2)); // false
isSet(new Uint8Array(2)); // false
isSet(new Uint16Array(2)); // false
isSet(new Uint32Array(2)); // false
isSet(new Uint8ClampedArray(2)); // false

isSet(new BigInt64Array(2)); // false
isSet(new BigUint64Array(2)); // false

isSet(new Float32Array(2)); // false
isSet(new Float64Array(2)); // false

isSet(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isSet(new WeakMap()); // false
isSet(new WeakSet()); // false
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
npm i @zerodep/is-set
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
