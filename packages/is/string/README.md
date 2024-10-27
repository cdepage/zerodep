# @zerodep/is-string

[![version](https://img.shields.io/npm/v/@zerodep/is-string?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-string)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a string.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/string) page.

## Signature

```typescript
declare const isString: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isString } from '@zerodep/is-string';

// CJS
const { isString } = require('@zerodep/is-string');
```

```javascript
// Arrays
isString([]); // false
isString([1, 2, 3]); // false
isString(['a', 'b', 'c']); // false

// BigInts
isString(42n); // false
isString(0n); // false
isString(-0n); // false
isString(-42n); // false

// Booleans
isString(true); // false
isString(false); // false

// Class
isString(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isString(new Date()); // false
isString(new Date('1970-01-01T12:00:00.000Z')); // false
isString(new Date('2099-12-31')); // false

// Empty
isString(null); // false
isString(undefined); // false

// Errors
isString(new Error('message')); // false
isString(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isString(3.14); // false
isString(0.0); // false
isString(-0.0); // false
isString(-3.14); // false
isString(Math.E); // false
isString(Math.PI); // false
isString(Number.MIN_VALUE); // false

// Functions
isString(() => 'function'); // false
isString(async () => 'function'); // false

// Generators
isString(function* () {
  yield 'a';
}); // false
isString(async function* () {
  yield 'a';
}); // false

// Maps
isString(new Map()); // false
isString(new Map([['key1', 123]])); // false
isString(new Map([['key1', 'value1']])); // false

// Numbers
isString(Number.POSITIVE_INFINITY); // false
isString(Number.MAX_SAFE_INTEGER); // false
isString(3e8); // false
isString(42); // false
isString(1); // false
isString(0); // false
isString(-0); // false
isString(-1); // false
isString(-42); // false
isString(-3e8); // false
isString(Number.MIN_SAFE_INTEGER); // false
isString(Number.NEGATIVE_INFINITY); // false
isString(Number.NaN); // false

// POJOs
isString({}); // false
isString({ key: 'string' }); // false
isString({ key: 123 }); // false

// Promise
isString(new Promise(() => {})); // false
isString(new Promise.all([])); // false
isString(new Promise.allSettled([])); // false
isString(new Promise.race([])); // false
isString(Promise.resolve()); // false

// Regular Expression
isString(/[regex]+/gi); // false
isString(new RegExp('d', 'gi')); // false

// Sets
isString(new Set()); // false
isString(new Set([1, 2, 3])); // false
isString(new Set(['a', 'b', 'c'])); // false

// Strings
isString(''); // true
isString('a longer string'); // true
isString('1000n'); // true
isString('3e8'); // true
isString('42'); // true
isString('3.14'); // true
isString('0'); // true
isString('-0'); // true
isString('-3.14'); // true
isString('-42'); // true
isString('-3e8'); // true
isString('-1000n'); // true

// Symbols
isString(Symbol()); // false
isString(Symbol('name')); // false

// This
isString(this); // false
isString(globalThis); // false

// TypedArrays
isString(new Int8Array(2)); // false
isString(new Int16Array(2)); // false
isString(new Int32Array(2)); // false
isString(new Uint8Array(2)); // false
isString(new Uint16Array(2)); // false
isString(new Uint32Array(2)); // false
isString(new Uint8ClampedArray(2)); // false

isString(new BigInt64Array(2)); // false
isString(new BigUint64Array(2)); // false

isString(new Float32Array(2)); // false
isString(new Float64Array(2)); // false

isString(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isString(new WeakMap()); // false
isString(new WeakSet()); // false
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
