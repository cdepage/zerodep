# isBigInt()

[![version](https://img.shields.io/npm/v/@zerodep/is-bigint?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-bigint)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a BigInt.

## Signature

```typescript
declare const isBigInt: (value: unknown) => boolean;
```

### Function Parameters

The `isBigInt` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isBigInt } from '@zerodep/app';

// CJS
const { isBigInt } = require('@zerodep/app');
```

```javascript
// Arrays
isBigInt([]); // false
isBigInt([1, 2, 3]); // false
isBigInt(['a', 'b', 'c']); // false

// BigInts
isBigInt(42n); // true
isBigInt(0n); // true
isBigInt(-0n); // true
isBigInt(-42n); // true

// Booleans
isBigInt(true); // false
isBigInt(false); // false

// Class
isBigInt(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isBigInt(new Date()); // false
isBigInt(new Date('1970-01-01T12:00:00.000Z')); // true
isBigInt(new Date('2099-12-31')); // true

// Empty
isBigInt(null); // false
isBigInt(undefined); // false

// Errors
isBigInt(new Error('message')); // false
isBigInt(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isBigInt(3.14); // false
isBigInt(0.0); // false
isBigInt(-0.0); // false
isBigInt(-3.14); // false
isBigInt(Math.E); // false
isBigInt(Math.PI); // false
isBigInt(Number.MIN_VALUE); // false

// Functions
isBigInt(() => 'function'); // false
isBigInt(async () => 'function'); // false

// Generators
isBigInt(function* () {
  yield 'a';
}); // false
isBigInt(async function* () {
  yield 'a';
}); // false

// Maps
isBigInt(new Map()); // false
isBigInt(new Map([['key1', 123]])); // false
isBigInt(new Map([['key1', 'value1']])); // false

// Numbers
isBigInt(Number.POSITIVE_INFINITY); // false
isBigInt(Number.MAX_SAFE_INTEGER); // false
isBigInt(Number.MAX_VALUE); // false
isBigInt(3e8); // false
isBigInt(42); // false
isBigInt(1); // false
isBigInt(0); // false
isBigInt(-0); // false
isBigInt(-1); // false
isBigInt(-42); // false
isBigInt(-3e8); // false
isBigInt(Number.MIN_SAFE_INTEGER); // false
isBigInt(Number.NEGATIVE_INFINITY); // false
isBigInt(Number.NaN); // false

// POJOs
isBigInt({}); // false
isBigInt({ key: 'string' }); // false
isBigInt({ key: 123 }); // false

// Promise
isBigInt(new Promise(() => {})); // false
isBigInt(new Promise.all([])); // false
isBigInt(new Promise.allSettled([])); // false
isBigInt(new Promise.race([])); // false
isBigInt(Promise.resolve()); // false

// Regular Expression
isBigInt(/[regex]+/gi); // false
isBigInt(new RegExp('d', 'gi')); // false

// Sets
isBigInt(new Set()); // false
isBigInt(new Set([1, 2, 3])); // false
isBigInt(new Set(['a', 'b', 'c'])); // false

// Strings
isBigInt(''); // false
isBigInt('a longer string'); // false
isBigInt('1000n'); // false
isBigInt('3e8'); // false
isBigInt('42'); // false
isBigInt('3.14'); // false
isBigInt('0'); // false
isBigInt('-0'); // false
isBigInt('-3.14'); // false
isBigInt('-42'); // false
isBigInt('-3e8'); // false
isBigInt('-1000n'); // false

// Symbols
isBigInt(Symbol()); // false
isBigInt(Symbol('name')); // false

// This
isBigInt(this); // false
isBigInt(globalThis); // false

// TypedArrays
isBigInt(new Int8Array(2)); // false
isBigInt(new Int16Array(2)); // false
isBigInt(new Int32Array(2)); // false
isBigInt(new Uint8Array(2)); // false
isBigInt(new Uint16Array(2)); // false
isBigInt(new Uint32Array(2)); // false
isBigInt(new Uint8ClampedArray(2)); // false

isBigInt(new BigInt64Array(2)); // false
isBigInt(new BigUint64Array(2)); // false

isBigInt(new Float32Array(2)); // false
isBigInt(new Float64Array(2)); // false

isBigInt(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isBigInt(new WeakMap()); // false
isBigInt(new WeakSet()); // false
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
npm i @zerodep/is-bigint
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.bigint` package to `@zerodep/is-bigint` for consistency across @zerodep ecosystem
