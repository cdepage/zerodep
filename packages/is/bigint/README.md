# @zerodep/is-bigint

[![version](https://img.shields.io/npm/v/@zerodep/is-bigint?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-bigint)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a BigInt.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/bigint) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isBigInt } from '@zerodep/is-bigint';
// or
const { isBigInt } = require('@zerodep/is-bigint');
```

### Positive Response

```javascript
isBigInt(1000n); // true
isBigInt(BigInt(Number.MAX_VALUE + 1)); // true
```

### Negative Response

```javascript
isBigInt(['a', 'b', 'c']); // false
isBigInt(true); // false
isBigInt(new Date()); // false
isBigInt(''); // false
isBigInt(new Error('message')); // false
isBigInt(3.14); // false
isBigInt(() => 'function'); // false
isBigInt(42); // false
isBigInt(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isBigInt(null); // false
isBigInt({ an: 'object' }); // false
isBigInt(new Promise(() => {})); // false
isBigInt(/[regex]+/gi); // false
isBigInt(new Set([1, 2, 3])); // false
isBigInt('a string'); // false
isBigInt(Symbol()); // false
isBigInt(new Int32Array(2)); // false
isBigInt(undefined); // false
```
