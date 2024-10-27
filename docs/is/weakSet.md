# isWeakSet()

[![version](https://img.shields.io/npm/v/@zerodep/is-weakset?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-weakset)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Weak Set.

## Signature

```typescript
declare const isWeakSet: (value: unknown) => boolean;
```

### Function Parameters

The `isWeakSet` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
import { isWeakSet } from '@zerodep/app';
// or
const { isWeakSet } = require('@zerodep/app');
```

```javascript
// Arrays
isWeakmap([]); // false
isWeakmap([1, 2, 3]); // false
isWeakmap(['a', 'b', 'c']); // false

// BigInts
isWeakmap(42n); // false
isWeakmap(0n); // false
isWeakmap(-0n); // false
isWeakmap(-42n); // false

// Booleans
isWeakmap(true); // false
isWeakmap(false); // false

// Class
isWeakmap(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isWeakmap(new Date()); // false
isWeakmap(new Date('1970-01-01T12:00:00.000Z')); // false
isWeakmap(new Date('2099-12-31')); // false

// Empty
isWeakmap(null); // false
isWeakmap(undefined); // false

// Errors
isWeakmap(new Error('message')); // false
isWeakmap(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isWeakmap(3.14); // false
isWeakmap(0.0); // false
isWeakmap(-0.0); // false
isWeakmap(-3.14); // false
isWeakmap(Math.E); // false
isWeakmap(Math.PI); // false
isWeakmap(Number.MIN_VALUE); // false

// Functions
isWeakmap(() => 'function'); // false
isWeakmap(async () => 'function'); // false

// Generators
isWeakmap(function* () {
  yield 'a';
}); // false
isWeakmap(async function* () {
  yield 'a';
}); // false

// Maps
isWeakmap(new Map()); // false
isWeakmap(new Map([['key1', 123]])); // false
isWeakmap(new Map([['key1', 'value1']])); // false

// Numbers
isWeakmap(Number.POSITIVE_INFINITY); // false
isWeakmap(Number.MAX_SAFE_INTEGER); // false
isWeakmap(3e8); // false
isWeakmap(42); // false
isWeakmap(1); // false
isWeakmap(0); // false
isWeakmap(-0); // false
isWeakmap(-1); // false
isWeakmap(-42); // false
isWeakmap(-3e8); // false
isWeakmap(Number.MIN_SAFE_INTEGER); // false
isWeakmap(Number.NEGATIVE_INFINITY); // false
isWeakmap(Number.NaN); // false

// POJOs
isWeakmap({}); // false
isWeakmap({ key: 'string' }); // false
isWeakmap({ key: 123 }); // false

// Promise
isWeakmap(new Promise(() => {})); // false
isWeakmap(new Promise.all([])); // false
isWeakmap(new Promise.allSettled([])); // false
isWeakmap(new Promise.race([])); // false
isWeakmap(Promise.resolve()); // false

// Regular Expression
isWeakmap(/[regex]+/gi); // false
isWeakmap(new RegExp('d', 'gi')); // false

// Sets
isWeakmap(new Set()); // false
isWeakmap(new Set([1, 2, 3])); // false
isWeakmap(new Set(['a', 'b', 'c'])); // false

// Strings
isWeakmap(''); // false
isWeakmap('a longer string'); // false
isWeakmap('1000n'); // false
isWeakmap('3e8'); // false
isWeakmap('42'); // false
isWeakmap('3.14'); // false
isWeakmap('0'); // false
isWeakmap('-0'); // false
isWeakmap('-3.14'); // false
isWeakmap('-42'); // false
isWeakmap('-3e8'); // false
isWeakmap('-1000n'); // false

// Symbols
isWeakmap(Symbol()); // false
isWeakmap(Symbol('name')); // false

// This
isWeakmap(this); // false
isWeakmap(globalThis); // false

// TypedArrays
isWeakmap(new Int8Array(2)); // false
isWeakmap(new Int16Array(2)); // false
isWeakmap(new Int32Array(2)); // false
isWeakmap(new Uint8Array(2)); // false
isWeakmap(new Uint16Array(2)); // false
isWeakmap(new Uint32Array(2)); // false
isWeakmap(new Uint8ClampedArray(2)); // false

isWeakmap(new BigInt64Array(2)); // false
isWeakmap(new BigUint64Array(2)); // false

isWeakmap(new Float32Array(2)); // false
isWeakmap(new Float64Array(2)); // false

isWeakmap(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isWeakmap(new WeakMap()); // false
isWeakmap(new WeakSet()); // true
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
npm i @zerodep/is-weakset
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.weakset` package to `@zerodep/is-weakset` for consistency across @zerodep ecosystem
