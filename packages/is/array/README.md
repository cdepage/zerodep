# @zerodep/is-array

[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is an array.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/array) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isArray } from '@zerodep/is-array';
// or
const { isArray } = require('@zerodep/is-array');
```

### Positive Response

```javascript
isArray([]); // true
isArray(['a', 'b', 'c']); // true
```

### Negative Response

```javascript
isArray(1000n); // false
isArray(true); // false
isArray(new Date()); // false
isArray(''); // false
isArray(new Error('message')); // false
isArray(3.14); // false
isArray(() => 'function'); // false
isArray(42); // false
isArray(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isArray(null); // false
isArray({ an: 'object' }); // false
isArray(new Promise(() => {})); // false
isArray(/[regex]+/gi); // false
isArray(new Set([1, 2, 3])); // false
isArray('a string'); // false
isArray(Symbol()); // false
isArray(new Int32Array(2)); // false
isArray(undefined); // false
```
