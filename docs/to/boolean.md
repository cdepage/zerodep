# toBoolean()

[![version](https://img.shields.io/npm/v/@zerodep/to-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/to-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A utility to reliably convert a value to a boolean. Consideration for common boolean-like words and abbreviations are included. Values that cannot reliably be converted to a boolean will cause a `ZeroDepError` to be thrown.

## Signature

```typescript
declare const toBoolean: (value: Booleanable) => boolean;

type Booleanable = unknown[] | bigint | number | Map<unknown, unknown> | Set<unknown> | string | Record<string, unknown>;
```

## Behaviour

This method **behaves differently** than the native `Boolean()` coercion method for the following cases:

|             | Native Boolean()                                       | @zerodep's toBoolean()                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Arrays**  | always converted to `true`                             | `false` empty arrays<br />`true` non-empty arrays                                                                                                                                                                          |
| **BigInt**  | `true` all values (including zero)                     | `true` positive values<br />`false` zero and negative values                                                                                                                                                               |
| **Dates**   | always converted to `true`                             | throws a ZeroDepError exception (cannot reliably convert to a boolean)                                                                                                                                                     |
| **NaN**     | `false`                                                | throws a ZeroDepError exception                                                                                                                                                                                            |
| **Numbers** | `true` all non-zero numbers <br />`false` zero         | `true` all positive values<br /> `false` zero and all negative values                                                                                                                                                      |
| **Maps**    | `true` even empty Maps                                 | `false` empty Maps<br />`true` Maps with one or more entries                                                                                                                                                               |
| **Sets**    | `true` even empty Sets                                 | `false` empty Sets<br />`true` Sets with one or more items                                                                                                                                                                 |
| **POJOs**   | `true` even empty Sets                                 | `false` empty POJOs<br />`true` POJOs with one or more items                                                                                                                                                               |
| **Strings** | `true` all non-empty strings<br />`false` empty string | `true` non-empty strings (except specific words/letters, see below)<br /> `false` empty strings and specific words/letters (see below)<br /> `true/false` any Number or BigInt as a string will convert as per rules above |
| **Other**   | `true` all JavaScript objects <sup>1</sup>             | throws a ZeroDepError exception (cannot reliably convert to a boolean)                                                                                                                                                     |

<sup>1</sup> JavaScript objects include Classes, Errors, functions, generators, Promises, Symbols, TypedArrays, WeakMaps, WeakSets, etc

### Function Parameters

The `toBoolean` function has the following parameters:

- **value** - the value to convert to a boolean

## Examples

```javascript
// ESM
import { toBoolean } from '@zerodep/app';

// CJS
const { toBoolean } = require('@zerodep/app');
```

```javascript
// Arrays
toBoolean([]); // false
toBoolean([1, 2, 3]); // true
toBoolean(['a', 'b', 'c']); // true

// BigInts
toBoolean(42n); // true
toBoolean(1n); // true
toBoolean(0n); // false
toBoolean(-0n); // false
toBoolean(-42n); // false

// Booleans
toBoolean(true); // true
toBoolean(false); // false

// Class
toBoolean(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Cannot reliably convert to boolean

// Dates
toBoolean(new Date()); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Date('2099-12-31')); // throws ZeroDepError: Cannot reliably convert to boolean

// Empty
toBoolean(null); // false
toBoolean(undefined); // false

// Errors
toBoolean(new Error('message')); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Cannot reliably convert to boolean

// Floats
toBoolean(3.14); // true
toBoolean(0.0); // false
toBoolean(-0.0); // false
toBoolean(-3.14); // false
toBoolean(Math.E); // true
toBoolean(Math.PI); // true
toBoolean(Number.MIN_VALUE); // false

// Functions
toBoolean(() => 'function'); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(async () => 'function'); // throws ZeroDepError: Cannot reliably convert to boolean

// Generators
toBoolean(function* () {
  yield 'a';
}); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(async function* () {
  yield 'a';
}); // throws ZeroDepError: Cannot reliably convert to boolean

// Maps
toBoolean(new Map()); // false
toBoolean(new Map([['key1', 123]])); // true
toBoolean(new Map([['key1', 'value1']])); // true

// Numbers
toBoolean(Number.POSITIVE_INFINITY); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(Number.MAX_SAFE_INTEGER); // true
toBoolean(Number.MAX_VALUE); // true
toBoolean(3e8); // true
toBoolean(42); // true
toBoolean(1); // true
toBoolean(0); // false
toBoolean(-0); // false
toBoolean(-1); // false
toBoolean(-42); // false
toBoolean(-3e8); // false
toBoolean(Number.MIN_SAFE_INTEGER); // false
toBoolean(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(Number.NaN); // throws ZeroDepError: Cannot reliably convert to boolean

// POJOs
toBoolean({}); // false
toBoolean({ key: 'string' }); // true
toBoolean({ key: 123 }); // true

// Promise
toBoolean(new Promise(() => {})); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Promise.all([])); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Promise.allSettled([])); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Promise.race([])); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(Promise.resolve()); // throws ZeroDepError: Cannot reliably convert to boolean

// Regular Expression
toBoolean(/[regex]+/gi); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new RegExp('d', 'gi')); // throws ZeroDepError: Cannot reliably convert to boolean

// Sets
toBoolean(new Set()); // false
toBoolean(new Set([1, 2, 3])); // true
toBoolean(new Set(['a', 'b', 'c'])); // true

// Boolean-like Strings (case insensitive, includes English, Spanish & French terms)
toBoolean('true'); // true
toBoolean('t'); // true
toBoolean('yes'); // true
toBoolean('y'); // true
toBoolean('cierto'); // true
toBoolean('c'); // true
toBoolean('verdadero'); // true
toBoolean('vrais'); // true
toBoolean('v'); // true
toBoolean('si'); // true
toBoolean('sí'); // true
toBoolean('s'); // true
toBoolean('oui'); // true
toBoolean('ouais'); // true
toBoolean('o'); // true <-- letter "o"

toBoolean('false'); // false
toBoolean('falso'); // false
toBoolean('faux'); // false
toBoolean('f'); // false
toBoolean('no'); // false
toBoolean('non'); // false
toBoolean('n'); // false
toBoolean(''); // false

// Boolean-like Numbers as Strings are treated as numbers
toBoolean('1'); // true
toBoolean('0'); // false <-- number "0"
toBoolean('-0'); // false <-- number "0"
toBoolean('171.3'); // true
toBoolean('3e8'); // true
toBoolean('8,675,309'); // true
toBoolean('8.675.309,123'); // true
toBoolean('-171.3'); // false
toBoolean('-3e8'); // false
toBoolean('-8,675,309'); // false
toBoolean('-8.675.309,123'); // false

// String that isn't a number or BigInt or one of the keywords/letters above
toBoolean('string of any length'); // true

// Symbols
toBoolean(Symbol()); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(Symbol('name')); // throws ZeroDepError: Cannot reliably convert to boolean

// This
toBoolean(this); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(globalThis); // throws ZeroDepError: Cannot reliably convert to boolean

// TypedArrays
toBoolean(new Int8Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Int16Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Int32Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Uint8Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Uint16Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Uint32Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Uint8ClampedArray(2)); // throws ZeroDepError: Cannot reliably convert to boolean

toBoolean(new BigInt64Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new BigUint64Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean

toBoolean(new Float32Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new Float64Array(2)); // throws ZeroDepError: Cannot reliably convert to boolean

toBoolean(new SharedArrayBuffer(512)); // throws ZeroDepError: Cannot reliably convert to boolean

// WeakMap and WeakSet
toBoolean(new WeakMap()); // throws ZeroDepError: Cannot reliably convert to boolean
toBoolean(new WeakSet()); // throws ZeroDepError: Cannot reliably convert to boolean
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "to" functions
npm i @zerodep/to

# only this @zerodep package
npm i @zerodep/to-boolean
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Added**

- added the `@zerodep/to-boolean` package
