# guardDate()

[![version](https://img.shields.io/npm/v/@zerodep/guard-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/guard-date)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A run-time guard to require a value to be a Date; it will throw a `ZeroDepError` if the guard fails. Optional advanced configuration allows specifying min and/or max dates.

## Basic Signature

```typescript
declare const guardDate: (value: unknown) => void;
```

The `guardDate` function has the following parameters:

- **value** - the value to guard

## Basic Examples

```javascript
// ESM
import { guardDate } from '@zerodep/app';

// CJS
const { guardDate } = require('@zerodep/app');
```

```javascript
// Arrays
guardDate([]); // throws ZeroDepError: Value is not a date
guardDate([1, 2, 3]); // throws ZeroDepError: Value is not a date
guardDate(['a', 'b', 'c']); // throws ZeroDepError: Value is not a date

// BigInts
guardDate(42n); // throws ZeroDepError: Value is not a date
guardDate(0n); // throws ZeroDepError: Value is not a date
guardDate(-0n); // throws ZeroDepError: Value is not a date
guardDate(-42n); // throws ZeroDepError: Value is not a date

// Booleans
guardDate(true); // throws ZeroDepError: Value is not a date
guardDate(false); // throws ZeroDepError: Value is not a date

// Class
guardDate(
  class SomeClass {
    constructor() {}
  }
); // throws ZeroDepError: Value is not a date

// Dates
guardDate(new Date()); // void
guardDate(new Date('1970-01-01T12:00:00.000Z')); // void
guardDate(new Date('2099-12-31')); // void

// Empty
guardDate(null); // throws ZeroDepError: Value is not a date
guardDate(undefined); // throws ZeroDepError: Value is not a date

// Errors
guardDate(new Error('message')); // throws ZeroDepError: Value is not a date
guardDate(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // throws ZeroDepError: Value is not a date

// Floats
guardDate(3.14); // throws ZeroDepError: Value is not a date
guardDate(0.0); // throws ZeroDepError: Value is not a date
guardDate(-0.0); // throws ZeroDepError: Value is not a date
guardDate(-3.14); // throws ZeroDepError: Value is not a date
guardDate(Math.E); // throws ZeroDepError: Value is not a date
guardDate(Math.PI); // throws ZeroDepError: Value is not a date
guardDate(Number.MIN_VALUE); // throws ZeroDepError: Value is not a date

// Functions
guardDate(() => 'function'); // throws ZeroDepError: Value is not a date
guardDate(async () => 'function'); // throws ZeroDepError: Value is not a date

// Generators
guardDate(function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a date
guardDate(async function* () {
  yield 'a';
}); // throws ZeroDepError: Value is not a date

// Maps
guardDate(new Map()); // throws ZeroDepError: Value is not a date
guardDate(new Map([['key1', 123]])); // throws ZeroDepError: Value is not a date
guardDate(new Map([['key1', 'value1']])); // throws ZeroDepError: Value is not a date

// Numbers
guardDate(Number.POSITIVE_INFINITY); // throws ZeroDepError: Value is not a date
guardDate(Number.MAX_SAFE_INTEGER); // throws ZeroDepError: Value is not a date
guardDate(Number.MAX_VALUE); // throws ZeroDepError: Value is not a date
guardDate(3e8); // throws ZeroDepError: Value is not a date
guardDate(42); // throws ZeroDepError: Value is not a date
guardDate(1); // throws ZeroDepError: Value is not a date
guardDate(0); // throws ZeroDepError: Value is not a date
guardDate(-0); // throws ZeroDepError: Value is not a date
guardDate(-1); // throws ZeroDepError: Value is not a date
guardDate(-42); // throws ZeroDepError: Value is not a date
guardDate(-3e8); // throws ZeroDepError: Value is not a date
guardDate(Number.MIN_SAFE_INTEGER); // throws ZeroDepError: Value is not a date
guardDate(Number.NEGATIVE_INFINITY); // throws ZeroDepError: Value is not a date
guardDate(Number.NaN); // throws ZeroDepError: Value is not a date

// POJOs
guardDate({}); // throws ZeroDepError: Value is not a date
guardDate({ key: 'string' }); // throws ZeroDepError: Value is not a date
guardDate({ key: 123 }); // throws ZeroDepError: Value is not a date

// Promise
guardDate(new Promise(() => {})); // throws ZeroDepError: Value is not a date
guardDate(new Promise.all([])); // throws ZeroDepError: Value is not a date
guardDate(new Promise.allSettled([])); // throws ZeroDepError: Value is not a date
guardDate(new Promise.race([])); // throws ZeroDepError: Value is not a date
guardDate(Promise.resolve()); // throws ZeroDepError: Value is not a date

// Regular Expression
guardDate(/[regex]+/gi); // throws ZeroDepError: Value is not a date
guardDate(new RegExp('d', 'gi')); // throws ZeroDepError: Value is not a date

// Sets
guardDate(new Set()); // throws ZeroDepError: Value is not a date
guardDate(new Set([1, 2, 3])); // throws ZeroDepError: Value is not a date
guardDate(new Set(['a', 'b', 'c'])); // throws ZeroDepError: Value is not a date

// Strings
guardDate(''); // throws ZeroDepError: Value is not a date
guardDate('a longer string'); // throws ZeroDepError: Value is not a date
guardDate('1000n'); // throws ZeroDepError: Value is not a date
guardDate('3e8'); // throws ZeroDepError: Value is not a date
guardDate('42'); // throws ZeroDepError: Value is not a date
guardDate('3.14'); // throws ZeroDepError: Value is not a date
guardDate('0'); // throws ZeroDepError: Value is not a date
guardDate('-0'); // throws ZeroDepError: Value is not a date
guardDate('-3.14'); // throws ZeroDepError: Value is not a date
guardDate('-42'); // throws ZeroDepError: Value is not a date
guardDate('-3e8'); // throws ZeroDepError: Value is not a date
guardDate('-1000n'); // throws ZeroDepError: Value is not a date

// Symbols
guardDate(Symbol()); // throws ZeroDepError: Value is not a date
guardDate(Symbol('name')); // throws ZeroDepError: Value is not a date

// This
guardDate(this); // throws ZeroDepError: Value is not a date
guardDate(globalThis); // throws ZeroDepError: Value is not a date

// TypedArrays
guardDate(new Int8Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new Int16Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new Int32Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new Uint8Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new Uint16Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new Uint32Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new Uint8ClampedArray(2)); // throws ZeroDepError: Value is not a date

guardDate(new BigInt64Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new BigUint64Array(2)); // throws ZeroDepError: Value is not a date

guardDate(new Float32Array(2)); // throws ZeroDepError: Value is not a date
guardDate(new Float64Array(2)); // throws ZeroDepError: Value is not a date

guardDate(new SharedArrayBuffer(512)); // throws ZeroDepError: Value is not a date

// WeakMap and WeakSet
guardDate(new WeakMap()); // throws ZeroDepError: Value is not a date
guardDate(new WeakSet()); // throws ZeroDepError: Value is not a date
```

## Advanced Use

The guard may optionally be configured, via the `guardDateHOF` function, with additional run-time range checks.

### Advanced Signature

```typescript
declare const guardDateHOF: (options: GuardDateOptions) => (value: unknown) => void;

interface GuardDateOptions {
  earliest?: number;
  latest?: number;
}
```

### Configuration Options

The `GuardDateOptions` has the following configuration options, all are optional:

- **earliest** - the smallest/earliest date allowed
- **latest** - the largest/latest date allowed

### Advanced Examples

```javascript
// ESM
import { guardDateHOF, GuardDateOptions } from '@zerodep/app';

// CJS
const { guardDateHOF, GuardDateOptions } = require('@zerodep/app');
```

**Earliest & Latest Dates**

```typescript
const config: GuardDateOptions = {
  earliest: new Date('1999-12-31'),
  latest: new Date('2038-01-19'),
};

const customDateGuard = guardDateHOF(config);

customDateGuard('1988-02-15'; // throws ZeroDepError: Date is less than 1999-12-31T00:00:00.000Z
customDateGuard('2021-02-28'); // void
customDateGuard('2151-06-06'); // throws ZeroDepError: Date is greater than 2038-01-19T00:00:00.000Z
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
npm i @zerodep/guard-date
```

---

## Package Changelog

All notable changes to this project will be documented in this file. This project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

--

#### Release 2.0.x

**Breaking**

- renamed the `@zerodep/guard.date` package to `@zerodep/guard-date` for consistency across @zerodep ecosystem
