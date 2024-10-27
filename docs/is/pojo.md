# isPojo()

[![version](https://img.shields.io/npm/v/@zerodep/is-pojo?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-pojo)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Plain Old Javascript Object (POJO) that is serializable.

## Signature

```typescript
declare const isPojo: (value: unknown) => boolean;
```

### Function Parameters

The `isPojo` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isPojo } from '@zerodep/app';

// CJS
const { isPojo } = require('@zerodep/app');
```

```javascript
// Arrays
isPojo([]); // true
isPojo([1, 2, 3]); // true
isPojo(['a', 'b', 'c']); // true

// BigInts
isPojo(42n); // false
isPojo(0n); // false
isPojo(-0n); // false
isPojo(-42n); // false

// Booleans
isPojo(true); // false
isPojo(false); // false

// Class
isPojo(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isPojo(new Date()); // false
isPojo(new Date('1970-01-01T12:00:00.000Z')); // false
isPojo(new Date('2099-12-31')); // false

// Empty
isPojo(null); // false  <-- CAUTION: null values are excluded
isPojo(undefined); // false

// Errors
isPojo(new Error('message')); // false
isPojo(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isPojo(3.14); // false
isPojo(0.0); // false
isPojo(-0.0); // false
isPojo(-3.14); // false
isPojo(Math.E); // false
isPojo(Math.PI); // false
isPojo(Number.MIN_VALUE); // false

// Functions
isPojo(() => 'function'); // false
isPojo(async () => 'function'); // false

// Generators
isPojo(function* () {
  yield 'a';
}); // false
isPojo(async function* () {
  yield 'a';
}); // false

// Maps
isPojo(new Map()); // false
isPojo(new Map([['key1', 123]])); // false
isPojo(new Map([['key1', 'value1']])); // false

// Numbers
isPojo(Number.POSITIVE_INFINITY); // false
isPojo(Number.MAX_SAFE_INTEGER); // false
isPojo(3e8); // false
isPojo(42); // false
isPojo(1); // false
isPojo(0); // false
isPojo(-0); // false
isPojo(-1); // false
isPojo(-42); // false
isPojo(-3e8); // false
isPojo(Number.MIN_SAFE_INTEGER); // false
isPojo(Number.NEGATIVE_INFINITY); // false
isPojo(Number.NaN); // false

// POJOs
isPojo({}); // true
isPojo({ key: 'string' }); // true
isPojo({ key: 123 }); // true

// Promise
isPojo(new Promise(() => {})); // false
isPojo(new Promise.all([])); // false
isPojo(new Promise.allSettled([])); // false
isPojo(new Promise.race([])); // false
isPojo(Promise.resolve()); // false

// Regular Expression
isPojo(/[regex]+/gi); // false
isPojo(new RegExp('d', 'gi')); // false

// Sets
isPojo(new Set()); // false
isPojo(new Set([1, 2, 3])); // false
isPojo(new Set(['a', 'b', 'c'])); // false

// Strings
isPojo(''); // false
isPojo('a longer string'); // false
isPojo('1000n'); // false
isPojo('3e8'); // false
isPojo('42'); // false
isPojo('3.14'); // false
isPojo('0'); // false
isPojo('-0'); // false
isPojo('-3.14'); // false
isPojo('-42'); // false
isPojo('-3e8'); // false
isPojo('-1000n'); // false

// Symbols
isPojo(Symbol()); // false
isPojo(Symbol('name')); // false

// This
isPojo(this); // false
isPojo(globalThis); // false

// TypedArrays
isPojo(new Int8Array(2)); // false
isPojo(new Int16Array(2)); // false
isPojo(new Int32Array(2)); // false
isPojo(new Uint8Array(2)); // false
isPojo(new Uint16Array(2)); // false
isPojo(new Uint32Array(2)); // false
isPojo(new Uint8ClampedArray(2)); // false

isPojo(new BigInt64Array(2)); // false
isPojo(new BigUint64Array(2)); // false

isPojo(new Float32Array(2)); // false
isPojo(new Float64Array(2)); // false

isPojo(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isPojo(new WeakMap()); // false
isPojo(new WeakSet()); // false
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
npm i @zerodep/is-pojo
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release2.0.x

**Breaking**

- renamed the `@zerodep/is.pojo` package to `@zerodep/is-pojo` for consistency across @zerodep ecosystem
