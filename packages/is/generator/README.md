# @zerodep/is-generator

[![version](https://img.shields.io/npm/v/@zerodep/is-generator?color=blue)](https://www.npmjs.com/package/@zerodep/is-generator)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a sync or async generator.

## Signature

```typescript
declare const isGenerator: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isGenerator } from '@zerodep/is-generator';

// CJS
const { isGenerator } = require('@zerodep/is-generator');
```

```javascript
// Arrays
isGenerator([]); // false
isGenerator([1, 2, 3]); // false
isGenerator(['a', 'b', 'c']); // false

// BigInts
isGenerator(42n); // false
isGenerator(0n); // false
isGenerator(-0n); // false
isGenerator(-42n); // false

// Booleans
isGenerator(true); // false
isGenerator(false); // false

// Class
isGenerator(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isGenerator(new Date()); // false
isGenerator(new Date('1970-01-01T12:00:00.000Z')); // false
isGenerator(new Date('2099-12-31')); // false

// Empty
isGenerator(null); // false
isGenerator(undefined); // false

// Errors
isGenerator(new Error('message')); // false

// Floats
isGenerator(3.14); // false
isGenerator(0.0); // false
isGenerator(-0.0); // false
isGenerator(-3.14); // false
isGenerator(Math.E); // false
isGenerator(Math.PI); // false
isGenerator(Number.MIN_VALUE); // false

// Functions
isGenerator(() => 'function'); // false
isGenerator(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isGenerator(gen1); // true
isGenerator(gen2); // true

// Maps
isGenerator(new Map()); // false
isGenerator(new Map([['key1', 123]])); // false
isGenerator(new Map([['key1', 'value1']])); // false

// Numbers
isGenerator(Number.POSITIVE_INFINITY); // false
isGenerator(Number.MAX_SAFE_INTEGER); // false
isGenerator(3e8); // false
isGenerator(42); // false
isGenerator(1); // false
isGenerator(0); // false
isGenerator(-0); // false
isGenerator(-1); // false
isGenerator(-42); // false
isGenerator(-3e8); // false
isGenerator(Number.MIN_SAFE_INTEGER); // false
isGenerator(Number.NEGATIVE_INFINITY); // false
isGenerator(Number.NaN); // false

// POJOs
isGenerator({}); // false
isGenerator({ key: 'string' }); // false
isGenerator({ key: 123 }); // false

// Promise
isGenerator(new Promise(() => 1)); // false
isGenerator(Promise.resolve()); // false

// Regular Expression
isGenerator(/[regx]+/gi); // false
isGenerator(new RegExp('d', 'gi')); // false

// Sets
isGenerator(new Set()); // false
isGenerator(new Set([1, 2, 3])); // false
isGenerator(new Set(['a', 'b', 'c'])); // false

// Strings
isGenerator(''); // false
isGenerator('a longer string'); // false
isGenerator('1000n'); // false
isGenerator('3e8'); // false
isGenerator('42'); // false
isGenerator('3.14'); // false
isGenerator('0'); // false
isGenerator('-0'); // false
isGenerator('-3.14'); // false
isGenerator('-42'); // false
isGenerator('-3e8'); // false
isGenerator('-1000n'); // false

// Symbols
isGenerator(Symbol()); // false
isGenerator(Symbol('name')); // false

// This
isGenerator(this); // false
isGenerator(globalThis); // false

// TypedArrays
isGenerator(new Int8Array(2)); // false
isGenerator(new Int16Array(2)); // false
isGenerator(new Int32Array(2)); // false
isGenerator(new Uint8Array(2)); // false
isGenerator(new Uint16Array(2)); // false
isGenerator(new Uint32Array(2)); // false
isGenerator(new Uint8ClampedArray(2)); // false

isGenerator(new BigInt64Array(2)); // false
isGenerator(new BigUint64Array(2)); // false

isGenerator(new Float32Array(2)); // false
isGenerator(new Float64Array(2)); // false

isGenerator(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isGenerator(new WeakMap()); // false
isGenerator(new WeakSet()); // false
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
npm i @zerodep/is-generator
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
