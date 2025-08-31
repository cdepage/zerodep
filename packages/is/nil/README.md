# @zerodep/is-nil

[![version](https://img.shields.io/npm/v/@zerodep/is-nil?color=blue)](https://www.npmjs.com/package/@zerodep/is-nil)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is `null` or `undefined`.

## Signature

```typescript
declare const isNil: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isNil } from '@zerodep/is-nil';

// CJS
const { isNil } = require('@zerodep/is-nil');
```

```javascript
// Arrays
isNil([]); // false
isNil([1, 2, 3]); // false
isNil(['a', 'b', 'c']); // false

// BigInts
isNil(42n); // false
isNil(0n); // false
isNil(-0n); // false
isNil(-42n); // false

// Booleans
isNil(true); // false
isNil(false); // false

// Class
isNil(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isNil(new Date()); // false
isNil(new Date('1970-01-01T12:00:00.000Z')); // false
isNil(new Date('2099-12-31')); // false

// Empty
isNil(null); // true
isNil(undefined); // true

// Errors
isNil(new Error('message')); // false

// Floats
isNil(3.14); // false
isNil(0.0); // false
isNil(-0.0); // false
isNil(-3.14); // false
isNil(Math.E); // false
isNil(Math.PI); // false
isNil(Number.MIN_VALUE); // false

// Functions
isNil(() => 'function'); // false
isNil(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isNil(gen1); // false
isNil(gen2); // false

// Maps
isNil(new Map()); // false
isNil(new Map([['key1', 123]])); // false
isNil(new Map([['key1', 'value1']])); // false

// Numbers
isNil(Number.POSITIVE_INFINITY); // false
isNil(Number.MAX_SAFE_INTEGER); // false
isNil(3e8); // false
isNil(42); // false
isNil(1); // false
isNil(0); // false
isNil(-0); // false
isNil(-1); // false
isNil(-42); // false
isNil(-3e8); // false
isNil(Number.MIN_SAFE_INTEGER); // false
isNil(Number.NEGATIVE_INFINITY); // false
isNil(Number.NaN); // false

// POJOs
isNil({}); // false
isNil({ key: 'string' }); // false
isNil({ key: 123 }); // false

// Promise
isNil(new Promise(() => 1)); // false
isNil(Promise.resolve()); // false

// Regular Expression
isNil(/[regx]+/gi); // false
isNil(new RegExp('d', 'gi')); // false

// Sets
isNil(new Set()); // false
isNil(new Set([1, 2, 3])); // false
isNil(new Set(['a', 'b', 'c'])); // false

// Strings
isNil(''); // false
isNil('a longer string'); // false
isNil('1000n'); // false
isNil('3e8'); // false
isNil('42'); // false
isNil('3.14'); // false
isNil('0'); // false
isNil('-0'); // false
isNil('-3.14'); // false
isNil('-42'); // false
isNil('-3e8'); // false
isNil('-1000n'); // false

// Symbols
isNil(Symbol()); // false
isNil(Symbol('name')); // false

// This
isNil(this); // false
isNil(globalThis); // false

// TypedArrays
isNil(new Int8Array(2)); // false
isNil(new Int16Array(2)); // false
isNil(new Int32Array(2)); // false
isNil(new Uint8Array(2)); // false
isNil(new Uint16Array(2)); // false
isNil(new Uint32Array(2)); // false
isNil(new Uint8ClampedArray(2)); // false

isNil(new BigInt64Array(2)); // false
isNil(new BigUint64Array(2)); // false

isNil(new Float32Array(2)); // false
isNil(new Float64Array(2)); // false

isNil(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isNil(new WeakMap()); // false
isNil(new WeakSet()); // false
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
npm i @zerodep/is-nil
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
