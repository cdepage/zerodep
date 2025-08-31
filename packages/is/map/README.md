# @zerodep/is-map

[![version](https://img.shields.io/npm/v/@zerodep/is-map?color=blue)](https://www.npmjs.com/package/@zerodep/is-map)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a Map and assign a `Map` Typescript type to the value.

## Signature

```typescript
declare const isMap: <K, V>(value: unknown) => boolean;
// value will be of type Map<K, V>
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isMap } from '@zerodep/is-map';

// CJS
const { isMap } = require('@zerodep/is-map');
```

```javascript
// Arrays
isMap([]); // false
isMap([1, 2, 3]); // false
isMap(['a', 'b', 'c']); // false

// BigInts
isMap(42n); // false
isMap(0n); // false
isMap(-0n); // false
isMap(-42n); // false

// Booleans
isMap(true); // false
isMap(false); // false

// Class
isMap(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isMap(new Date()); // false
isMap(new Date('1970-01-01T12:00:00.000Z')); // false
isMap(new Date('2099-12-31')); // false

// Empty
isMap(null); // false
isMap(undefined); // false

// Errors
isMap(new Error('message')); // false

// Floats
isMap(3.14); // false
isMap(0.0); // false
isMap(-0.0); // false
isMap(-3.14); // false
isMap(Math.E); // false
isMap(Math.PI); // false
isMap(Number.MIN_VALUE); // false

// Functions
isMap(() => 'function'); // false
isMap(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isMap(gen1); // false
isMap(gen2); // false

// Maps
isMap(new Map()); // true
isMap(new Map([['key1', 123]])); // true
isMap(new Map([['key1', 'value1']])); // true

// Numbers
isMap(Number.POSITIVE_INFINITY); // false
isMap(Number.MAX_SAFE_INTEGER); // false
isMap(3e8); // false
isMap(42); // false
isMap(1); // false
isMap(0); // false
isMap(-0); // false
isMap(-1); // false
isMap(-42); // false
isMap(-3e8); // false
isMap(Number.MIN_SAFE_INTEGER); // false
isMap(Number.NEGATIVE_INFINITY); // false
isMap(Number.NaN); // false

// POJOs
isMap({}); // false
isMap({ key: 'string' }); // false
isMap({ key: 123 }); // false

// Promise
isMap(new Promise(() => 1)); // false
isMap(Promise.resolve()); // false

// Regular Expression
isMap(/[regx]+/gi); // false
isMap(new RegExp('d', 'gi')); // false

// Sets
isMap(new Set()); // false
isMap(new Set([1, 2, 3])); // false
isMap(new Set(['a', 'b', 'c'])); // false

// Strings
isMap(''); // false
isMap('a longer string'); // false
isMap('1000n'); // false
isMap('3e8'); // false
isMap('42'); // false
isMap('3.14'); // false
isMap('0'); // false
isMap('-0'); // false
isMap('-3.14'); // false
isMap('-42'); // false
isMap('-3e8'); // false
isMap('-1000n'); // false

// Symbols
isMap(Symbol()); // false
isMap(Symbol('name')); // false

// This
isMap(this); // false
isMap(globalThis); // false

// TypedArrays
isMap(new Int8Array(2)); // false
isMap(new Int16Array(2)); // false
isMap(new Int32Array(2)); // false
isMap(new Uint8Array(2)); // false
isMap(new Uint16Array(2)); // false
isMap(new Uint32Array(2)); // false
isMap(new Uint8ClampedArray(2)); // false

isMap(new BigInt64Array(2)); // false
isMap(new BigUint64Array(2)); // false

isMap(new Float32Array(2)); // false
isMap(new Float64Array(2)); // false

isMap(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isMap(new WeakMap()); // false
isMap(new WeakSet()); // false
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
npm i @zerodep/is-map
```

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
