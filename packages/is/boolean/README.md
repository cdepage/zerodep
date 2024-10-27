# @zerodep/is-boolean

[![version](https://img.shields.io/npm/v/@zerodep/is-boolean?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-boolean)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a boolean.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/array) page.

## Signature

```typescript
declare const isBoolean: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isBoolean } from '@zerodep/is-boolean';

// CJS
const { isBoolean } = require('@zerodep/is-boolean');
```

```javascript
// Arrays
isBoolean([]); // false
isBoolean([1, 2, 3]); // false
isBoolean(['a', 'b', 'c']); // false

// BigInts
isBoolean(42n); // false
isBoolean(0n); // false
isBoolean(-0n); // false
isBoolean(-42n); // false

// Booleans
isBoolean(true); // true
isBoolean(false); // true

// Class
isBoolean(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isBoolean(new Date()); // false
isBoolean(new Date('1970-01-01T12:00:00.000Z')); // true
isBoolean(new Date('2099-12-31')); // true

// Empty
isBoolean(null); // false
isBoolean(undefined); // false

// Errors
isBoolean(new Error('message')); // false
isBoolean(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isBoolean(3.14); // false
isBoolean(0.0); // false
isBoolean(-0.0); // false
isBoolean(-3.14); // false
isBoolean(Math.E); // false
isBoolean(Math.PI); // false
isBoolean(Number.MIN_VALUE); // false

// Functions
isBoolean(() => 'function'); // false
isBoolean(async () => 'function'); // false

// Generators
isBoolean(function* () {
  yield 'a';
}); // false
isBoolean(async function* () {
  yield 'a';
}); // false

// Maps
isBoolean(new Map()); // false
isBoolean(new Map([['key1', 123]])); // false
isBoolean(new Map([['key1', 'value1']])); // false

// Numbers
isBoolean(Number.POSITIVE_INFINITY); // false
isBoolean(Number.MAX_SAFE_INTEGER); // false
isBoolean(Number.MAX_VALUE); // false
isBoolean(3e8); // false
isBoolean(42); // false
isBoolean(1); // false
isBoolean(0); // false
isBoolean(-0); // false
isBoolean(-1); // false
isBoolean(-42); // false
isBoolean(-3e8); // false
isBoolean(Number.MIN_SAFE_INTEGER); // false
isBoolean(Number.NEGATIVE_INFINITY); // false
isBoolean(Number.NaN); // false

// POJOs
isBoolean({}); // false
isBoolean({ key: 'string' }); // false
isBoolean({ key: 123 }); // false

// Promise
isBoolean(new Promise(() => {})); // false
isBoolean(new Promise.all([])); // false
isBoolean(new Promise.allSettled([])); // false
isBoolean(new Promise.race([])); // false
isBoolean(Promise.resolve()); // false

// Regular Expression
isBoolean(/[regex]+/gi); // false
isBoolean(new RegExp('d', 'gi')); // false

// Sets
isBoolean(new Set()); // false
isBoolean(new Set([1, 2, 3])); // false
isBoolean(new Set(['a', 'b', 'c'])); // false

// Strings
isBoolean(''); // false
isBoolean('a longer string'); // false
isBoolean('1000n'); // false
isBoolean('3e8'); // false
isBoolean('42'); // false
isBoolean('3.14'); // false
isBoolean('0'); // false
isBoolean('-0'); // false
isBoolean('-3.14'); // false
isBoolean('-42'); // false
isBoolean('-3e8'); // false
isBoolean('-1000n'); // false

// Symbols
isBoolean(Symbol()); // false
isBoolean(Symbol('name')); // false

// This
isBoolean(this); // false
isBoolean(globalThis); // false

// TypedArrays
isBoolean(new Int8Array(2)); // false
isBoolean(new Int16Array(2)); // false
isBoolean(new Int32Array(2)); // false
isBoolean(new Uint8Array(2)); // false
isBoolean(new Uint16Array(2)); // false
isBoolean(new Uint32Array(2)); // false
isBoolean(new Uint8ClampedArray(2)); // false

isBoolean(new BigInt64Array(2)); // false
isBoolean(new BigUint64Array(2)); // false

isBoolean(new Float32Array(2)); // false
isBoolean(new Float64Array(2)); // false

isBoolean(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isBoolean(new WeakMap()); // false
isBoolean(new WeakSet()); // false
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
