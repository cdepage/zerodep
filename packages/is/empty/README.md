# @zerodep/is-empty

[![version](https://img.shields.io/npm/v/@zerodep/is-empty?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-empty)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is `null`, `undefined` or an empty array, string, POJO, Map, or Set.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/empty) page.

## Signature

```typescript
declare const isEmpty: (value: unknown) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isEmpty } from '@zerodep/is-empty';

// CJS
const { isEmpty } = require('@zerodep/is-empty');
```

```javascript
// Arrays
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
isEmpty(['a', 'b', 'c']); // false

// BigInts
isEmpty(42n); // false
isEmpty(0n); // false
isEmpty(-0n); // false
isEmpty(-42n); // false

// Booleans
isEmpty(true); // false
isEmpty(false); // false

// Class
isEmpty(
  class SomeClass {
    constructor() {}
  }
); // false

// Dates
isEmpty(new Date()); // false
isEmpty(new Date('1970-01-01T12:00:00.000Z')); // false
isEmpty(new Date('2099-12-31')); // false

// Empty
isEmpty(null); // true
isEmpty(undefined); // true

// Errors
isEmpty(new Error('message')); // false
isEmpty(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isEmpty(3.14); // false
isEmpty(0.0); // false
isEmpty(-0.0); // false
isEmpty(-3.14); // false
isEmpty(Math.E); // false
isEmpty(Math.PI); // false
isEmpty(Number.MIN_VALUE); // false

// Functions
isEmpty(() => 'function'); // false
isEmpty(async () => 'function'); // false

// Generators
isEmpty(function* () {
  yield 'a';
}); // false
isEmpty(async function* () {
  yield 'a';
}); // false

// Maps
isEmpty(new Map()); // true
isEmpty(new Map([['key1', 123]])); // false
isEmpty(new Map([['key1', 'value1']])); // false

// Numbers
isEmpty(Number.POSITIVE_INFINITY); // false
isEmpty(Number.MAX_SAFE_INTEGER); // false
isEmpty(Number.MAX_VALUE); // false
isEmpty(3e8); // false
isEmpty(42); // false
isEmpty(1); // false
isEmpty(0); // false
isEmpty(-0); // false
isEmpty(-1); // false
isEmpty(-42); // false
isEmpty(-3e8); // false
isEmpty(Number.MIN_SAFE_INTEGER); // false
isEmpty(Number.NEGATIVE_INFINITY); // false
isEmpty(Number.NaN); // false

// POJOs
isEmpty({}); // true
isEmpty({ key: 'string' }); // false
isEmpty({ key: 123 }); // false

// Promise
isEmpty(new Promise(() => {})); // false
isEmpty(new Promise.all([])); // false
isEmpty(new Promise.allSettled([])); // false
isEmpty(new Promise.race([])); // false
isEmpty(Promise.resolve()); // false

// Regular Expression
isEmpty(/[regex]+/gi); // false
isEmpty(new RegExp('d', 'gi')); // false

// Sets
isEmpty(new Set()); // true
isEmpty(new Set([1, 2, 3])); // false
isEmpty(new Set(['a', 'b', 'c'])); // false

// Strings
isEmpty(''); // true
isEmpty('a longer string'); // false
isEmpty('1000n'); // false
isEmpty('3e8'); // false
isEmpty('42'); // false
isEmpty('3.14'); // false
isEmpty('0'); // false
isEmpty('-0'); // false
isEmpty('-3.14'); // false
isEmpty('-42'); // false
isEmpty('-3e8'); // false
isEmpty('-1000n'); // false

// Symbols
isEmpty(Symbol()); // false
isEmpty(Symbol('name')); // false

// This
isEmpty(this); // false
isEmpty(globalThis); // false

// TypedArrays
isEmpty(new Int8Array(2)); // false
isEmpty(new Int16Array(2)); // false
isEmpty(new Int32Array(2)); // false
isEmpty(new Uint8Array(2)); // false
isEmpty(new Uint16Array(2)); // false
isEmpty(new Uint32Array(2)); // false
isEmpty(new Uint8ClampedArray(2)); // false

isEmpty(new BigInt64Array(2)); // false
isEmpty(new BigUint64Array(2)); // false

isEmpty(new Float32Array(2)); // false
isEmpty(new Float64Array(2)); // false

isEmpty(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isEmpty(new WeakMap()); // false
isEmpty(new WeakSet()); // false
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
