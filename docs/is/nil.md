# isNil()

[![version](https://img.shields.io/npm/v/@zerodep/is-nil?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-nil)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null` or `undefined`.

## Signature

```typescript
declare const isNil: (value: unknown) => boolean;
```

### Function Parameters

The `isNil` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isNil } from '@zerodep/app';

// CJS
const { isNil } = require('@zerodep/app');
```

```javascript
// Arrays
isNil([]); // false
isNil([1, 2, 3]); // false
isNil(['a', 'b', 'c']); // false

// BigInts
isNil(42n); // false
isNil(0n); // false
isNil(-0n); // false
isNil(-42n); // false

// Booleans
isNil(true); // false
isNil(false); // false

// Class
isNil(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isNil(new Date()); // false
isNil(new Date('1970-01-01T12:00:00.000Z')); // false
isNil(new Date('2099-12-31')); // false

// Empty
isNil(null); // true
isNil(undefined); // true

// Errors
isNil(new Error('message')); // false
isNil(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isNil(3.14); // false
isNil(0.0); // false
isNil(-0.0); // false
isNil(-3.14); // false
isNil(Math.E); // false
isNil(Math.PI); // false
isNil(Number.MIN_VALUE); // false

// Functions
isNil(() => 'function'); // false
isNil(async () => 'function'); // false

// Generators
isNil(function* () {
  yield 'a';
}); // false
isNil(async function* () {
  yield 'a';
}); // false

// Maps
isNil(new Map()); // false
isNil(new Map([['key1', 123]])); // false
isNil(new Map([['key1', 'value1']])); // false

// Numbers
isNil(Number.POSITIVE_INFINITY); // false
isNil(Number.MAX_SAFE_INTEGER); // false
isNil(3e8); // false
isNil(42); // false
isNil(1); // false
isNil(0); // false
isNil(-0); // false
isNil(-1); // false
isNil(-42); // false
isNil(-3e8); // false
isNil(Number.MIN_SAFE_INTEGER); // false
isNil(Number.NEGATIVE_INFINITY); // false
isNil(Number.NaN); // false

// POJOs
isNil({}); // false
isNil({ key: 'string' }); // false
isNil({ key: 123 }); // false

// Promise
isNil(new Promise(() => {})); // false
isNil(new Promise.all([])); // false
isNil(new Promise.allSettled([])); // false
isNil(new Promise.race([])); // false
isNil(Promise.resolve()); // false

// Regular Expression
isNil(/[regex]+/gi); // false
isNil(new RegExp('d', 'gi')); // false

// Sets
isNil(new Set()); // false
isNil(new Set([1, 2, 3])); // false
isNil(new Set(['a', 'b', 'c'])); // false

// Strings
isNil(''); // false
isNil('a longer string'); // false
isNil('1000n'); // false
isNil('3e8'); // false
isNil('42'); // false
isNil('3.14'); // false
isNil('0'); // false
isNil('-0'); // false
isNil('-3.14'); // false
isNil('-42'); // false
isNil('-3e8'); // false
isNil('-1000n'); // false

// Symbols
isNil(Symbol()); // false
isNil(Symbol('name')); // false

// This
isNil(this); // false
isNil(globalThis); // false

// TypedArrays
isNil(new Int8Array(2)); // false
isNil(new Int16Array(2)); // false
isNil(new Int32Array(2)); // false
isNil(new Uint8Array(2)); // false
isNil(new Uint16Array(2)); // false
isNil(new Uint32Array(2)); // false
isNil(new Uint8ClampedArray(2)); // false

isNil(new BigInt64Array(2)); // false
isNil(new BigUint64Array(2)); // false

isNil(new Float32Array(2)); // false
isNil(new Float64Array(2)); // false

isNil(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isNil(new WeakMap()); // false
isNil(new WeakSet()); // false
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
npm i @zerodep/is-nil
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.nil` package to `@zerodep/is-nil` for consistency across @zerodep ecosystem
