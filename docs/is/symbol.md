# @zerodep/is-symbol

[![version](https://img.shields.io/npm/v/@zerodep/is-symbol?color=blue)](https://www.npmjs.com/package/@zerodep/is-symbol)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a Symbol and assign a `symbol` Typescript type to the value.

## Signature

```typescript
declare const isSymbol: (value: unknown) => boolean;
// value will be of type symbol
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isSymbol } from '@zerodep/is-symbol';

// CJS
const { isSymbol } = require('@zerodep/is-symbol');
```

```javascript
// Arrays
isSymbol([]); // false
isSymbol([1, 2, 3]); // false
isSymbol(['a', 'b', 'c']); // false

// BigInts
isSymbol(42n); // false
isSymbol(0n); // false
isSymbol(-0n); // false
isSymbol(-42n); // false

// Booleans
isSymbol(true); // false
isSymbol(false); // false

// Class
isSymbol(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isSymbol(new Date()); // false
isSymbol(new Date('1970-01-01T12:00:00.000Z')); // false
isSymbol(new Date('2099-12-31')); // false

// Empty
isSymbol(null); // false
isSymbol(undefined); // false

// Errors
isSymbol(new Error('message')); // false

// Floats
isSymbol(3.14); // false
isSymbol(0.0); // false
isSymbol(-0.0); // false
isSymbol(-3.14); // false
isSymbol(Math.E); // false
isSymbol(Math.PI); // false
isSymbol(Number.MIN_VALUE); // false

// Functions
isSymbol(() => 'function'); // false
isSymbol(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isSymbol(gen1); // false
isSymbol(gen2); // false

// Maps
isSymbol(new Map()); // false
isSymbol(new Map([['key1', 123]])); // false
isSymbol(new Map([['key1', 'value1']])); // false

// Numbers
isSymbol(Number.POSITIVE_INFINITY); // false
isSymbol(Number.MAX_SAFE_INTEGER); // false
isSymbol(3e8); // false
isSymbol(42); // false
isSymbol(1); // false
isSymbol(0); // false
isSymbol(-0); // false
isSymbol(-1); // false
isSymbol(-42); // false
isSymbol(-3e8); // false
isSymbol(Number.MIN_SAFE_INTEGER); // false
isSymbol(Number.NEGATIVE_INFINITY); // false
isSymbol(Number.NaN); // false

// POJOs
isSymbol({}); // false
isSymbol({ key: 'string' }); // false
isSymbol({ key: 123 }); // false

// Promise
isSymbol(new Promise(() => 1)); // false
isSymbol(Promise.resolve()); // false

// Regular Expression
isSymbol(/[regx]+/gi); // false
isSymbol(new RegExp('d', 'gi')); // false

// Sets
isSymbol(new Set()); // false
isSymbol(new Set([1, 2, 3])); // false
isSymbol(new Set(['a', 'b', 'c'])); // false

// Strings
isSymbol(''); // false
isSymbol('a longer string'); // false
isSymbol('1000n'); // false
isSymbol('3e8'); // false
isSymbol('42'); // false
isSymbol('3.14'); // false
isSymbol('0'); // false
isSymbol('-0'); // false
isSymbol('-3.14'); // false
isSymbol('-42'); // false
isSymbol('-3e8'); // false
isSymbol('-1000n'); // false

// Symbols
isSymbol(Symbol()); // true
isSymbol(Symbol('name')); // true

// This
isSymbol(this); // false
isSymbol(globalThis); // false

// TypedArrays
isSymbol(new Int8Array(2)); // false
isSymbol(new Int16Array(2)); // false
isSymbol(new Int32Array(2)); // false
isSymbol(new Uint8Array(2)); // false
isSymbol(new Uint16Array(2)); // false
isSymbol(new Uint32Array(2)); // false
isSymbol(new Uint8ClampedArray(2)); // false

isSymbol(new BigInt64Array(2)); // false
isSymbol(new BigUint64Array(2)); // false

isSymbol(new Float32Array(2)); // false
isSymbol(new Float64Array(2)); // false

isSymbol(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isSymbol(new WeakMap()); // false
isSymbol(new WeakSet()); // false
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
npm i @zerodep/is-symbol
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
