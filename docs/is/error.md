# isError()

[![version](https://img.shields.io/npm/v/@zerodep/is-error?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-error)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to determine if a value is an Error or specific instance/subclass of an Error type.

## Signature

```typescript
declare const isError: (value: unknown, errorType?: unknown) => boolean;
```

### Function Parameters

The `isError` function has the following parameters:

- **value** - the value to check
- **errorType** - [optional] error type/instance

## Examples

```javascript
// ESM
import { isError } from '@zerodep/app';

// CJS
const { isError } = require('@zerodep/app');
```

```javascript
// Arrays
isError([]); // false
isError([1, 2, 3]); // false
isError(['a', 'b', 'c']); // false

// BigInts
isError(42n); // false
isError(0n); // false
isError(-0n); // false
isError(-42n); // false

// Booleans
isError(true); // false
isError(false); // false

// Class
isError(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isError(new Date()); // false
isError(new Date('1970-01-01T12:00:00.000Z')); // false
isError(new Date('2099-12-31')); // false

// Empty
isError(null); // false
isError(undefined); // false

// Errors
isError(new Error('message')); // true
isError(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // true

// Floats
isError(3.14); // false
isError(0.0); // false
isError(-0.0); // false
isError(-3.14); // false
isError(Math.E); // false
isError(Math.PI); // false
isError(Number.MIN_VALUE); // false

// Functions
isError(() => 'function'); // false
isError(async () => 'function'); // false

// Generators
isError(function* () {
  yield 'a';
}); // false
isError(async function* () {
  yield 'a';
}); // false

// Maps
isError(new Map()); // false
isError(new Map([['key1', 123]])); // false
isError(new Map([['key1', 'value1']])); // false

// Numbers
isError(Number.POSITIVE_INFINITY); // false
isError(Number.MAX_SAFE_INTEGER); // false
isError(Number.MAX_VALUE); // false
isError(3e8); // false
isError(42); // false
isError(1); // false
isError(0); // false
isError(-0); // false
isError(-1); // false
isError(-42); // false
isError(-3e8); // false
isError(Number.MIN_SAFE_INTEGER); // false
isError(Number.NEGATIVE_INFINITY); // false
isError(Number.NaN); // false

// POJOs
isError({}); // false
isError({ key: 'string' }); // false
isError({ key: 123 }); // false

// Promise
isError(new Promise(() => {})); // false
isError(new Promise.all([])); // false
isError(new Promise.allSettled([])); // false
isError(new Promise.race([])); // false
isError(Promise.resolve()); // false

// Regular Expression
isError(/[regex]+/gi); // false
isError(new RegExp('d', 'gi')); // false

// Sets
isError(new Set()); // false
isError(new Set([1, 2, 3])); // false
isError(new Set(['a', 'b', 'c'])); // false

// Strings
isError(''); // false
isError('a longer string'); // false
isError('1000n'); // false
isError('3e8'); // false
isError('42'); // false
isError('3.14'); // false
isError('0'); // false
isError('-0'); // false
isError('-3.14'); // false
isError('-42'); // false
isError('-3e8'); // false
isError('-1000n'); // false

// Symbols
isError(Symbol()); // false
isError(Symbol('name')); // false

// This
isError(this); // false
isError(globalThis); // false

// TypedArrays
isError(new Int8Array(2)); // false
isError(new Int16Array(2)); // false
isError(new Int32Array(2)); // false
isError(new Uint8Array(2)); // false
isError(new Uint16Array(2)); // false
isError(new Uint32Array(2)); // false
isError(new Uint8ClampedArray(2)); // false

isError(new BigInt64Array(2)); // false
isError(new BigUint64Array(2)); // false

isError(new Float32Array(2)); // false
isError(new Float64Array(2)); // false

isError(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isError(new WeakMap()); // false
isError(new WeakSet()); // false
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
npm i @zerodep/is-error
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.1.x

**Changed**

- added an optional error subclass/type check
- added a check to ensure the error's `message` property is a string (if it exists)

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.error` package to `@zerodep/is-error` for consistency across @zerodep ecosystem
