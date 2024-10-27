# guardFloat()

[![version](https://img.shields.io/npm/v/@zerodep/guard-float?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-float)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a Date; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max values.

## Basic Signature

```typescript
declare const guardFloat: (value: unknown) => void;
```

The `guardFloat` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardFloat } from '@zerodep/app';

// CJS
const { guardFloat } = require('@zerodep/app');
```

```javascript
// Arrays
guardFloat([]); // throws ZeroDepError: Value is not a float
guardFloat([1, 2, 3]); // throws ZeroDepError: Value is not a float
guardFloat(['a', 'b', 'c']); // throws ZeroDepError: Value is not a float

// BigInts
guardFloat(42n); // throws ZeroDepError: Value is not a float
guardFloat(0n); // throws ZeroDepError: Value is not a float
guardFloat(-0n); // throws ZeroDepError: Value is not a float
guardFloat(-42n); // throws ZeroDepError: Value is not a float

// Booleans
guardFloat(true); // throws ZeroDepError: Value is not a float
guardFloat(false); // throws ZeroDepError: Value is not a float

// Class
guardFloat(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a float

// Dates
guardFloat(new Date()); // throws ZeroDepError: Value is not a float
guardFloat(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not a float
guardFloat(new Date('2099-12-31')); // throws ZeroDepError: Value is not a float

// Empty
guardFloat(null); // throws ZeroDepError: Value is not a float
guardFloat(undefined); // throws ZeroDepError: Value is not a float

// Errors
guardFloat(new Error('message')); // throws ZeroDepError: Value is not a float
guardFloat(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a float

// Floats
guardFloat(3.14); // void
guardFloat(0.0); // void
guardFloat(-0.0); // void
guardFloat(-3.14); // void
guardFloat(Math.E); // void
guardFloat(Math.PI); // void
guardFloat(Number.MIN_VALUE); // void

// Functions
guardFloat(() => 'function'); // throws ZeroDepError: Value is not a float
guardFloat(async () => 'function'); // throws ZeroDepError: Value is not a float

// Generators
guardFloat(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a float
guardFloat(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a float

// Maps
guardFloat(new Map()); // throws ZeroDepError: Value is not a float
guardFloat(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a float
guardFloat(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a float

// Numbers
guardFloat(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a float
guardFloat(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not a float
guardFloat(Number.MAX_VALUE); // throws ZeroDepError: Value is not a float
guardFloat(3e8); // throws ZeroDepError: Value is not a float
guardFloat(42); // throws ZeroDepError: Value is not a float
guardFloat(1); // throws ZeroDepError: Value is not a float
guardFloat(0); // void
guardFloat(-0); // void
guardFloat(-1); // throws ZeroDepError: Value is not a float
guardFloat(-42); // throws ZeroDepError: Value is not a float
guardFloat(-3e8); // throws ZeroDepError: Value is not a float
guardFloat(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not a float
guardFloat(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a float
guardFloat(Number.NaN); // throws ZeroDepError: Value is not a float

// POJOs
guardFloat({}); // throws ZeroDepError: Value is not a float
guardFloat({ key: 'string' }); // throws ZeroDepError: Value is not a float
guardFloat({ key: 123 }); // throws ZeroDepError: Value is not a float

// Promise
guardFloat(new Promise(() => {})); // throws ZeroDepError: Value is not a float
guardFloat(new Promise.all([])); // throws ZeroDepError: Value is not a float
guardFloat(new Promise.allSettled([])); // throws ZeroDepError: Value is not a float
guardFloat(new Promise.race([])); // throws ZeroDepError: Value is not a float
guardFloat(Promise.resolve()); // throws ZeroDepError: Value is not a float

// Regular Expression
guardFloat(/[regex]+/gi); // throws ZeroDepError: Value is not a float
guardFloat(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a float

// Sets
guardFloat(new Set()); // throws ZeroDepError: Value is not a float
guardFloat(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a float
guardFloat(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a float

// Strings
guardFloat(''); // throws ZeroDepError: Value is not a float
guardFloat('a longer string'); // throws ZeroDepError: Value is not a float
guardFloat('1000n'); // throws ZeroDepError: Value is not a float
guardFloat('3e8'); // throws ZeroDepError: Value is not a float
guardFloat('42'); // throws ZeroDepError: Value is not a float
guardFloat('3.14'); // throws ZeroDepError: Value is not a float
guardFloat('0'); // throws ZeroDepError: Value is not a float
guardFloat('-0'); // throws ZeroDepError: Value is not a float
guardFloat('-3.14'); // throws ZeroDepError: Value is not a float
guardFloat('-42'); // throws ZeroDepError: Value is not a float
guardFloat('-3e8'); // throws ZeroDepError: Value is not a float
guardFloat('-1000n'); // throws ZeroDepError: Value is not a float

// Symbols
guardFloat(Symbol()); // throws ZeroDepError: Value is not a float
guardFloat(Symbol('name')); // throws ZeroDepError: Value is not a float

// This
guardFloat(this); // throws ZeroDepError: Value is not a float
guardFloat(globalThis); // throws ZeroDepError: Value is not a float

// TypedArrays
guardFloat(new Int8Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new Int16Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new Int32Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new Uint8Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new Uint16Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new Uint32Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a float

guardFloat(new BigInt64Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new BigUint64Array(2)); // throws ZeroDepError: Value is not a float

guardFloat(new Float32Array(2)); // throws ZeroDepError: Value is not a float
guardFloat(new Float64Array(2)); // throws ZeroDepError: Value is not a float

guardFloat(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a float

// WeakMap and WeakSet
guardFloat(new WeakMap()); // throws ZeroDepError: Value is not a float
guardFloat(new WeakSet()); // throws ZeroDepError: Value is not a float
```

## Advanced Use

The guard may optionally be configured, via the `guardFloatHOF` function, with additional range checks.

### Advanced Signature

```typescript
declare const guardFloatHOF: (options: GuardFloatOptions) => (value: unknown) => void;

interface GuardFloatOptions {
  min?: number;
  max?: number;
}
```

### Configuration Options

The `guardFloatHOF` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

### Advanced Examples

```javascript
// ESM
import { guardFloatHOF, GuardFloatOptions } from '@zerodep/app';

// CJS
const { guardFloatHOF, GuardFloatOptions } = require('@zerodep/app');
```

**Min & Max Values**

```typescript
const config: GuardFloatOptions = {
  minQuantity: 37,
  maxQuantity: 98.6,
};

const customFloatGuard = guardFloatHOF(config);

customFloatGuard(32.1); // throws ZeroDepError: Float is less than 37
customFloatGuard(55); // void
customFloatGuard(103.8); // throws ZeroDepError: Float is greater than 98.6
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
npm i @zerodep/guard-float
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.float` package to `@zerodep/guard-float` for consistency across @zerodep ecosystem
