# @zerodep/is-number

[![version](https://img.shields.io/npm/v/@zerodep/is-number?color=blue)](https://www.npmjs.com/package/@zerodep/is-number)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a finite float or integer and assign a `number` Typescript type to the value.

## Signature

```typescript
declare const isNumber: (value: unknown) => boolean;
// value will be of type number
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isNumber } from '@zerodep/is-number';

// CJS
const { isNumber } = require('@zerodep/is-number');
```

```javascript
// Arrays
isNumber([]); // false
isNumber([1, 2, 3]); // false
isNumber(['a', 'b', 'c']); // false

// BigInts
isNumber(42n); // false
isNumber(0n); // false
isNumber(-0n); // false
isNumber(-42n); // false

// Booleans
isNumber(true); // false
isNumber(false); // false

// Class
isNumber(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isNumber(new Date()); // false
isNumber(new Date('1970-01-01T12:00:00.000Z')); // false
isNumber(new Date('2099-12-31')); // false

// Empty
isNumber(null); // false
isNumber(undefined); // false

// Errors
isNumber(new Error('message')); // false

// Floats
isNumber(3.14); // true
isNumber(0.0); // true
isNumber(-0.0); // true
isNumber(-3.14); // true
isNumber(Math.E); // true
isNumber(Math.PI); // true
isNumber(Number.MIN_VALUE); // true

// Functions
isNumber(() => 'function'); // false
isNumber(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
expect(isNumber(gen1)).toBeFalsy();
expect(isNumber(gen2)).toBeFalsy();

// Maps
isNumber(new Map()); // false
isNumber(new Map([['key1', 123]])); // false
isNumber(new Map([['key1', 'value1']])); // false

// Numbers
isNumber(Number.POSITIVE_INFINITY); // false  <-- CAUTION: infinite numbers are excluded
isNumber(Number.MAX_SAFE_INTEGER); // true
isNumber(3e8); // true
isNumber(42); // true
isNumber(1); // true
isNumber(0); // true
isNumber(-0); // true
isNumber(-1); // true
isNumber(-42); // true
isNumber(-3e8); // true
isNumber(Number.MIN_SAFE_INTEGER); // true
isNumber(Number.NEGATIVE_INFINITY); // false  <-- CAUTION: infinite numbers are excluded
isNumber(Number.NaN); // false

// POJOs
isNumber({}); // false
isNumber({ key: 'string' }); // false
isNumber({ key: 123 }); // false

// Promise
isNumber(new Promise(() => 1)); // false
isNumber(Promise.resolve()); // false

// Regular Expression
isNumber(/[regx]+/gi); // false
isNumber(new RegExp('d', 'gi')); // false

// Sets
isNumber(new Set()); // false
isNumber(new Set([1, 2, 3])); // false
isNumber(new Set(['a', 'b', 'c'])); // false

// Strings
isNumber(''); // false
isNumber('a longer string'); // false
isNumber('1000n'); // false
isNumber('3e8'); // false
isNumber('42'); // false
isNumber('3.14'); // false
isNumber('0'); // false
isNumber('-0'); // false
isNumber('-3.14'); // false
isNumber('-42'); // false
isNumber('-3e8'); // false
isNumber('-1000n'); // false

// Symbols
isNumber(Symbol()); // false
isNumber(Symbol('name')); // false

// This
isNumber(this); // false
isNumber(globalThis); // false

// TypedArrays
isNumber(new Int8Array(2)); // false
isNumber(new Int16Array(2)); // false
isNumber(new Int32Array(2)); // false
isNumber(new Uint8Array(2)); // false
isNumber(new Uint16Array(2)); // false
isNumber(new Uint32Array(2)); // false
isNumber(new Uint8ClampedArray(2)); // false

isNumber(new BigInt64Array(2)); // false
isNumber(new BigUint64Array(2)); // false

isNumber(new Float32Array(2)); // false
isNumber(new Float64Array(2)); // false

isNumber(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isNumber(new WeakMap()); // false
isNumber(new WeakSet()); // false
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
npm i @zerodep/is-number
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
