# guardNumber()

[![version](https://img.shields.io/npm/v/@zerodep/guard-number?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-number)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a number; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max values.

## Basic Signature

```typescript
declare const guardNumber: (value: unknown) => void;
```

The `guardNumber` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardNumber } from '@zerodep/app';

// CJS
const { guardNumber } = require('@zerodep/app');
```

```javascript
// Arrays
guardNumber([]); // throws ZeroDepError: Value is not a number
guardNumber([1, 2, 3]); // throws ZeroDepError: Value is not a number
guardNumber(['a', 'b', 'c']); // throws ZeroDepError: Value is not a number

// BigInts
guardNumber(42n); // throws ZeroDepError: Value is not a number
guardNumber(0n); // throws ZeroDepError: Value is not a number
guardNumber(-0n); // throws ZeroDepError: Value is not a number
guardNumber(-42n); // throws ZeroDepError: Value is not a number

// Booleans
guardNumber(true); // throws ZeroDepError: Value is not a number
guardNumber(false); // throws ZeroDepError: Value is not a number

// Class
guardNumber(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a number

// Dates
guardNumber(new Date()); // throws ZeroDepError: Value is not a number
guardNumber(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not a number
guardNumber(new Date('2099-12-31')); // throws ZeroDepError: Value is not a number

// Empty
guardNumber(null); // throws ZeroDepError: Value is not a number
guardNumber(undefined); // throws ZeroDepError: Value is not a number

// Errors
guardNumber(new Error('message')); // throws ZeroDepError: Value is not a number
guardNumber(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a number

// Floats
guardNumber(3.14); // void
guardNumber(0.0); // void
guardNumber(-0.0); // void
guardNumber(-3.14); // void
guardNumber(Math.E); // void
guardNumber(Math.PI); // void
guardNumber(Number.MIN_VALUE); // void

// Functions
guardNumber(() => 'function'); // throws ZeroDepError: Value is not a number
guardNumber(async () => 'function'); // throws ZeroDepError: Value is not a number

// Generators
guardNumber(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a number
guardNumber(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a number

// Maps
guardNumber(new Map()); // throws ZeroDepError: Value is not a number
guardNumber(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a number
guardNumber(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a number

// Numbers
guardNumber(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a number
guardNumber(Number.MAX_SAFE_INTEGER); // void
guardNumber(Number.MAX_VALUE); // void
guardNumber(3e8); // void
guardNumber(42); // void
guardNumber(1); // void
guardNumber(0); // void
guardNumber(-0); // void
guardNumber(-1); // void
guardNumber(-42); // void
guardNumber(-3e8); // void
guardNumber(Number.MIN_SAFE_INTEGER); // void
guardNumber(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a number
guardNumber(Number.NaN); // throws ZeroDepError: Value is not a number

// POJOs
guardNumber({}); // throws ZeroDepError: Value is not a number
guardNumber({ key: 'string' }); // throws ZeroDepError: Value is not a number
guardNumber({ key: 123 }); // throws ZeroDepError: Value is not a number

// Promise
guardNumber(new Promise(() => {})); // throws ZeroDepError: Value is not a number
guardNumber(new Promise.all([])); // throws ZeroDepError: Value is not a number
guardNumber(new Promise.allSettled([])); // throws ZeroDepError: Value is not a number
guardNumber(new Promise.race([])); // throws ZeroDepError: Value is not a number
guardNumber(Promise.resolve()); // throws ZeroDepError: Value is not a number

// Regular Expression
guardNumber(/[regex]+/gi); // throws ZeroDepError: Value is not a number
guardNumber(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a number

// Sets
guardNumber(new Set()); // throws ZeroDepError: Value is not a number
guardNumber(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a number
guardNumber(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a number

// Strings
guardNumber(''); // throws ZeroDepError: Value is not a number
guardNumber('a longer string'); // throws ZeroDepError: Value is not a number
guardNumber('1000n'); // throws ZeroDepError: Value is not a number
guardNumber('3e8'); // throws ZeroDepError: Value is not a number
guardNumber('42'); // throws ZeroDepError: Value is not a number
guardNumber('3.14'); // throws ZeroDepError: Value is not a number
guardNumber('0'); // throws ZeroDepError: Value is not a number
guardNumber('-0'); // throws ZeroDepError: Value is not a number
guardNumber('-3.14'); // throws ZeroDepError: Value is not a number
guardNumber('-42'); // throws ZeroDepError: Value is not a number
guardNumber('-3e8'); // throws ZeroDepError: Value is not a number
guardNumber('-1000n'); // throws ZeroDepError: Value is not a number

// Symbols
guardNumber(Symbol()); // throws ZeroDepError: Value is not a number
guardNumber(Symbol('name')); // throws ZeroDepError: Value is not a number

// This
guardNumber(this); // throws ZeroDepError: Value is not a number
guardNumber(globalThis); // throws ZeroDepError: Value is not a number

// TypedArrays
guardNumber(new Int8Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new Int16Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new Int32Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new Uint8Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new Uint16Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new Uint32Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a number

guardNumber(new BigInt64Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new BigUint64Array(2)); // throws ZeroDepError: Value is not a number

guardNumber(new Float32Array(2)); // throws ZeroDepError: Value is not a number
guardNumber(new Float64Array(2)); // throws ZeroDepError: Value is not a number

guardNumber(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a number

// WeakMap and WeakSet
guardNumber(new WeakMap()); // throws ZeroDepError: Value is not a number
guardNumber(new WeakSet()); // throws ZeroDepError: Value is not a number
```

## Advanced Use

The guard may optionally be configured, via the `guardNumberHOF` function, with additional checks.

### Advanced Signature

```typescript
declare const guardNumberHOF: (options: GuardNumberOptions) => (value: unknown) => void;

interface GuardNumberOptions {
  min?: number;
  max?: number;
}
```

#### Configuration Options

The `guardNumberHOF` has the following configuration options, all are optional:

- **min** - the minimum number value allowed
- **max** - the maximum number value allowed

### Advanced Examples

```javascript
// ESM
import { guardNumberHOF, GuardNumberOptions } from '@zerodep/app';

// CJS
const { guardNumberHOF, GuardNumberOptions } = require('@zerodep/app');
```

**Min & Max Values**

```typescript
const config: GuardNumberOptions = {
  minQuantity: 1,
  maxQuantity: 5,
};

const customNumberGuard = guardNumberHOF(config);

customNumberGuard(-18); // throws ZeroDepError: Number is less than 1
customNumberGuard(3); // void
customNumberGuard(11); // throws ZeroDepError: Number is greater than 5
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
npm i @zerodep/guard-number
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.number` package to `@zerodep/guard-number` for consistency across @zerodep ecosystem
