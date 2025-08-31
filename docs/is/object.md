# @zerodep/is-object

[![version](https://img.shields.io/npm/v/@zerodep/is-object?color=blue)](https://www.npmjs.com/package/@zerodep/is-object)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a non-null object and assign an `object` Typescript type to the value.

## Signature

```typescript
declare const isObject: <T extends object>(value: unknown) => boolean;
// value will be an object of type T
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isObject } from '@zerodep/is-object';

// CJS
const { isObject } = require('@zerodep/is-object');
```

```javascript
// Arrays
isObject([]); // false
isObject([1, 2, 3]); // false
isObject(['a', 'b', 'c']); // false

// BigInts
isObject(42n); // false
isObject(0n); // false
isObject(-0n); // false
isObject(-42n); // false

// Booleans
isObject(true); // false
isObject(false); // false

// Class
isObject(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isObject(new Date()); // false
isObject(new Date('1970-01-01T12:00:00.000Z')); // false
isObject(new Date('2099-12-31')); // false

// Empty
isObject(null); // false  <-- CAUTION: null values are excluded
isObject(undefined); // false

// Errors
isObject(new Error('message')); // false

// Floats
isObject(3.14); // false
isObject(0.0); // false
isObject(-0.0); // false
isObject(-3.14); // false
isObject(Math.E); // false
isObject(Math.PI); // false
isObject(Number.MIN_VALUE); // false

// Functions
isObject(() => 'function'); // false
isObject(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isObject(gen1); // false
isObject(gen2); // false

// Maps
isObject(new Map()); // false
isObject(new Map([['key1', 123]])); // false
isObject(new Map([['key1', 'value1']])); // false

// Numbers
isObject(Number.POSITIVE_INFINITY); // false
isObject(Number.MAX_SAFE_INTEGER); // false
isObject(3e8); // false
isObject(42); // false
isObject(1); // false
isObject(0); // false
isObject(-0); // false
isObject(-1); // false
isObject(-42); // false
isObject(-3e8); // false
isObject(Number.MIN_SAFE_INTEGER); // false
isObject(Number.NEGATIVE_INFINITY); // false
isObject(Number.NaN); // false

// POJOs
isObject({}); // true
isObject({ key: 'string' }); // true
isObject({ key: 123 }); // true

// Promise
isObject(new Promise(() => 1)); // false
isObject(Promise.resolve()); // false

// Regular Expression
isObject(/[regx]+/gi); // false
isObject(new RegExp('d', 'gi')); // false

// Sets
isObject(new Set()); // false
isObject(new Set([1, 2, 3])); // false
isObject(new Set(['a', 'b', 'c'])); // false

// Strings
isObject(''); // false
isObject('a longer string'); // false
isObject('1000n'); // false
isObject('3e8'); // false
isObject('42'); // false
isObject('3.14'); // false
isObject('0'); // false
isObject('-0'); // false
isObject('-3.14'); // false
isObject('-42'); // false
isObject('-3e8'); // false
isObject('-1000n'); // false

// Symbols
isObject(Symbol()); // false
isObject(Symbol('name')); // false

// This
isObject(this); // false
isObject(globalThis); // false

// TypedArrays
isObject(new Int8Array(2)); // false
isObject(new Int16Array(2)); // false
isObject(new Int32Array(2)); // false
isObject(new Uint8Array(2)); // false
isObject(new Uint16Array(2)); // false
isObject(new Uint32Array(2)); // false
isObject(new Uint8ClampedArray(2)); // false

isObject(new BigInt64Array(2)); // false
isObject(new BigUint64Array(2)); // false

isObject(new Float32Array(2)); // false
isObject(new Float64Array(2)); // false

isObject(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isObject(new WeakMap()); // false
isObject(new WeakSet()); // false
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
npm i @zerodep/is-object
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
