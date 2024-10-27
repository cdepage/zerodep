# isNull()

[![version](https://img.shields.io/npm/v/@zerodep/is-null?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-null)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null`.

## Signature

```typescript
declare const isNull: (value: unknown) => boolean;
```

### Function Parameters

The `isNull` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isNull } from '@zerodep/app';

// CJS
const { isNull } = require('@zerodep/app');
```

```javascript
// Arrays
isNull([]); // false
isNull([1, 2, 3]); // false
isNull(['a', 'b', 'c']); // false

// BigInts
isNull(42n); // false
isNull(0n); // false
isNull(-0n); // false
isNull(-42n); // false

// Booleans
isNull(true); // false
isNull(false); // false

// Class
isNull(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isNull(new Date()); // false
isNull(new Date('1970-01-01T12:00:00.000Z')); // false
isNull(new Date('2099-12-31')); // false

// Empty
isNull(null); // true
isNull(undefined); // false

// Errors
isNull(new Error('message')); // false
isNull(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isNull(3.14); // false
isNull(0.0); // false
isNull(-0.0); // false
isNull(-3.14); // false
isNull(Math.E); // false
isNull(Math.PI); // false
isNull(Number.MIN_VALUE); // false

// Functions
isNull(() => 'function'); // false
isNull(async () => 'function'); // false

// Generators
isNull(function* () {
  yield 'a';
}); // false
isNull(async function* () {
  yield 'a';
}); // false

// Maps
isNull(new Map()); // false
isNull(new Map([['key1', 123]])); // false
isNull(new Map([['key1', 'value1']])); // false

// Numbers
isNull(Number.POSITIVE_INFINITY); // false
isNull(Number.MAX_SAFE_INTEGER); // false
isNull(3e8); // false
isNull(42); // false
isNull(1); // false
isNull(0); // false
isNull(-0); // false
isNull(-1); // false
isNull(-42); // false
isNull(-3e8); // false
isNull(Number.MIN_SAFE_INTEGER); // false
isNull(Number.NEGATIVE_INFINITY); // false
isNull(Number.NaN); // false

// POJOs
isNull({}); // false
isNull({ key: 'string' }); // false
isNull({ key: 123 }); // false

// Promise
isNull(new Promise(() => {})); // false
isNull(new Promise.all([])); // false
isNull(new Promise.allSettled([])); // false
isNull(new Promise.race([])); // false
isNull(Promise.resolve()); // false

// Regular Expression
isNull(/[regex]+/gi); // false
isNull(new RegExp('d', 'gi')); // false

// Sets
isNull(new Set()); // false
isNull(new Set([1, 2, 3])); // false
isNull(new Set(['a', 'b', 'c'])); // false

// Strings
isNull(''); // false
isNull('a longer string'); // false
isNull('1000n'); // false
isNull('3e8'); // false
isNull('42'); // false
isNull('3.14'); // false
isNull('0'); // false
isNull('-0'); // false
isNull('-3.14'); // false
isNull('-42'); // false
isNull('-3e8'); // false
isNull('-1000n'); // false

// Symbols
isNull(Symbol()); // false
isNull(Symbol('name')); // false

// This
isNull(this); // false
isNull(globalThis); // false

// TypedArrays
isNull(new Int8Array(2)); // false
isNull(new Int16Array(2)); // false
isNull(new Int32Array(2)); // false
isNull(new Uint8Array(2)); // false
isNull(new Uint16Array(2)); // false
isNull(new Uint32Array(2)); // false
isNull(new Uint8ClampedArray(2)); // false

isNull(new BigInt64Array(2)); // false
isNull(new BigUint64Array(2)); // false

isNull(new Float32Array(2)); // false
isNull(new Float64Array(2)); // false

isNull(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isNull(new WeakMap()); // false
isNull(new WeakSet()); // false
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "is" functions
npm i @zerodep/is

# only this @zerodep package
npm i @zerodep/is-null
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.null` package to `@zerodep/is-null` for consistency across @zerodep ecosystem
