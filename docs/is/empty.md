# isEmpty()

[![version](https://img.shields.io/npm/v/@zerodep/is-empty?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-empty)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null`, `undefined` or an empty array, string, object, Map, Set, WeakMap or WeakSet.

## Signature

```typescript
declare const isEmpty: (value: unknown) => boolean;
```

### Function Parameters

The `isEmpty` function has the following parameters:

- **value** - the value to check

## Examples

```javascript
// ESM
import { isEmpty } from '@zerodep/app';

// CJS
const { isEmpty } = require('@zerodep/app');
```

````javascript
// Arrays
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
isEmpty(['a', 'b', 'c']); // false

// BigInts
isEmpty(42n); // false
isEmpty(0n); // false
isEmpty(-0n); // false
isEmpty(-42n); // false

// Booleans
isEmpty(true); // false
isEmpty(false); // false

// Class
isEmpty(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isEmpty(new Date()); // false
isEmpty(new Date('1970-01-01T12:00:00.000Z')); // false
isEmpty(new Date('2099-12-31')); // false

// Empty
isEmpty(null); // true
isEmpty(undefined); // true

// Errors
isEmpty(new Error('message')); // false
isEmpty(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isEmpty(3.14); // false
isEmpty(0.0); // false
isEmpty(-0.0); // false
isEmpty(-3.14); // false
isEmpty(Math.E); // false
isEmpty(Math.PI); // false
isEmpty(Number.MIN_VALUE); // false

// Functions
isEmpty(() => 'function'); // false
isEmpty(async () => 'function'); // false

// Generators
isEmpty(function* () {
  yield 'a';
}); // false
isEmpty(async function* () {
  yield 'a';
}); // false

// Maps
isEmpty(new Map()); // true
isEmpty(new Map([['key1', 123]])); // false
isEmpty(new Map([['key1', 'value1']])); // false

// Numbers
isEmpty(Number.POSITIVE_INFINITY); // false
isEmpty(Number.MAX_SAFE_INTEGER); // false
isEmpty(Number.MAX_VALUE); // false
isEmpty(3e8); // false
isEmpty(42); // false
isEmpty(1); // false
isEmpty(0); // false
isEmpty(-0); // false
isEmpty(-1); // false
isEmpty(-42); // false
isEmpty(-3e8); // false
isEmpty(Number.MIN_SAFE_INTEGER); // false
isEmpty(Number.NEGATIVE_INFINITY); // false
isEmpty(Number.NaN); // false

// POJOs
isEmpty({}); // true
isEmpty({ key: 'string' }); // false
isEmpty({ key: 123 }); // false

// Promise
isEmpty(new Promise(() => {})); // false
isEmpty(new Promise.all([])); // false
isEmpty(new Promise.allSettled([])); // false
isEmpty(new Promise.race([])); // false
isEmpty(Promise.resolve()); // false

// Regular Expression
isEmpty(/[regex]+/gi); // false
isEmpty(new RegExp('d', 'gi')); // false

// Sets
isEmpty(new Set()); // true
isEmpty(new Set([1, 2, 3])); // false
isEmpty(new Set(['a', 'b', 'c'])); // false

// Strings
isEmpty(''); // true
isEmpty('a longer string'); // false
isEmpty('1000n'); // false
isEmpty('3e8'); // false
isEmpty('42'); // false
isEmpty('3.14'); // false
isEmpty('0'); // false
isEmpty('-0'); // false
isEmpty('-3.14'); // false
isEmpty('-42'); // false
isEmpty('-3e8'); // false
isEmpty('-1000n'); // false

// Symbols
isEmpty(Symbol()); // false
isEmpty(Symbol('name')); // false

// This
isEmpty(this); // false
isEmpty(globalThis); // false

// TypedArrays
isEmpty(new Int8Array(2)); // false
isEmpty(new Int16Array(2)); // false
isEmpty(new Int32Array(2)); // false
isEmpty(new Uint8Array(2)); // false
isEmpty(new Uint16Array(2)); // false
isEmpty(new Uint32Array(2)); // false
isEmpty(new Uint8ClampedArray(2)); // false

isEmpty(new BigInt64Array(2)); // false
isEmpty(new BigUint64Array(2)); // false

isEmpty(new Float32Array(2)); // false
isEmpty(new Float64Array(2)); // false

isEmpty(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isEmpty(new WeakMap()); // false
isEmpty(new WeakSet()); // false
``
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
npm i @zerodep/is-empty
````

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/is.empty` package to `@zerodep/is-empty` for consistency across @zerodep ecosystem
