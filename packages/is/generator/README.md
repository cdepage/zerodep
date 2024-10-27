# @zerodep/is-generator

[![version](https://img.shields.io/npm/v/@zerodep/is-generator?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-generator)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a generator.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/generator) page.

## Signature

```typescript
declare const isGenerator: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isGenerator } from '@zerodep/is-generator';

// CJS
const { isGenerator } = require('@zerodep/is-generator');
```

```javascript
// Arrays
isGenerator([]); // false
isGenerator([1, 2, 3]); // false
isGenerator(['a', 'b', 'c']); // false

// BigInts
isGenerator(42n); // false
isGenerator(0n); // false
isGenerator(-0n); // false
isGenerator(-42n); // false

// Booleans
isGenerator(true); // false
isGenerator(false); // false

// Class
isGenerator(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isGenerator(new Date()); // false
isGenerator(new Date('1970-01-01T12:00:00.000Z')); // false
isGenerator(new Date('2099-12-31')); // false

// Empty
isGenerator(null); // false
isGenerator(undefined); // false

// Errors
isGenerator(new Error('message')); // false
isGenerator(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isGenerator(3.14); // false
isGenerator(0.0); // false
isGenerator(-0.0); // false
isGenerator(-3.14); // false
isGenerator(Math.E); // false
isGenerator(Math.PI); // false
isGenerator(Number.MIN_VALUE); // false

// Functions
isGenerator(() => 'function'); // false
isGenerator(async () => 'function'); // false

// Generators
isGenerator(function* () {
  yield 'a';
}); // true
isGenerator(async function* () {
  yield 'a';
}); // true

// Maps
isGenerator(new Map()); // false
isGenerator(new Map([['key1', 123]])); // false
isGenerator(new Map([['key1', 'value1']])); // false

// Numbers
isGenerator(Number.POSITIVE_INFINITY); // false
isGenerator(Number.MAX_SAFE_INTEGER); // false
isGenerator(3e8); // false
isGenerator(42); // false
isGenerator(1); // false
isGenerator(0); // false
isGenerator(-0); // false
isGenerator(-1); // false
isGenerator(-42); // false
isGenerator(-3e8); // false
isGenerator(Number.MIN_SAFE_INTEGER); // false
isGenerator(Number.NEGATIVE_INFINITY); // false
isGenerator(Number.NaN); // false

// POJOs
isGenerator({}); // false
isGenerator({ key: 'string' }); // false
isGenerator({ key: 123 }); // false

// Promise
isGenerator(new Promise(() => {})); // false
isGenerator(new Promise.all([])); // false
isGenerator(new Promise.allSettled([])); // false
isGenerator(new Promise.race([])); // false
isGenerator(Promise.resolve()); // false

// Regular Expression
isGenerator(/[regex]+/gi); // false
isGenerator(new RegExp('d', 'gi')); // false

// Sets
isGenerator(new Set()); // false
isGenerator(new Set([1, 2, 3])); // false
isGenerator(new Set(['a', 'b', 'c'])); // false

// Strings
isGenerator(''); // false
isGenerator('a longer string'); // false
isGenerator('1000n'); // false
isGenerator('3e8'); // false
isGenerator('42'); // false
isGenerator('3.14'); // false
isGenerator('0'); // false
isGenerator('-0'); // false
isGenerator('-3.14'); // false
isGenerator('-42'); // false
isGenerator('-3e8'); // false
isGenerator('-1000n'); // false

// Symbols
isGenerator(Symbol()); // false
isGenerator(Symbol('name')); // false

// This
isGenerator(this); // false
isGenerator(globalThis); // false

// TypedArrays
isGenerator(new Int8Array(2)); // false
isGenerator(new Int16Array(2)); // false
isGenerator(new Int32Array(2)); // false
isGenerator(new Uint8Array(2)); // false
isGenerator(new Uint16Array(2)); // false
isGenerator(new Uint32Array(2)); // false
isGenerator(new Uint8ClampedArray(2)); // false

isGenerator(new BigInt64Array(2)); // false
isGenerator(new BigUint64Array(2)); // false

isGenerator(new Float32Array(2)); // false
isGenerator(new Float64Array(2)); // false

isGenerator(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isGenerator(new WeakMap()); // false
isGenerator(new WeakSet()); // false
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
