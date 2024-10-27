# isSymbol()

[![version](https://img.shields.io/npm/v/@zerodep/is-symbol?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-symbol)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Symbol.

## Signature

```typescript
declare const isSymbol: (value: unknown) => boolean;
```

### Function Parameters

The `isSymbol` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isSymbol } from '@zerodep/app';

// CJS
const { isSymbol } = require('@zerodep/app');
```

```javascript
// Arrays
isSymbol([]); // false
isSymbol([1, 2, 3]); // false
isSymbol(['a', 'b', 'c']); // false

// BigInts
isSymbol(42n); // false
isSymbol(0n); // false
isSymbol(-0n); // false
isSymbol(-42n); // false

// Booleans
isSymbol(true); // false
isSymbol(false); // false

// Class
isSymbol(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isSymbol(new Date()); // false
isSymbol(new Date('1970-01-01T12:00:00.000Z')); // false
isSymbol(new Date('2099-12-31')); // false

// Empty
isSymbol(null); // false
isSymbol(undefined); // false

// Errors
isSymbol(new Error('message')); // false
isSymbol(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isSymbol(3.14); // false
isSymbol(0.0); // false
isSymbol(-0.0); // false
isSymbol(-3.14); // false
isSymbol(Math.E); // false
isSymbol(Math.PI); // false
isSymbol(Number.MIN_VALUE); // false

// Functions
isSymbol(() => 'function'); // false
isSymbol(async () => 'function'); // false

// Generators
isSymbol(function* () {
  yield 'a';
}); // false
isSymbol(async function* () {
  yield 'a';
}); // false

// Maps
isSymbol(new Map()); // false
isSymbol(new Map([['key1', 123]])); // false
isSymbol(new Map([['key1', 'value1']])); // false

// Numbers
isSymbol(Number.POSITIVE_INFINITY); // false
isSymbol(Number.MAX_SAFE_INTEGER); // false
isSymbol(3e8); // false
isSymbol(42); // false
isSymbol(1); // false
isSymbol(0); // false
isSymbol(-0); // false
isSymbol(-1); // false
isSymbol(-42); // false
isSymbol(-3e8); // false
isSymbol(Number.MIN_SAFE_INTEGER); // false
isSymbol(Number.NEGATIVE_INFINITY); // false
isSymbol(Number.NaN); // false

// POJOs
isSymbol({}); // false
isSymbol({ key: 'string' }); // false
isSymbol({ key: 123 }); // false

// Promise
isSymbol(new Promise(() => {})); // false
isSymbol(new Promise.all([])); // false
isSymbol(new Promise.allSettled([])); // false
isSymbol(new Promise.race([])); // false
isSymbol(Promise.resolve()); // false

// Regular Expression
isSymbol(/[regex]+/gi); // false
isSymbol(new RegExp('d', 'gi')); // false

// Sets
isSymbol(new Set()); // false
isSymbol(new Set([1, 2, 3])); // false
isSymbol(new Set(['a', 'b', 'c'])); // false

// Strings
isSymbol(''); // false
isSymbol('a longer string'); // false
isSymbol('1000n'); // false
isSymbol('3e8'); // false
isSymbol('42'); // false
isSymbol('3.14'); // false
isSymbol('0'); // false
isSymbol('-0'); // false
isSymbol('-3.14'); // false
isSymbol('-42'); // false
isSymbol('-3e8'); // false
isSymbol('-1000n'); // false

// Symbols
isSymbol(Symbol()); // true
isSymbol(Symbol('name')); // true

// This
isSymbol(this); // false
isSymbol(globalThis); // false

// TypedArrays
isSymbol(new Int8Array(2)); // false
isSymbol(new Int16Array(2)); // false
isSymbol(new Int32Array(2)); // false
isSymbol(new Uint8Array(2)); // false
isSymbol(new Uint16Array(2)); // false
isSymbol(new Uint32Array(2)); // false
isSymbol(new Uint8ClampedArray(2)); // false

isSymbol(new BigInt64Array(2)); // false
isSymbol(new BigUint64Array(2)); // false

isSymbol(new Float32Array(2)); // false
isSymbol(new Float64Array(2)); // false

isSymbol(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isSymbol(new WeakMap()); // false
isSymbol(new WeakSet()); // false
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
npm i @zerodep/is-symbol
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.symbol` package to `@zerodep/is-symbol` for consistency across @zerodep ecosystem
