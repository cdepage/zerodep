# @zerodep/is-iterable

[![version](https://img.shields.io/npm/v/@zerodep/is-iterable?color=blue)](https://www.npmjs.com/package/@zerodep/is-iterable)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value implements the iterable protocol.

## Signature

```typescript
declare const isIterable: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isIterable } from '@zerodep/is-iterable';

// CJS
const { isIterable } = require('@zerodep/is-iterable');
```

```javascript
// Arrays
isIterable([]); // true
isIterable([1, 2, 3]); // true
isIterable(['a', 'b', 'c']); // true

// BigInts
isIterable(42n); // false
isIterable(0n); // false
isIterable(-0n); // false
isIterable(-42n); // false

// Booleans
isIterable(true); // false
isIterable(false); // false

// Class
isIterable(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isIterable(new Date()); // false
isIterable(new Date('1970-01-01T12:00:00.000Z')); // false
isIterable(new Date('2099-12-31')); // false

// Empty
isIterable(null); // false
isIterable(undefined); // false

// Errors
isIterable(new Error('message')); // false

// Floats
isIterable(3.14); // false
isIterable(0.0); // false
isIterable(-0.0); // false
isIterable(-3.14); // false
isIterable(Math.E); // false
isIterable(Math.PI); // false
isIterable(Number.MIN_VALUE); // false

// Functions
isIterable(() => 'function'); // false
isIterable(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isIterable(gen1); // true
isIterable(gen2); // true

// Maps
isIterable(new Map()); // true
isIterable(new Map([['key1', 123]])); // true
isIterable(new Map([['key1', 'value1']])); // true

// Numbers
isIterable(Number.POSITIVE_INFINITY); // false
isIterable(Number.MAX_SAFE_INTEGER); // false
isIterable(3e8); // false
isIterable(42); // false
isIterable(1); // false
isIterable(0); // false
isIterable(-0); // false
isIterable(-1); // false
isIterable(-42); // false
isIterable(-3e8); // false
isIterable(Number.MIN_SAFE_INTEGER); // false
isIterable(Number.NEGATIVE_INFINITY); // false
isIterable(Number.NaN); // false

// POJOs
isIterable({}); // false
isIterable({ key: 'string' }); // false
isIterable({ key: 123 }); // false

// Promise
isIterable(new Promise(() => 1)); // false
isIterable(Promise.resolve()); // false

// Regular Expression
isIterable(/[regx]+/gi); // false
isIterable(new RegExp('d', 'gi')); // false

// Sets
isIterable(new Set()); // true
isIterable(new Set([1, 2, 3])); // true
isIterable(new Set(['a', 'b', 'c'])); // true

// Strings
isIterable(''); // false
isIterable('a longer string'); // false
isIterable('1000n'); // false
isIterable('3e8'); // false
isIterable('42'); // false
isIterable('3.14'); // false
isIterable('0'); // false
isIterable('-0'); // false
isIterable('-3.14'); // false
isIterable('-42'); // false
isIterable('-3e8'); // false
isIterable('-1000n'); // false

// Symbols
isIterable(Symbol()); // false
isIterable(Symbol('name')); // false

// This
isIterable(this); // false
isIterable(globalThis); // false

// TypedArrays
isIterable(new Int8Array(2)); // true
isIterable(new Int16Array(2)); // true
isIterable(new Int32Array(2)); // true
isIterable(new Uint8Array(2)); // true
isIterable(new Uint16Array(2)); // true
isIterable(new Uint32Array(2)); // true
isIterable(new Uint8ClampedArray(2)); // true

isIterable(new BigInt64Array(2)); // true
isIterable(new BigUint64Array(2)); // true

isIterable(new Float32Array(2)); // true
isIterable(new Float64Array(2)); // true

isIterable(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isIterable(new WeakMap()); // false
isIterable(new WeakSet()); // false
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
npm i @zerodep/is-iterable
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
