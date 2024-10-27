# isDate()

[![version](https://img.shields.io/npm/v/@zerodep/is-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-date)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Date object.

## Signature

```typescript
declare const isDate: (value: unknown) => boolean;
```

### Function Parameters

The `isDate` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isDate } from '@zerodep/app';

// CJS
const { isDate } = require('@zerodep/app');
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
  }
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
isDate(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

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
isDate(function* () {
  yield 'a';
}); // false
isDate(async function* () {
  yield 'a';
}); // false

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
isDate(new Promise(() => {})); // false
isDate(new Promise.all([])); // false
isDate(new Promise.allSettled([])); // false
isDate(new Promise.race([])); // false
isDate(Promise.resolve()); // false

// Regular Expression
isDate(/[regex]+/gi); // false
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
npm i @zerodep/is-date
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.date` package to `@zerodep/is-date` for consistency across @zerodep ecosystem
