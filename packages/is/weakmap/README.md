# @zerodep/is-weakmap

[![version](https://img.shields.io/npm/v/@zerodep/is-weakmap?color=blue)](https://www.npmjs.com/package/@zerodep/is-weakmap)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a Weak Map and assign a `WeakMap<K,V>` Typescript type to the value.

## Signature

```typescript
declare const isWeakMap: <K extends object, V>(value: unknown) => boolean;
// value will be of type WeakMap<K, V>
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isWeakMap } from '@zerodep/is-weakmap';

// CJS
const { isWeakMap } = require('@zerodep/is-weakmap');
```

```javascript
// Arrays
isWeakMap([]); // false
isWeakMap([1, 2, 3]); // false
isWeakMap(['a', 'b', 'c']); // false

// BigInts
isWeakMap(42n); // false
isWeakMap(0n); // false
isWeakMap(-0n); // false
isWeakMap(-42n); // false

// Booleans
isWeakMap(true); // false
isWeakMap(false); // false

// Class
isWeakMap(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isWeakMap(new Date()); // false
isWeakMap(new Date('1970-01-01T12:00:00.000Z')); // false
isWeakMap(new Date('2099-12-31')); // false

// Empty
isWeakMap(null); // false
isWeakMap(undefined); // false

// Errors
isWeakMap(new Error('message')); // false

// Floats
isWeakMap(3.14); // false
isWeakMap(0.0); // false
isWeakMap(-0.0); // false
isWeakMap(-3.14); // false
isWeakMap(Math.E); // false
isWeakMap(Math.PI); // false
isWeakMap(Number.MIN_VALUE); // false

// Functions
isWeakMap(() => 'function'); // false
isWeakMap(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isWeakMap(gen1); // false
isWeakMap(gen2); // false

// Maps
isWeakMap(new Map()); // false
isWeakMap(new Map([['key1', 123]])); // false
isWeakMap(new Map([['key1', 'value1']])); // false

// Numbers
isWeakMap(Number.POSITIVE_INFINITY); // false
isWeakMap(Number.MAX_SAFE_INTEGER); // false
isWeakMap(3e8); // false
isWeakMap(42); // false
isWeakMap(1); // false
isWeakMap(0); // false
isWeakMap(-0); // false
isWeakMap(-1); // false
isWeakMap(-42); // false
isWeakMap(-3e8); // false
isWeakMap(Number.MIN_SAFE_INTEGER); // false
isWeakMap(Number.NEGATIVE_INFINITY); // false
isWeakMap(Number.NaN); // false

// POJOs
isWeakMap({}); // false
isWeakMap({ key: 'string' }); // false
isWeakMap({ key: 123 }); // false

// Promise
isWeakMap(new Promise(() => 1)); // false
isWeakMap(Promise.resolve()); // false

// Regular Expression
isWeakMap(/[regx]+/gi); // false
isWeakMap(new RegExp('d', 'gi')); // false

// Sets
isWeakMap(new Set()); // false
isWeakMap(new Set([1, 2, 3])); // false
isWeakMap(new Set(['a', 'b', 'c'])); // false

// Strings
isWeakMap(''); // false
isWeakMap('a longer string'); // false
isWeakMap('1000n'); // false
isWeakMap('3e8'); // false
isWeakMap('42'); // false
isWeakMap('3.14'); // false
isWeakMap('0'); // false
isWeakMap('-0'); // false
isWeakMap('-3.14'); // false
isWeakMap('-42'); // false
isWeakMap('-3e8'); // false
isWeakMap('-1000n'); // false

// Symbols
isWeakMap(Symbol()); // false
isWeakMap(Symbol('name')); // false

// This
isWeakMap(this); // false
isWeakMap(globalThis); // false

// TypedArrays
isWeakMap(new Int8Array(2)); // false
isWeakMap(new Int16Array(2)); // false
isWeakMap(new Int32Array(2)); // false
isWeakMap(new Uint8Array(2)); // false
isWeakMap(new Uint16Array(2)); // false
isWeakMap(new Uint32Array(2)); // false
isWeakMap(new Uint8ClampedArray(2)); // false

isWeakMap(new BigInt64Array(2)); // false
isWeakMap(new BigUint64Array(2)); // false

isWeakMap(new Float32Array(2)); // false
isWeakMap(new Float64Array(2)); // false

isWeakMap(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isWeakMap(new WeakMap()); // true
isWeakMap(new WeakSet()); // false
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
npm i @zerodep/is-weakmap
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
