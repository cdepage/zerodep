# @zerodep/is-symbol

[![version](https://img.shields.io/npm/v/@zerodep/is-symbol?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-symbol)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a Symbol.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/symbol) page.

## Signature

```typescript
declare const isSymbol: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isSymbol } from '@zerodep/is-symbol';

// CJS
const { isSymbol } = require('@zerodep/is-symbol');
```

```javascript
// Arrays
isSymbol([]); // false
isSymbol([1, 2, 3]); // false
isSymbol(['a', 'b', 'c']); // false

// BigInts
isSymbol(42n); // false
isSymbol(0n); // false
isSymbol(-0n); // false
isSymbol(-42n); // false

// Booleans
isSymbol(true); // false
isSymbol(false); // false

// Class
isSymbol(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isSymbol(new Date()); // false
isSymbol(new Date('1970-01-01T12:00:00.000Z')); // false
isSymbol(new Date('2099-12-31')); // false

// Empty
isSymbol(null); // false
isSymbol(undefined); // false

// Errors
isSymbol(new Error('message')); // false
isSymbol(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isSymbol(3.14); // false
isSymbol(0.0); // false
isSymbol(-0.0); // false
isSymbol(-3.14); // false
isSymbol(Math.E); // false
isSymbol(Math.PI); // false
isSymbol(Number.MIN_VALUE); // false

// Functions
isSymbol(() => 'function'); // false
isSymbol(async () => 'function'); // false

// Generators
isSymbol(function* () {
  yield 'a';
}); // false
isSymbol(async function* () {
  yield 'a';
}); // false

// Maps
isSymbol(new Map()); // false
isSymbol(new Map([['key1', 123]])); // false
isSymbol(new Map([['key1', 'value1']])); // false

// Numbers
isSymbol(Number.POSITIVE_INFINITY); // false
isSymbol(Number.MAX_SAFE_INTEGER); // false
isSymbol(3e8); // false
isSymbol(42); // false
isSymbol(1); // false
isSymbol(0); // false
isSymbol(-0); // false
isSymbol(-1); // false
isSymbol(-42); // false
isSymbol(-3e8); // false
isSymbol(Number.MIN_SAFE_INTEGER); // false
isSymbol(Number.NEGATIVE_INFINITY); // false
isSymbol(Number.NaN); // false

// POJOs
isSymbol({}); // false
isSymbol({ key: 'string' }); // false
isSymbol({ key: 123 }); // false

// Promise
isSymbol(new Promise(() => {})); // false
isSymbol(new Promise.all([])); // false
isSymbol(new Promise.allSettled([])); // false
isSymbol(new Promise.race([])); // false
isSymbol(Promise.resolve()); // false

// Regular Expression
isSymbol(/[regex]+/gi); // false
isSymbol(new RegExp('d', 'gi')); // false

// Sets
isSymbol(new Set()); // false
isSymbol(new Set([1, 2, 3])); // false
isSymbol(new Set(['a', 'b', 'c'])); // false

// Strings
isSymbol(''); // false
isSymbol('a longer string'); // false
isSymbol('1000n'); // false
isSymbol('3e8'); // false
isSymbol('42'); // false
isSymbol('3.14'); // false
isSymbol('0'); // false
isSymbol('-0'); // false
isSymbol('-3.14'); // false
isSymbol('-42'); // false
isSymbol('-3e8'); // false
isSymbol('-1000n'); // false

// Symbols
isSymbol(Symbol()); // true
isSymbol(Symbol('name')); // true

// This
isSymbol(this); // false
isSymbol(globalThis); // false

// TypedArrays
isSymbol(new Int8Array(2)); // false
isSymbol(new Int16Array(2)); // false
isSymbol(new Int32Array(2)); // false
isSymbol(new Uint8Array(2)); // false
isSymbol(new Uint16Array(2)); // false
isSymbol(new Uint32Array(2)); // false
isSymbol(new Uint8ClampedArray(2)); // false

isSymbol(new BigInt64Array(2)); // false
isSymbol(new BigUint64Array(2)); // false

isSymbol(new Float32Array(2)); // false
isSymbol(new Float64Array(2)); // false

isSymbol(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isSymbol(new WeakMap()); // false
isSymbol(new WeakSet()); // false
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
