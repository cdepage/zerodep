# @zerodep/is-undefined

[![version](https://img.shields.io/npm/v/@zerodep/is-array?style=flat-square&color=blue)](https://www.npmjs.com/package/@zerodep/is-array)
![language](https://img.shields.io/badge/typescript-100%25-blue?style=flat-square)
![types](https://img.shields.io/badge/types-included-blue?style=flat-square)
![license](https://img.shields.io/github/license/cdepage/zerodep?color=blue&style=flat-square)

[![CodeFactor](https://www.codefactor.io/repository/github/cdepage/zerodep/badge)](https://www.codefactor.io/repository/github/cdepage/zerodep)
[![Known Vulnerabilities](https://snyk.io/test/github/cdepage/zerodep/badge.svg)](https://snyk.io/test/github/cdepage/zerodep)

A simple, performant utility to determine if a value is a `undefined`.

Full documentation is available at the [zerodep.app](http://zerodep.app/#/is/undefined) page.

## Examples

All @zerodep packages support both ESM and CJS.

```javascript
import { isUndefined } from '@zerodep/is-undefined';
// or
const { isUndefined } = require('@zerodep/is-undefined');
```

### Positive Response

```javascript
isUndefined(undefined); // true
```

### Negative Response

```javascript
isUndefined(['a', 'b', 'c']); // false
isUndefined(1000n); // false
isUndefined(true); // false
isUndefined(new Date()); // false
isUndefined(''); // false
isUndefined(new Error('message')); // false
isUndefined(3.14); // false
isUndefined(() => 'function'); // false
isUndefined(42); // false
isUndefined(
  new Map([
    ['a', 1],
    ['b', 2],
  ])
); // false
isUndefined(null); // false
isUndefined({ an: 'object' }); // false
isUndefined(new Promise(() => {})); // false
isUndefined(/[regex]+/gi); // false
isUndefined(new Set([1, 2, 3])); // false
isUndefined('a string'); // false
isUndefined(Symbol()); // false
isUndefined(new Int32Array(2)); // false
```
