# @zerodep/is-date

[![version](https://img.shields.io/npm/v/@zerodep/is-date?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-date)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Date object.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/date) page.

## Signature

```typescript
declare const isDate: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isDate } from '@zerodep/is-date';

// CJS
const { isDate } = require('@zerodep/is-date');
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

---

## ZeroDep Advantages

- **Zero npm dependencies** - completely eliminates all risk of supply-chain attacks, decreases node_modules folder size
- **ESM & CJS** - has both ecmascript modules and common javascript exports
- **Tree Shakable** - built to be fully tree shakable ensuring your packages are the smallest possible size
- **Fully typed** - typescript definitions are provided for every package for a better developer experience
- **Semantically named** - package and method names are easy to grok, remember, use, and read
- **Documented** - actually useful documentation with examples at [zerodep.app](https://zerodep.app)
- **Intelligently Packaged** - multiple npm packages of different sizes available allowing a menu or a-la-carte composition of capabilities
- **100% Tested** - all methods and packages are fully unit tested
- **Predictably Versioned** - semantically versioned for peace-of-mind upgrading, this includes changelogs
- **MIT Licensed** - permissively licensed for maximum usability
