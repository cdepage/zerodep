# guardString()

[![version](https://img.shields.io/npm/v/@zerodep/guard-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a string; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max string lengths.

## Basic Signature

```typescript
declare const guardString: (value: unknown) => void;
```

The `guardString` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardString } from '@zerodep/app';

// CJS
const { guardString } = require('@zerodep/app');
```

```javascript
// Arrays
guardString([]); // throws ZeroDepError: Value is not a string
guardString([1, 2, 3]); // throws ZeroDepError: Value is not a string
guardString(['a', 'b', 'c']); // throws ZeroDepError: Value is not a string

// BigInts
guardString(42n); // throws ZeroDepError: Value is not a string
guardString(0n); // throws ZeroDepError: Value is not a string
guardString(-0n); // throws ZeroDepError: Value is not a string
guardString(-42n); // throws ZeroDepError: Value is not a string

// Booleans
guardString(true); // throws ZeroDepError: Value is not a string
guardString(false); // throws ZeroDepError: Value is not a string

// Class
guardString(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a string

// Dates
guardString(new Date()); // throws ZeroDepError: Value is not a string
guardString(new Date('1970-01-01T12:00:00.000Z')); // throws ZeroDepError: Value is not a string
guardString(new Date('2099-12-31')); // throws ZeroDepError: Value is not a string

// Empty
guardString(null); // throws ZeroDepError: Value is not a string
guardString(undefined); // throws ZeroDepError: Value is not a string

// Errors
guardString(new Error('message')); // throws ZeroDepError: Value is not a string
guardString(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a string

// Floats
guardString(3.14); // throws ZeroDepError: Value is not a string
guardString(0.0); // throws ZeroDepError: Value is not a string
guardString(-0.0); // throws ZeroDepError: Value is not a string
guardString(-3.14); // throws ZeroDepError: Value is not a string
guardString(Math.E); // throws ZeroDepError: Value is not a string
guardString(Math.PI); // throws ZeroDepError: Value is not a string
guardString(Number.MIN_VALUE); // throws ZeroDepError: Value is not a string

// Functions
guardString(() => 'function'); // throws ZeroDepError: Value is not a string
guardString(async () => 'function'); // throws ZeroDepError: Value is not a string

// Generators
guardString(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a string
guardString(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a string

// Maps
guardString(new Map()); // throws ZeroDepError: Value is not a string
guardString(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a string
guardString(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a string

// Numbers
guardString(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a string
guardString(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not a string
guardString(Number.MAX_VALUE); // throws ZeroDepError: Value is not a string
guardString(3e8); // throws ZeroDepError: Value is not a string
guardString(42); // throws ZeroDepError: Value is not a string
guardString(1); // throws ZeroDepError: Value is not a string
guardString(0); // throws ZeroDepError: Value is not a string
guardString(-0); // throws ZeroDepError: Value is not a string
guardString(-1); // throws ZeroDepError: Value is not a string
guardString(-42); // throws ZeroDepError: Value is not a string
guardString(-3e8); // throws ZeroDepError: Value is not a string
guardString(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not a string
guardString(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a string
guardString(Number.NaN); // throws ZeroDepError: Value is not a string

// POJOs
guardString({}); // throws ZeroDepError: Value is not a string
guardString({ key: 'string' }); // throws ZeroDepError: Value is not a string
guardString({ key: 123 }); // throws ZeroDepError: Value is not a string

// Promise
guardString(new Promise(() => {})); // throws ZeroDepError: Value is not a string
guardString(new Promise.all([])); // throws ZeroDepError: Value is not a string
guardString(new Promise.allSettled([])); // throws ZeroDepError: Value is not a string
guardString(new Promise.race([])); // throws ZeroDepError: Value is not a string
guardString(Promise.resolve()); // throws ZeroDepError: Value is not a string

// Regular Expression
guardString(/[regex]+/gi); // throws ZeroDepError: Value is not a string
guardString(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a string

// Sets
guardString(new Set()); // throws ZeroDepError: Value is not a string
guardString(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a string
guardString(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a string

// Strings
guardString(''); // void
guardString('a longer string'); // void
guardString('1000n'); // void
guardString('3e8'); // void
guardString('42'); // void
guardString('3.14'); // void
guardString('0'); // void
guardString('-0'); // void
guardString('-3.14'); // void
guardString('-42'); // void
guardString('-3e8'); // void
guardString('-1000n'); // void

// Symbols
guardString(Symbol()); // throws ZeroDepError: Value is not a string
guardString(Symbol('name')); // throws ZeroDepError: Value is not a string

// This
guardString(this); // throws ZeroDepError: Value is not a string
guardString(globalThis); // throws ZeroDepError: Value is not a string

// TypedArrays
guardString(new Int8Array(2)); // throws ZeroDepError: Value is not a string
guardString(new Int16Array(2)); // throws ZeroDepError: Value is not a string
guardString(new Int32Array(2)); // throws ZeroDepError: Value is not a string
guardString(new Uint8Array(2)); // throws ZeroDepError: Value is not a string
guardString(new Uint16Array(2)); // throws ZeroDepError: Value is not a string
guardString(new Uint32Array(2)); // throws ZeroDepError: Value is not a string
guardString(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a string

guardString(new BigInt64Array(2)); // throws ZeroDepError: Value is not a string
guardString(new BigUint64Array(2)); // throws ZeroDepError: Value is not a string

guardString(new Float32Array(2)); // throws ZeroDepError: Value is not a string
guardString(new Float64Array(2)); // throws ZeroDepError: Value is not a string

guardString(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a string

// WeakMap and WeakSet
guardString(new WeakMap()); // throws ZeroDepError: Value is not a string
guardString(new WeakSet()); // throws ZeroDepError: Value is not a string
```

## Advanced Use

The guard may optionally be configured, via the `guardStringHOF` function, with additional run-time checks.

### Advanced Signature

```typescript
declare const guardStringHOF: (options: GuardStringOptions) => (value: unknown) => void;

interface GuardStringOptions {
  minLength?: number;
  maxLength?: number;
}
```

#### Configuration Options

The `guardStringHOF` has the following configuration options, all are optional:

- **minLength** - the minimum length of the string
- **maxLength** - the maximum length of the string

### Advanced Examples

```javascript
// ESM
import { guardStringHOF, GuardStringOptions } from '@zerodep/app';

// CJS
const { guardStringHOF, GuardStringOptions } = require('@zerodep/app');
```

**Min & Max Length**

```typescript
const config: GuardStringOptions = {
  minLength: 5,
  maxLength: 10,
};

const customStringGuard = guardStringHOF(config);

customStringGuard('abc'); // throws ZeroDepError: String is shorter than 5 character(s)
customStringGuard('testing'); // void
customStringGuard('a long string'); // throws ZeroDepError: String is longer than 10 character(s)
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
npm i @zerodep/guard-string
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.string` package to `@zerodep/guard-string` for consistency across @zerodep ecosystem
