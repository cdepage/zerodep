# @zerodep/is-regexp

[![version](https://img.shields.io/npm/v/@zerodep/is-regexp?color=blue)](https://www.npmjs.com/package/@zerodep/is-regexp)
![language](https://img.shields.io/badge/typescript-100%25-blue)
![types](https://img.shields.io/badge/types-included-blue)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)
![coverage](https://img.shields.io/badge/coverage-100%25-42b983)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A performant utility to determine if a value is a regular expression (Regexp) and assign a `RegExp` Typescript type to the value.

## Signature

```typescript
declare const isRegExp: (value: unknown) => boolean;
// value will be of type RegExp
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isRegExp } from '@zerodep/is-regexp';

// CJS
const { isRegExp } = require('@zerodep/is-regexp');
```

```javascript
// Arrays
isRegExp([]); // false
isRegExp([1, 2, 3]); // false
isRegExp(['a', 'b', 'c']); // false

// BigInts
isRegExp(42n); // false
isRegExp(0n); // false
isRegExp(-0n); // false
isRegExp(-42n); // false

// Booleans
isRegExp(true); // false
isRegExp(false); // false

// Class
isRegExp(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isRegExp(new Date()); // false
isRegExp(new Date('1970-01-01T12:00:00.000Z')); // false
isRegExp(new Date('2099-12-31')); // false

// Empty
isRegExp(null); // false
isRegExp(undefined); // false

// Errors
isRegExp(new Error('message')); // false

// Floats
isRegExp(3.14); // false
isRegExp(0.0); // false
isRegExp(-0.0); // false
isRegExp(-3.14); // false
isRegExp(Math.E); // false
isRegExp(Math.PI); // false
isRegExp(Number.MIN_VALUE); // false

// Functions
isRegExp(() => 'function'); // false
isRegExp(async () => 'function'); // false

// Generators
const gen1 = (function* simpleGenerator() {
  yield 1;
})();
const gen2 = (async function* asyncGenerator() {
  yield 1;
})();
isRegExp(gen1); // false
isRegExp(gen2); // false

// Maps
isRegExp(new Map()); // false
isRegExp(new Map([['key1', 123]])); // false
isRegExp(new Map([['key1', 'value1']])); // false

// Numbers
isRegExp(Number.POSITIVE_INFINITY); // false
isRegExp(Number.MAX_SAFE_INTEGER); // false
isRegExp(3e8); // false
isRegExp(42); // false
isRegExp(1); // false
isRegExp(0); // false
isRegExp(-0); // false
isRegExp(-1); // false
isRegExp(-42); // false
isRegExp(-3e8); // false
isRegExp(Number.MIN_SAFE_INTEGER); // false
isRegExp(Number.NEGATIVE_INFINITY); // false
isRegExp(Number.NaN); // false

// POJOs
isRegExp({}); // false
isRegExp({ key: 'string' }); // false
isRegExp({ key: 123 }); // false

// Promise
isRegExp(new Promise(() => 1)); // false
isRegExp(Promise.resolve()); // false

// Regular Expression
isRegExp(/[regx]+/gi); // true
isRegExp(new RegExp('d', 'gi')); // true

// Sets
isRegExp(new Set()); // false
isRegExp(new Set([1, 2, 3])); // false
isRegExp(new Set(['a', 'b', 'c'])); // false

// Strings
isRegExp(''); // false
isRegExp('a longer string'); // false
isRegExp('1000n'); // false
isRegExp('3e8'); // false
isRegExp('42'); // false
isRegExp('3.14'); // false
isRegExp('0'); // false
isRegExp('-0'); // false
isRegExp('-3.14'); // false
isRegExp('-42'); // false
isRegExp('-3e8'); // false
isRegExp('-1000n'); // false

// Symbols
isRegExp(Symbol()); // false
isRegExp(Symbol('name')); // false

// This
isRegExp(this); // false
isRegExp(globalThis); // false

// TypedArrays
isRegExp(new Int8Array(2)); // false
isRegExp(new Int16Array(2)); // false
isRegExp(new Int32Array(2)); // false
isRegExp(new Uint8Array(2)); // false
isRegExp(new Uint16Array(2)); // false
isRegExp(new Uint32Array(2)); // false
isRegExp(new Uint8ClampedArray(2)); // false

isRegExp(new BigInt64Array(2)); // false
isRegExp(new BigUint64Array(2)); // false

isRegExp(new Float32Array(2)); // false
isRegExp(new Float64Array(2)); // false

isRegExp(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isRegExp(new WeakMap()); // false
isRegExp(new WeakSet()); // false
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
npm i @zerodep/is-regexp
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
