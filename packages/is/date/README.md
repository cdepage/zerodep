# @zerodep/is-date

[![version](https://img.shields.io/npm/v/@zerodep/is-date?color=blue)](https://www.npmjs.com/package/@zerodep/is-date)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Date and assign a `Date` Typescript type to the value.

## Signature

```typescript
declare const isDate: (value: unknown) => boolean;
// value will be of type Date
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isDate } from '@zerodep/is-date';

// CJS
const { isDate } = require('@zerodep/is-date');
```

```javascript
// Arrays
isDate([]); // false
isDate([1, 2, 3]); // false
isDate(['a', 'b', 'c']); // false

// BigInts
isDate(42n); // false
isDate(0n); // false
isDate(-0n); // false
isDate(-42n); // false

// Booleans
isDate(true); // false
isDate(false); // false

// Class
isDate(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isDate(new Date()); // true
isDate(new Date('1970-01-01T12:00:00.000Z')); // true
isDate(new Date('2099-12-31')); // true

// Empty
isDate(null); // false
isDate(undefined); // false

// Errors
isDate(new Error('message')); // false

// Floats
isDate(3.14); // false
isDate(0.0); // false
isDate(-0.0); // false
isDate(-3.14); // false
isDate(Math.E); // false
isDate(Math.PI); // false
isDate(Number.MIN_VALUE); // false

// Functions
isDate(() => 'function'); // false
isDate(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isDate(gen1); // false
isDate(gen2); // false

// Maps
isDate(new Map()); // false
isDate(new Map([['key1', 123]])); // false
isDate(new Map([['key1', 'value1']])); // false

// Numbers
isDate(Number.POSITIVE_INFINITY); // false
isDate(Number.MAX_SAFE_INTEGER); // false
isDate(Number.MAX_VALUE); // false
isDate(3e8); // false
isDate(42); // false
isDate(1); // false
isDate(0); // false
isDate(-0); // false
isDate(-1); // false
isDate(-42); // false
isDate(-3e8); // false
isDate(Number.MIN_SAFE_INTEGER); // false
isDate(Number.NEGATIVE_INFINITY); // false
isDate(Number.NaN); // false

// POJOs
isDate({}); // false
isDate({ key: 'string' }); // false
isDate({ key: 123 }); // false

// Promise
isDate(new Promise(() => 1)); // false
isDate(Promise.resolve()); // false

// Regular Expression
isDate(/[regx]+/gi); // false
isDate(new RegExp('d', 'gi')); // false

// Sets
isDate(new Set()); // false
isDate(new Set([1, 2, 3])); // false
isDate(new Set(['a', 'b', 'c'])); // false

// Strings
isDate(''); // false
isDate('a longer string'); // false
isDate('1000n'); // false
isDate('3e8'); // false
isDate('42'); // false
isDate('3.14'); // false
isDate('0'); // false
isDate('-0'); // false
isDate('-3.14'); // false
isDate('-42'); // false
isDate('-3e8'); // false
isDate('-1000n'); // false

// Symbols
isDate(Symbol()); // false
isDate(Symbol('name')); // false

// This
isDate(this); // false
isDate(globalThis); // false

// TypedArrays
isDate(new Int8Array(2)); // false
isDate(new Int16Array(2)); // false
isDate(new Int32Array(2)); // false
isDate(new Uint8Array(2)); // false
isDate(new Uint16Array(2)); // false
isDate(new Uint32Array(2)); // false
isDate(new Uint8ClampedArray(2)); // false

isDate(new BigInt64Array(2)); // false
isDate(new BigUint64Array(2)); // false

isDate(new Float32Array(2)); // false
isDate(new Float64Array(2)); // false

isDate(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isDate(new WeakMap()); // false
isDate(new WeakSet()); // false
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
npm i @zerodep/is-date
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
