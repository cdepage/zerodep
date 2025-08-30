# @zerodep/is-datestring

[![version](https://img.shields.io/npm/v/@zerodep/is-datestring?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-datestring)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/9225/badge)](https://www.bestpractices.dev/projects/9225)

A simple, performant utility to determine if a value is a date string in any of the common date formats.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/datestring) page.

## Signature

```typescript
declare const isDateString: (value: string) => boolean;
```

## Examples

All @zerodep packages support both ESM and CJS formats, each complete with Typescript typings.

```javascript
// ESM
import { isDateString } from '@zerodep/is-datestring';

// CJS
const { isDateString } = require('@zerodep/is-datestring');
```

```javascript
// Date Strings
isDateString('2025-08-26'); // true
isDateString('26/08/2025'); // true
isDateString('26.08.2025'); // true
isDateString('26 8 2025'); // true
isDateString('08/26/2025'); // true
isDateString('08-26-2025'); // true

// Invalid Date Strings
isDateString('2025-26-08'); // false
isDateString('2025/26/08'); // false
isDateString('20250826'); // false
isDateString('20252608'); // false
isDateString('2025-26-08T12:00:00'); // false

// Arrays
isDateString([]); // false
isDateString([1, 2, 3]); // false
isDateString(['a', 'b', 'c']); // false

// BigInts
isDateString(42n); // false
isDateString(0n); // false
isDateString(-0n); // false
isDateString(-42n); // false

// Booleans
isDateString(true); // false
isDateString(false); // false

// Class
isDateString(
  class SomeClass {
    constructor() {}
  },
); // false

// Dates
isDateString(new Date()); // false
isDateString(new Date('1970-01-01T12:00:00.000Z')); // false
isDateString(new Date('2099-12-31')); // false

// Empty
isDateString(null); // false  <-- CAUTION: null values are excluded
isDateString(undefined); // false

// Errors
isDateString(new Error('message')); // false
isDateString(new AggregateError([new Error('err1'), new Error('err2')], 'message')); // false

// Floats
isDateString(3.14); // false
isDateString(0.0); // false
isDateString(-0.0); // false
isDateString(-3.14); // false
isDateString(Math.E); // false
isDateString(Math.PI); // false
isDateString(Number.MIN_VALUE); // false

// Functions
isDateString(() => 'function'); // false
isDateString(async () => 'function'); // false

// Generators
isDateString(function* () {
  yield 'a';
}); // false
isDateString(async function* () {
  yield 'a';
}); // false

// Maps
isDateString(new Map()); // false
isDateString(new Map([['key1', 123]])); // false
isDateString(new Map([['key1', 'value1']])); // false

// Numbers
isDateString(Number.POSITIVE_INFINITY); // false
isDateString(Number.MAX_SAFE_INTEGER); // false
isDateString(3e8); // false
isDateString(42); // false
isDateString(1); // false
isDateString(0); // false
isDateString(-0); // false
isDateString(-1); // false
isDateString(-42); // false
isDateString(-3e8); // false
isDateString(Number.MIN_SAFE_INTEGER); // false
isDateString(Number.NEGATIVE_INFINITY); // false
isDateString(Number.NaN); // false

// POJOs
isDateString({}); // false
isDateString({ key: 'string' }); // false
isDateString({ key: 123 }); // false

// Promise
isDateString(new Promise(() => {})); // false
isDateString(new Promise.all([])); // false
isDateString(new Promise.allSettled([])); // false
isDateString(new Promise.race([])); // false
isDateString(Promise.resolve()); // false

// Regular Expression
isDateString(/[regex]+/gi); // false
isDateString(new RegExp('d', 'gi')); // false

// Sets
isDateString(new Set()); // false
isDateString(new Set([1, 2, 3])); // false
isDateString(new Set(['a', 'b', 'c'])); // false

// Strings
isDateString(''); // false
isDateString('a longer string'); // false
isDateString('1000n'); // false
isDateString('3e8'); // false
isDateString('42'); // false
isDateString('3.14'); // false
isDateString('0'); // false
isDateString('-0'); // false
isDateString('-3.14'); // false
isDateString('-42'); // false
isDateString('-3e8'); // false
isDateString('-1000n'); // false

// Symbols
isDateString(Symbol()); // false
isDateString(Symbol('name')); // false

// This
isDateString(this); // false
isDateString(globalThis); // false

// TypedArrays
isDateString(new Int8Array(2)); // false
isDateString(new Int16Array(2)); // false
isDateString(new Int32Array(2)); // false
isDateString(new Uint8Array(2)); // false
isDateString(new Uint16Array(2)); // false
isDateString(new Uint32Array(2)); // false
isDateString(new Uint8ClampedArray(2)); // false

isDateString(new BigInt64Array(2)); // false
isDateString(new BigUint64Array(2)); // false

isDateString(new Float32Array(2)); // false
isDateString(new Float64Array(2)); // false

isDateString(new SharedArrayBuffer(512)); // false

// WeakMap and WeakSet
isDateString(new WeakMap()); // false
isDateString(new WeakSet()); // false
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
