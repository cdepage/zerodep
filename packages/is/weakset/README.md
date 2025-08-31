# @zerodep/is-weakset

[![version](https://img.shields.io/npm/v/@zerodep/is-weakset?color=blue)](https://www.npmjs.com/package/@zerodep/is-weakset)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a Weak Set and assign a `WeakSet<T>` Typescript type to the value.

## Signature

```typescript
declare const isWeakSet: <T extends object>(value: unknown) => boolean;
// value will be of type WeakSet<T>
```

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
// ESM
import { isWeakSet } from '@zerodep/is-weakset';

// CJS
const { isWeakSet } = require('@zerodep/is-weakset');
```

```javascript
// Arrays
isWeakSet([]); // false
isWeakSet([1, 2, 3]); // false
isWeakSet(['a', 'b', 'c']); // false

// BigInts
isWeakSet(42n); // false
isWeakSet(0n); // false
isWeakSet(-0n); // false
isWeakSet(-42n); // false

// Booleans
isWeakSet(true); // false
isWeakSet(false); // false

// Class
isWeakSet(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isWeakSet(new Date()); // false
isWeakSet(new Date('1970-01-01T12:00:00.000Z')); // false
isWeakSet(new Date('2099-12-31')); // false

// Empty
isWeakSet(null); // false
isWeakSet(undefined); // false

// Errors
isWeakSet(new Error('message')); // false

// Floats
isWeakSet(3.14); // false
isWeakSet(0.0); // false
isWeakSet(-0.0); // false
isWeakSet(-3.14); // false
isWeakSet(Math.E); // false
isWeakSet(Math.PI); // false
isWeakSet(Number.MIN_VALUE); // false

// Functions
isWeakSet(() => 'function'); // false
isWeakSet(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isWeakSet(gen1); // false
isWeakSet(gen2); // false

// Maps
isWeakSet(new Map()); // false
isWeakSet(new Map([['key1', 123]])); // false
isWeakSet(new Map([['key1', 'value1']])); // false

// Numbers
isWeakSet(Number.POSITIVE_INFINITY); // false
isWeakSet(Number.MAX_SAFE_INTEGER); // false
isWeakSet(3e8); // false
isWeakSet(42); // false
isWeakSet(1); // false
isWeakSet(0); // false
isWeakSet(-0); // false
isWeakSet(-1); // false
isWeakSet(-42); // false
isWeakSet(-3e8); // false
isWeakSet(Number.MIN_SAFE_INTEGER); // false
isWeakSet(Number.NEGATIVE_INFINITY); // false
isWeakSet(Number.NaN); // false

// POJOs
isWeakSet({}); // false
isWeakSet({ key: 'string' }); // false
isWeakSet({ key: 123 }); // false

// Promise
isWeakSet(new Promise(() => 1)); // false
isWeakSet(Promise.resolve()); // false

// Regular Expression
isWeakSet(/[regx]+/gi); // false
isWeakSet(new RegExp('d', 'gi')); // false

// Sets
isWeakSet(new Set()); // false
isWeakSet(new Set([1, 2, 3])); // false
isWeakSet(new Set(['a', 'b', 'c'])); // false

// Strings
isWeakSet(''); // false
isWeakSet('a longer string'); // false
isWeakSet('1000n'); // false
isWeakSet('3e8'); // false
isWeakSet('42'); // false
isWeakSet('3.14'); // false
isWeakSet('0'); // false
isWeakSet('-0'); // false
isWeakSet('-3.14'); // false
isWeakSet('-42'); // false
isWeakSet('-3e8'); // false
isWeakSet('-1000n'); // false

// Symbols
isWeakSet(Symbol()); // false
isWeakSet(Symbol('name')); // false

// This
isWeakSet(this); // false
isWeakSet(globalThis); // false

// TypedArrays
isWeakSet(new Int8Array(2)); // false
isWeakSet(new Int16Array(2)); // false
isWeakSet(new Int32Array(2)); // false
isWeakSet(new Uint8Array(2)); // false
isWeakSet(new Uint16Array(2)); // false
isWeakSet(new Uint32Array(2)); // false
isWeakSet(new Uint8ClampedArray(2)); // false

isWeakSet(new BigInt64Array(2)); // false
isWeakSet(new BigUint64Array(2)); // false

isWeakSet(new Float32Array(2)); // false
isWeakSet(new Float64Array(2)); // false

isWeakSet(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isWeakSet(new WeakMap()); // false
isWeakSet(new WeakSet()); // true
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
npm i @zerodep/is-weakset
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
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
