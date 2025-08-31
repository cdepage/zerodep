# @zerodep/is-empty

[![version](https://img.shields.io/npm/v/@zerodep/is-empty?color=blue)](https://www.npmjs.com/package/@zerodep/is-empty)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null`, `undefined` or an empty array, empty string, empty POJO, empty Map, or empty Set.

## Signature

```typescript
declare const isEmpty: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isEmpty } from '@zerodep/is-empty';

// CJS
const { isEmpty } = require('@zerodep/is-empty');
```

```javascript
// Arrays
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
isEmpty(['a', 'b', 'c']); // false

// BigInts
isEmpty(42n); // false
isEmpty(0n); // false
isEmpty(-0n); // false
isEmpty(-42n); // false

// Booleans
isEmpty(true); // false
isEmpty(false); // false

// Class
isEmpty(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isEmpty(new Date()); // false
isEmpty(new Date('1970-01-01T12:00:00.000Z')); // false
isEmpty(new Date('2099-12-31')); // false

// Empty
isEmpty(null); // true
isEmpty(undefined); // true

// Errors
isEmpty(new Error('message')); // false

// Floats
isEmpty(3.14); // false
isEmpty(0.0); // false
isEmpty(-0.0); // false
isEmpty(-3.14); // false
isEmpty(Math.E); // false
isEmpty(Math.PI); // false
isEmpty(Number.MIN_VALUE); // false

// Functions
isEmpty(() => 'function'); // false
isEmpty(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isEmpty(gen1); // false
isEmpty(gen2); // false

// Maps
isEmpty(new Map()); // true
isEmpty(new Map([['key1', 123]])); // false
isEmpty(new Map([['key1', 'value1']])); // false

// Numbers
isEmpty(Number.POSITIVE_INFINITY); // false
isEmpty(Number.MAX_SAFE_INTEGER); // false
isEmpty(Number.MAX_VALUE); // false
isEmpty(3e8); // false
isEmpty(42); // false
isEmpty(1); // false
isEmpty(0); // false
isEmpty(-0); // false
isEmpty(-1); // false
isEmpty(-42); // false
isEmpty(-3e8); // false
isEmpty(Number.MIN_SAFE_INTEGER); // false
isEmpty(Number.NEGATIVE_INFINITY); // false
isEmpty(Number.NaN); // false

// POJOs
isEmpty({}); // true
isEmpty({ key: 'string' }); // false
isEmpty({ key: 123 }); // false

// Promise
isEmpty(new Promise(() => 1)); // false
isEmpty(Promise.resolve()); // false

// Regular Expression
isEmpty(/[regx]+/gi); // false
isEmpty(new RegExp('d', 'gi')); // false

// Sets
isEmpty(new Set()); // true
isEmpty(new Set([1, 2, 3])); // false
isEmpty(new Set(['a', 'b', 'c'])); // false

// Strings
isEmpty(''); // true
isEmpty('a longer string'); // false
isEmpty('1000n'); // false
isEmpty('3e8'); // false
isEmpty('42'); // false
isEmpty('3.14'); // false
isEmpty('0'); // false
isEmpty('-0'); // false
isEmpty('-3.14'); // false
isEmpty('-42'); // false
isEmpty('-3e8'); // false
isEmpty('-1000n'); // false

// Symbols
isEmpty(Symbol()); // false
isEmpty(Symbol('name')); // false

// This
isEmpty(this); // false
isEmpty(globalThis); // false

// TypedArrays
isEmpty(new Int8Array(2)); // false
isEmpty(new Int16Array(2)); // false
isEmpty(new Int32Array(2)); // false
isEmpty(new Uint8Array(2)); // false
isEmpty(new Uint16Array(2)); // false
isEmpty(new Uint32Array(2)); // false
isEmpty(new Uint8ClampedArray(2)); // false

isEmpty(new BigInt64Array(2)); // false
isEmpty(new BigUint64Array(2)); // false

isEmpty(new Float32Array(2)); // false
isEmpty(new Float64Array(2)); // false

isEmpty(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isEmpty(new WeakMap()); // false
isEmpty(new WeakSet()); // false
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
npm i @zerodep/is-empty
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
