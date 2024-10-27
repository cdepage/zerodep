# guardArray()

[![version](https://img.shields.io/npm/v/@zerodep/guard-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be an array; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max number of items and an optional validator.

## Basic Signature

```typescript
declare const guardArray: (value: unknown) => void;
```

The `guardArray` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardArray } from '@zerodep/app';

// CJS
const { guardArray } = require('@zerodep/app');
```

```javascript
// Arrays
guardArray([]); // void
guardArray([1, 2, 3]); // void
guardArray(['a', 'b', 'c']); // void

// BigInts
guardArray(42n); // throws ZeroDepError: Value is not an array
guardArray(0n); // throws ZeroDepError: Value is not an array
guardArray(-0n); // throws ZeroDepError: Value is not an array
guardArray(-42n); // throws ZeroDepError: Value is not an array

// Booleans
guardArray(true); // throws ZeroDepError: Value is not an array
guardArray(false); // throws ZeroDepError: Value is not an array

// Class
guardArray(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not an array

// Dates
guardArray(new Date()); // throws ZeroDepError: Value is not an array
guardArray(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not an array
guardArray(new Date('2099-12-31')); // throws ZeroDepError: Value is not an array

// Empty
guardArray(null); // throws ZeroDepError: Value is not an array
guardArray(undefined); // throws ZeroDepError: Value is not an array

// Errors
guardArray(new Error('message')); // throws ZeroDepError: Value is not an array
guardArray(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not an array

// Floats
guardArray(3.14); // throws ZeroDepError: Value is not an array
guardArray(0.0); // throws ZeroDepError: Value is not an array
guardArray(-0.0); // throws ZeroDepError: Value is not an array
guardArray(-3.14); // throws ZeroDepError: Value is not an array
guardArray(Math.E); // throws ZeroDepError: Value is not an array
guardArray(Math.PI); // throws ZeroDepError: Value is not an array
guardArray(Number.MIN_VALUE); // throws ZeroDepError: Value is not an array

// Functions
guardArray(() => 'function'); // throws ZeroDepError: Value is not an array
guardArray(async () => 'function'); // throws ZeroDepError: Value is not an array

// Generators
guardArray(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not an array
guardArray(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not an array

// Maps
guardArray(new Map()); // throws ZeroDepError: Value is not an array
guardArray(new Map([['key1', 123]])); // throws ZeroDepError: Value is not an array
guardArray(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not an array

// Numbers
guardArray(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not an array
guardArray(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not an array
guardArray(Number.MAX_VALUE); // throws ZeroDepError: Value is not an array
guardArray(3e8); // throws ZeroDepError: Value is not an array
guardArray(42); // throws ZeroDepError: Value is not an array
guardArray(1); // throws ZeroDepError: Value is not an array
guardArray(0); // throws ZeroDepError: Value is not an array
guardArray(-0); // throws ZeroDepError: Value is not an array
guardArray(-1); // throws ZeroDepError: Value is not an array
guardArray(-42); // throws ZeroDepError: Value is not an array
guardArray(-3e8); // throws ZeroDepError: Value is not an array
guardArray(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not an array
guardArray(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not an array
guardArray(Number.NaN); // throws ZeroDepError: Value is not an array

// POJOs
guardArray({}); // throws ZeroDepError: Value is not an array
guardArray({ key: 'string' }); // throws ZeroDepError: Value is not an array
guardArray({ key: 123 }); // throws ZeroDepError: Value is not an array

// Promise
guardArray(new Promise(() => {})); // throws ZeroDepError: Value is not an array
guardArray(new Promise.all([])); // throws ZeroDepError: Value is not an array
guardArray(new Promise.allSettled([])); // throws ZeroDepError: Value is not an array
guardArray(new Promise.race([])); // throws ZeroDepError: Value is not an array
guardArray(Promise.resolve()); // throws ZeroDepError: Value is not an array

// Regular Expression
guardArray(/[regex]+/gi); // throws ZeroDepError: Value is not an array
guardArray(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not an array

// Sets
guardArray(new Set()); // throws ZeroDepError: Value is not an array
guardArray(new Set([1, 2, 3])); // throws ZeroDepError: Value is not an array
guardArray(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not an array

// Strings
guardArray(''); // throws ZeroDepError: Value is not an array
guardArray('a longer string'); // throws ZeroDepError: Value is not an array
guardArray('1000n'); // throws ZeroDepError: Value is not an array
guardArray('3e8'); // throws ZeroDepError: Value is not an array
guardArray('42'); // throws ZeroDepError: Value is not an array
guardArray('3.14'); // throws ZeroDepError: Value is not an array
guardArray('0'); // throws ZeroDepError: Value is not an array
guardArray('-0'); // throws ZeroDepError: Value is not an array
guardArray('-3.14'); // throws ZeroDepError: Value is not an array
guardArray('-42'); // throws ZeroDepError: Value is not an array
guardArray('-3e8'); // throws ZeroDepError: Value is not an array
guardArray('-1000n'); // throws ZeroDepError: Value is not an array

// Symbols
guardArray(Symbol()); // throws ZeroDepError: Value is not an array
guardArray(Symbol('name')); // throws ZeroDepError: Value is not an array

// This
guardArray(this); // throws ZeroDepError: Value is not an array
guardArray(globalThis); // throws ZeroDepError: Value is not an array

// TypedArrays
guardArray(new Int8Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new Int16Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new Int32Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new Uint8Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new Uint16Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new Uint32Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not an array

guardArray(new BigInt64Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new BigUint64Array(2)); // throws ZeroDepError: Value is not an array

guardArray(new Float32Array(2)); // throws ZeroDepError: Value is not an array
guardArray(new Float64Array(2)); // throws ZeroDepError: Value is not an array

guardArray(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not an array

// WeakMap and WeakSet
guardArray(new WeakMap()); // throws ZeroDepError: Value is not an array
guardArray(new WeakSet()); // throws ZeroDepError: Value is not an array
```

## Advanced Use

The guard may optionally be configured, via the `guardArrayHOF` function, with additional run-time checks.

### Advanced Signature

```typescript
declare const guardArrayHOF: (options: GuardArrayOptions) => (value: unknown) => void;

interface GuardArrayOptions {
  minQuantity?: number;
  maxQuantity?: number;
  typeFn?: (value: unknown) => boolean;
}
```

#### Configuration Options

The `guardArrayHOF` has the following configuration options, all are optional:

- **minQuantity** - the minimum number of array elements that must be present
- **maxQuantity** - the maximum number of array elements that must be present
- **typeFn** - the function with which to validate the array values

### Advanced Examples

```javascript
// ESM
import { guardArrayHOF, GuardArrayOptions } from '@zerodep/app';

// CJS
const { guardArrayHOF, GuardArrayOptions } = require('@zerodep/app');
```

**Min & Max Array Length**

```typescript
const config: GuardArrayOptions = {
  minQuantity: 1,
  maxQuantity: 5,
};
const customArrayGuard = guardArrayHOF(config);

const sampleArray1: any[] = [];
const sampleArray2: number[] = [1, 2, 3, 4];
const sampleArray3: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

customArrayGuard(sampleArray1); // throws ZeroDepError: Array has fewer than 1 items
customArrayGuard(sampleArray2); // void
customArrayGuard(sampleArray3); // throws ZeroDepError: Array has more than 5 items
```

**Array Value Checking**

```typescript
import { isInteger } from '@zerodep/is-integer'; // function for type-checking

const config: GuardArrayOptions = {
  typeFn: isInteger,
};
const customArrayGuard = guardArrayHOF(config);

const sampleArray4: number[] = [1, 2, 'c'];
const sampleArray5: number[] = [0, -0];

customArrayGuard(sampleArray4); // throws ZeroDepError: An array item is of the incorrect type
customArrayGuard(sampleArray5); // void
```

## Installation Sources

This functionality is available from any of the following packages to best match the needs of your project. All packages support tree shaking. Checkout the [Module Matrix](/) for more information.

```shell
# all @zerodep packages
npm i @zerodep/app

# all @zerodep "utilities" functions
npm i @zerodep/utilities

# all @zerodep "guard" functions
npm i @zerodep/guards

# only this @zerodep package
npm i @zerodep/guard-array
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.array` package to `@zerodep/guard-array` for consistency across @zerodep ecosystem
