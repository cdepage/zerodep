# @zerodep/is-json

[![version](https://img.shields.io/npm/v/@zerodep/is-json?color=blue)](https://www.npmjs.com/package/@zerodep/is-json)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a valid JSON object and assign an `object` Typescript type to the value.

## Signature

```typescript
declare const isJson: <T extends object>(value: unknown) => boolean;
// value will be of type T
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isJson } from '@zerodep/is-json';

// CJS
const { isJson } = require('@zerodep/is-json');
```

```javascript
// Arrays
isJson([]); // true
isJson([1, 2, 3]); // true
isJson(['a', 'b', 'c']); // true

// BigInts
isJson(42n); // false
isJson(0n); // false
isJson(-0n); // false
isJson(-42n); // false

// Booleans
isJson(true); // false
isJson(false); // false

// Class
isJson(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isJson(new Date()); // false
isJson(new Date('1970-01-01T12:00:00.000Z')); // false
isJson(new Date('2099-12-31')); // false

// Empty
isJson(null); // false
isJson(undefined); // false

// Errors
isJson(new Error('message')); // false

// Floats
isJson(3.14); // false
isJson(0.0); // false
isJson(-0.0); // false
isJson(-3.14); // false
isJson(Math.E); // false
isJson(Math.PI); // false
isJson(Number.MIN_VALUE); // false

// Functions
isJson(() => 'function'); // false
isJson(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isJson(gen1); // false
isJson(gen2); // false

// Maps
isJson(new Map()); // false
isJson(new Map([['key1', 123]])); // false
isJson(new Map([['key1', 'value1']])); // false

// Numbers
isJson(Number.POSITIVE_INFINITY); // false
isJson(Number.MAX_SAFE_INTEGER); // false
isJson(3e8); // false
isJson(42); // false
isJson(1); // false
isJson(0); // false
isJson(-0); // false
isJson(-1); // false
isJson(-42); // false
isJson(-3e8); // false
isJson(Number.MIN_SAFE_INTEGER); // false
isJson(Number.NEGATIVE_INFINITY); // false
isJson(Number.NaN); // false

// JSONs
isJson({}); // true
isJson({ key: 'string' }); // true
isJson({ key: 123 }); // true

// Promise
isJson(new Promise(() => 1)); // false
isJson(Promise.resolve()); // false

// Regular Expression
isJson(/[regx]+/gi); // false
isJson(new RegExp('d', 'gi')); // false

// Sets
isJson(new Set()); // false
isJson(new Set([1, 2, 3])); // false
isJson(new Set(['a', 'b', 'c'])); // false

// Strings
isJson(''); // false
isJson('a longer string'); // false
isJson('1000n'); // false
isJson('3e8'); // false
isJson('42'); // false
isJson('3.14'); // false
isJson('0'); // false
isJson('-0'); // false
isJson('-3.14'); // false
isJson('-42'); // false
isJson('-3e8'); // false
isJson('-1000n'); // false

// Symbols
isJson(Symbol()); // false
isJson(Symbol('name')); // false

// This
isJson(this); // false
isJson(globalThis); // false

// TypedArrays
isJson(new Int8Array(2)); // false
isJson(new Int16Array(2)); // false
isJson(new Int32Array(2)); // false
isJson(new Uint8Array(2)); // false
isJson(new Uint16Array(2)); // false
isJson(new Uint32Array(2)); // false
isJson(new Uint8ClampedArray(2)); // false

isJson(new BigInt64Array(2)); // false
isJson(new BigUint64Array(2)); // false

isJson(new Float32Array(2)); // false
isJson(new Float64Array(2)); // false

isJson(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isJson(new WeakMap()); // false
isJson(new WeakSet()); // false
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
npm i @zerodep/is-json
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
